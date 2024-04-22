import { useEffect, useState } from "react";
const API_KEY = "8b145ec7";
export default function Navbar({ setMovies, setError, setIsLoading, movies }) {
  const [keyword, setKeyWord] = useState("");
  useEffect(() => {
    async function handleRequest() {
      try {
        setIsLoading(true);
        const response = await fetch(
          `http://www.omdbapi.com/?s=${keyword}&apikey=${API_KEY}`
        );
        if (!response.ok) {
          throw new Error("Something Went Wrong ❌");
        }
        const result = await response.json();
        if (result.Response === "False") {
          throw new Error("Movie Not Found ❌");
        }
        setMovies(result.Search);
        setError("");
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    if (keyword.length > 3) {
      handleRequest();
    }
  }, [keyword]);

  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__box">
          <div className="logobox">
            <div className="logoText">Usepopcorn</div>
            <img src="./popcorn_box.svg" alt="usepopcorn logo" />
          </div>
          <input
            className="search_box"
            placeholder="Enter Movie Name"
            onChange={(e) => setKeyWord(e.target.value)}
            value={keyword}
          />
          <div className="result">Found {movies.length} results</div>
        </div>
      </div>
    </div>
  );
}
