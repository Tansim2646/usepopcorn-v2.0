export default function WatchListSummary({ watchList }) {
  function averageimdb() {
    return (
      watchList.reduce((acc, b) => acc + Number(b.imdbRating), 0) /
      watchList.length
    ).toFixed(2);
  }
  function averageUserRating() {
    return (
      watchList.reduce((acc, b) => acc + Number(b.userRating), 0) /
      watchList.length
    ).toFixed(2);
  }
  return (
    <div className="watchlistsummary">
      <p>Movies you Watched</p>
      <div className="summarylayout">
        <div className="summarybox">
          <img src="./Keycap_Number_Sign.svg" alt="movies_sign" />
          <p>
            {watchList.length}
            <br />
            Movies
          </p>
        </div>
        <div className="summarybox">
          <img src="./Star.svg" alt="star_logo" />
          <p>{watchList.length > 0 ? averageimdb() : 0}</p>
        </div>
        <div className="summarybox">
          <img src="./Sun.svg" alt="Sun_logo" />
          <p>{watchList.length > 0 ? averageUserRating() : 0}</p>
        </div>
        <div className="summarybox">
          <img src="./Hourglass.svg" alt="hourglass__logo" />
          <p>
            {watchList.reduce(
              (acc, b) => acc + Number(b.Runtime.split(" ").at(0)),
              0
            )}{" "}
            min
          </p>
        </div>
      </div>
    </div>
  );
}
