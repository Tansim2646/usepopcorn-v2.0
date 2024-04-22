import WatchListSummary from "./WatchListSummary";
import WatchedMovie from "./WatchedMovie";
export default function WatchListDetails({ watchList, setWatchList }) {
  return (
    <div className="watchlist">
      <WatchListSummary watchList={watchList} />
      {watchList?.map((movie) => (
        <WatchedMovie
          movie={movie}
          watchList={watchList}
          setWatchList={setWatchList}
        />
      ))}
    </div>
  );
}
