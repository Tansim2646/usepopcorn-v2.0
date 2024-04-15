import Rating from "../utilities/Rating";

export default function MovieDetails() {
  return (
    <div className="moviedetails">
      <div className="movieheader">
        <img src="https://via.placeholder.com/120x142" alt="movie_poster" />
        <div className="moviecredentials">
          <h2>Hello Dolly</h2>
          <p className="release_date">16 Dec 1969, 146 min</p>
          <h4>Adventure,conemedy,Musical</h4>
          <p className="moviecredentials__rating">
            <span>
              <img src="./Star.svg" alt="movie__rating"></img>
            </span>
            7.0IMDB Rating
          </p>
          <span className="backnav">
            <img src="./Left_Arrow.svg" alt="backnavigation"></img>
          </span>
        </div>
      </div>
      <div className="description">
        <div className="addtowatchlist">
          <Rating />
          <button className="addtowatchlist__button">+ Add To Watchlist</button>
        </div>
        <div className="movie__description">
          <p className="plot">
            A gawky Englishman comes to Los Angeles to find the woman of his
            dreams. Starring Stephen Merchant, Christine Woods, Nate Torrence
          </p>
          <p className="movie__director">Directed by N/A</p>
        </div>
      </div>
    </div>
  );
}
