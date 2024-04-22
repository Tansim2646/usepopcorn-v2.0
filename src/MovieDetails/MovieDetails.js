import { useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";
import AddToWatchList from "./AddToWatchList";
const API_KEY = "8b145ec7";
const override = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translateY(-60%)",
  transform: "translateX(-50%)",
};

export default function MovieDetails({
  isSelected,
  onUnSelected,
  handleSettingWatchList,
  watchList,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null);
  const isWatched = watchList.some((wm) => wm.imdbID === isSelected);
  console.log(isWatched);
  useEffect(() => {
    async function getMovieDetails() {
      setIsLoading(true);
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?i=${isSelected}&apikey=${API_KEY}`
        );
        if (!response.ok) {
          throw new Error("Something went wrong ❌");
        }
        const result = await response.json();
        setMovieDetails(result);
      } catch (error) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getMovieDetails();
  }, [isSelected]);
  return (
    <div className="moviedetails">
      {isLoading ? (
        <BounceLoader
          size={40}
          cssOverride={override}
          loading={isLoading}
          color="#94C5CC"
        />
      ) : (
        <>
          <div className="movieheader">
            <img src={movieDetails?.Poster} alt={movieDetails?.Title} />
            <div className="moviecredentials">
              <h2>{movieDetails?.Title}</h2>
              <p className="release_date">
                {movieDetails?.Released}, {movieDetails?.Runtime}
              </p>
              <h4>{movieDetails?.Genre}</h4>
              <p className="moviecredentials__rating">
                <span>
                  <img src="./Star.svg" alt="movie__rating"></img>
                </span>
                {movieDetails?.imdbRating} IMDB Rating
              </p>
              <span className="backnav" onClick={() => onUnSelected()}>
                <img src="./Left_Arrow.svg" alt="backnavigation"></img>
              </span>
            </div>
          </div>
          <div className="description">
            {!isWatched ? (
              <AddToWatchList
                handleSettingWatchList={handleSettingWatchList}
                movie={movieDetails}
                onUnSelected={onUnSelected}
              />
            ) : (
              <p>You have already rated this movie 😊</p>
            )}
            <div className="movie__description">
              <p className="plot">{movieDetails?.Plot}</p>
              <p className="movie__director">{movieDetails?.Director}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
