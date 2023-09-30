import { useState, useEffect } from "react";

const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (evt) => {
      setTimeout(setWidth(evt.target.innerWidth), 500);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return width;
};

export default useResize;
