export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__box">
          <div className="logobox">
            <div className="logoText">Usepopcorn</div>
            <img src="./popcorn_box.svg" alt="usepopcorn logo" />
          </div>
          <input className="search_box" placeholder="Enter Movie Name" />
          <div className="result">Found 0 results</div>
        </div>
      </div>
    </div>
  );
}
