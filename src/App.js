import Circle from "./utilities/Circle";
import Container from "./Container";
import Navbar from "./Navbar";
import Main from "./Main";
import MovieList from "./Movies/MovieList";
import WatchList from "./WatchList/WatchList";
import MovieDetails from "./MovieDetails/MovieDetails";
import { useState } from "react";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <Circle />
      <Container>
        <Navbar
          setMovies={setMovies}
          setError={setError}
          setIsLoading={setIsLoading}
          movies={movies}
        />
        <Main>
          <MovieList movies={movies} isLoading={isLoading} />
          <WatchList />
        </Main>
      </Container>
    </>
  );
}
