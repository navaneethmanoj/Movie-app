import React from "react";

const AddToFavorites = (props) => {
  return (
    <>
      {props.addOrRemove && (
        <>
          Remove from Watchlist
          <i class="fas fa-trash"/>
        </>
      )}
      {!props.addOrRemove && (
        <>
          Add to Watchlist <i className="fas fa-heart" />
        </>
      )}
    </>
  );
};

export default AddToFavorites;
