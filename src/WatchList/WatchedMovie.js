export default function WatchedMovie({ movie }) {
  return (
    <div className="watchedmovie">
      <img src={movie.Poster} />
      <div className="watchedmoviedetails">
        <p>{movie.Title}</p>
        <div className="watchedmoviesummary">
          <div className="watchedmoviedetail">
            <img src="./Star.svg" alt="star__image" />
            <p>{movie.imdbRating}</p>
          </div>
          <div className="watchedmoviedetail">
            <img src="./Sun.svg" />
            <p>{movie.userRating}</p>
          </div>
          <div className="watchedmoviedetail">
            <img src="./Hourglass.svg" />
            <p>{movie.Runtime}</p>
          </div>
          <div className="watchedmoviedetail">
            <img src="./cancel.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}
