import './App.css'

// eslint-disable-next-line react/prop-types
export function Light({ color, opacity }) {
    return (
      <>
        <div
          style={{ backgroundColor: color, opacity: opacity }}
          className="light"
        ></div>
      </>
    );
  }
  