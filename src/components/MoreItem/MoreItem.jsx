import React from "react";

function MoreItem(props) {
  return (
    <div className="movies__more">
      <button
            className="button button__movies-more"
            type="button"
            aria-label="добавить фильм"
            onClick={props.handleAddedMovies}
          >Ещё</button>
    </div>
  );
}

export default MoreItem;
