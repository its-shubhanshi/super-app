import Logo from "../Logo.jsx";
import List from "../Movie/List.jsx";
import DpImg from "../../img/dp.png";

const Movie = () => {
  const movies = JSON.parse(window.localStorage.getItem("boxes"));
  return (
    <div className="container">
      <div className="row">
        <div className="col-12" style={{ padding: "20px" }}>
          <img
            src={DpImg}
            alt="profile"
            style={{
              position: "absolute",
              top: "2vh",
              right: "3vw",
              height: "60px",
              width: "60px",
            }}
          />

          <div
            style={{
              minHeight: "100vh",
              background: "black",
              overflowX: "hidden",
            }}
          >
            <Logo />
            <p style={{ color: "white", fontSize: "2rem", margin: "3vw" }}>
              Entertainment according to your choice
            </p>
            {movies.map((movie) => (
              <List genre={movie} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
