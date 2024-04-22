export default function WatchedMovie({ movie, setWatchList }) {
  return (
    <div className="watchedmovie">
      <img src={movie.Poster} alt="poster" />
      <div className="watchedmoviedetails">
        <p>{movie.Title}</p>
        <div className="watchedmoviesummary">
          <div className="watchedmoviedetail">
            <img src="./Star.svg" alt="star__image" />
            <p>{movie.imdbRating}</p>
          </div>
          <div className="watchedmoviedetail">
            <img src="./Sun.svg" alt="userRating" />
            <p>{movie.userRating}</p>
          </div>
          <div className="watchedmoviedetail">
            <img src="./Hourglass.svg" alt="runtime" />
            <p>{movie.Runtime}</p>
          </div>
          <div
            className="watchedmoviedetail"
            onClick={() =>
              setWatchList((wl) =>
                wl.filter((wm) => wm.imdbID !== movie.imdbID)
              )
            }
          >
            <img src="./cancel.svg" alt="cancel" />
          </div>
        </div>
      </div>
    </div>
  );
}
