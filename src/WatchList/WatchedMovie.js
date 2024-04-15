export default function WatchedMovie() {
  return (
    <div className="watchedmovie">
      <img src="https://via.placeholder.com/96x96" />
      <div className="watchedmoviedetails">
        <p>Eminem bantai</p>
        <div className="watchedmoviesummary">
          <div className="watchedmoviedetail">
            <img src="./Star.svg" alt="star__image" />
            <p>0.00</p>
          </div>
          <div className="watchedmoviedetail">
            <img src="./Sun.svg" />
            <p>10.00</p>
          </div>
          <div className="watchedmoviedetail">
            <img src="./Hourglass.svg" />
            <p>10.00</p>
          </div>
          <div className="watchedmoviedetail">
            <img src="./cancel.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}
