import React from "react";

function MoreItem() {
  return (
    <div className="movies__more">
      <button
            className="button button__movies-more"
            type="button"
            aria-label="добавить фильм"
            //onClick={}
          >Ещё</button>
    </div>
  );
}

export default MoreItem;
