import { useState } from "react";
import Rating from "../utilities/Rating";

export default function AddToWatchList({
  handleSettingWatchList,
  movie,
  onUnSelected,
}) {
  const [userRating, setUserRaing] = useState(null);
  function handleOnRating(value) {
    setUserRaing(value);
  }
  function handleClickOnAddToWatchListButton() {
    handleSettingWatchList({
      ...movie,
      userRating,
    });
    onUnSelected();
  }
  return (
    <div className="addtowatchlist">
      <Rating handleOnRating={handleOnRating} />
      {userRating && (
        <button
          className="addtowatchlist__button"
          onClick={() => handleClickOnAddToWatchListButton()}
        >
          + Add To Watchlist
        </button>
      )}
    </div>
  );
}
