import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import image_1 from "../../images/pic_movies_1.png";
import image_2 from "../../images/pic_movies_2.png";
import image_3 from "../../images/pic_movies_3.png";
import image_4 from "../../images/pic_movies_4.png";
import image_5 from "../../images/pic_movies_5.png";
import image_6 from "../../images/pic_movies_6.png";

function MoviesCardList(props) {
  return (
    <div className="moviescard-list">
      <MoviesCard image={image_1} />
      <MoviesCard image={image_2} />
      <MoviesCard image={image_3} />
      <MoviesCard image={image_4} />
      <MoviesCard image={image_5} />
      <MoviesCard image={image_6} />
    </div>
  );
}

export default MoviesCardList;
