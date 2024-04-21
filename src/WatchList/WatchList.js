import { useState } from "react";
import MovieDetails from "../MovieDetails/MovieDetails";
import WatchListDetails from "./WatchListDetails";

export default function WatchList({ isSelected, onUnSelected }) {
  const [watchList, setWatchList] = useState([]);
  function handleSettingWatchList(movie) {
    if (
      !watchList.some((watchedMovie) => watchedMovie.imdbID === movie.imdbID)
    ) {
      setWatchList((watchlist) => [...watchlist, movie]);
    }
  }
  return isSelected ? (
    <MovieDetails
      isSelected={isSelected}
      onUnSelected={onUnSelected}
      handleSettingWatchList={handleSettingWatchList}
    />
  ) : (
    <WatchListDetails watchList={watchList} />
  );
}
