import { useState } from "react";

export default function Rating({
  maxRating = 10,
  height = 24,
  width = 24,
  color = "#ffa200",
}) {
  const [tempRating, setTempRating] = useState(null);
  const [rating, setRating] = useState(0);
  const parentContainer = {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    backgroundColor: "#B4D2E7",
    padding: "16px",
    borderRadius: "10px",
  };
  const starContainer = {
    display: "flex",
  };
  const textStyle = {
    lineHeight: "1",
    color: "white",
  };

  return (
    <div style={parentContainer}>
      <div style={starContainer}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            height={height}
            width={width}
            value={i}
            color={color}
            key={i}
            handleMouse={setTempRating}
            fill={tempRating ? tempRating > i : rating > i}
            handleClick={setRating}
          />
        ))}
      </div>
      <p style={textStyle}>{tempRating ? tempRating : rating}</p>
    </div>
  );
}

// STAR COMPONENT
function Star({ height, width, value, color, handleMouse, fill, handleClick }) {
  return (
    <span
      onMouseEnter={() => handleMouse(value + 1)}
      onMouseLeave={() => handleMouse(null)}
      onClick={() => handleClick(value + 1)}
    >
      {fill ? (
        <svg
          role="button"
          style={{ color: "yellow" }}
          xmlns="http://www.w3.org/2000/svg"
          fill={color}
          viewBox="0 0 24 24"
          stroke={color}
          width={`${width}px`}
          height={`${height}px`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      ) : (
        <svg
          role="button"
          style={{ color: "yellow" }}
          xmlns="http://www.w3.org/2000/svg"
          fill="#fff"
          viewBox="0 0 24 24"
          stroke="#fff"
          width={`${width}px`}
          height={`${height}px`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      )}
    </span>
  );
}
