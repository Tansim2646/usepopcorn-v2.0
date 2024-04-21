export default function Movie({ movie, onSelected }) {
  return (
    <div className="movie" onClick={() => onSelected(movie.imdbID)}>
      <img src={movie.Poster} alt={movie.Title} />
      <div className="movie_detail_box">
        <div className="movie_detail_box_name">{movie.Title}</div>
        <div className="movie_detail_box_year">{movie.Year}</div>
      </div>
    </div>
  );
}
