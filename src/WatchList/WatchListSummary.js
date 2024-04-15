export default function WatchListSummary() {
  return (
    <div className="watchlistsummary">
      <p>Movies you Watched</p>
      <div className="summarylayout">
        <div className="summarybox">
          <img src="./Keycap_Number_Sign.svg" alt="movies_sign" />
          <p>
            0<br />
            Movies
          </p>
        </div>
        <div className="summarybox">
          <img src="./Star.svg" alt="star_logo" />
          <p>0.00</p>
        </div>
        <div className="summarybox">
          <img src="./Sun.svg" alt="Sun_logo" />
          <p>10.00</p>
        </div>
        <div className="summarybox">
          <img src="./Hourglass.svg" alt="hourglass__logo" />
          <div>10.00</div>
        </div>
      </div>
    </div>
  );
}
