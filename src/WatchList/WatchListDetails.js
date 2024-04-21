import WatchListSummary from "./WatchListSummary";
import WatchedMovie from "./WatchedMovie";
export default function WatchListDetails({ watchList }) {
  return (
    <div className="watchlist">
      <WatchListSummary watchList={watchList} />
      {watchList?.map((movie) => (
        <WatchedMovie movie={movie} />
      ))}
    </div>
  );
}
