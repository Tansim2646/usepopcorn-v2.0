import MovieDetails from "../MovieDetails/MovieDetails";
import WatchListDetails from "./WatchListDetails";

export default function WatchList({
  isSelected,
  onUnSelected,
  watchList,
  setWatchList,
}) {
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
      watchList={watchList}
    />
  ) : (
    <WatchListDetails watchList={watchList} setWatchList={setWatchList} />
  );
}
