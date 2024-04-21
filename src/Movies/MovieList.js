import { BounceLoader, ClipLoader } from "react-spinners";
import Movie from "./Movie";
const override = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translateY(-60%)",
  transform: "translateX(-50%)",
};

export default function MovieList({ movies, isLoading, onSelected }) {
  return (
    <div className="movielist">
      <BounceLoader
        size={40}
        cssOverride={override}
        loading={isLoading}
        color="#94C5CC"
      />
      {movies.map((movie) => {
        if (movie.Poster === "N/A") return;
        return (
          <Movie movie={movie} key={movie.imdbID} onSelected={onSelected} />
        );
      })}
    </div>
  );
}
