import Circle from "./utilities/Circle";
import Container from "./Container";
import Navbar from "./Navbar";
import Main from "./Main";
import MovieList from "./Movies/MovieList";
import WatchList from "./WatchList/WatchList";
import { useState } from "react";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSelected, setIsSelected] = useState(null);
  const [watchList, setWatchList] = useState([]);
  function handleSelected(id) {
    setIsSelected(id);
  }
  function onUnSelected() {
    setIsSelected(null);
  }
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
          <MovieList
            movies={movies}
            isLoading={isLoading}
            onSelected={handleSelected}
          />
          <WatchList
            isSelected={isSelected}
            onUnSelected={onUnSelected}
            watchList={watchList}
            setWatchList={setWatchList}
          />
        </Main>
      </Container>
    </>
  );
}
