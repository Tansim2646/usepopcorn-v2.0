import WatchListSummary from "./WatchListSummary";
import WatchedMovie from "./WatchedMovie";

export default function WatchList() {
  return (
    <div className="watchlist">
      <WatchListSummary />
      <WatchedMovie />
    </div>
  );
}
