import Circle from "./utilities/Circle";
import Container from "./Container";
import Navbar from "./Navbar";
import Main from "./Main";
import MovieList from "./Movies/MovieList";
import WatchList from "./WatchList/WatchList";

export default function App() {
  return (
    <>
      <Circle />
      <Container>
        <Navbar />
        <Main>
          <MovieList />
          <WatchList />
        </Main>
      </Container>
    </>
  );
}
