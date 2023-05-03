import React, { useEffect, useState } from "react";
import "./movie.css";

const List = ({ genre }) => {
  //const genre = JSON.parse(window.localStorage.getItem("boxes"));
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "5a766434c2msh608290e34ae37cap1757d2jsn24eff297898d",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };

    const fetchMovies = async () => {
      await fetch(
        `https://moviesdatabase.p.rapidapi.com/titles?genre=${genre}&year=2020`,
        options
      )
        .then(async (res) => await res.json())
        .then((res) => {
          console.log(res.results, "okk");
          setMovies(res.results.splice(4, 4));
        })
        .catch((err) => console.error(err));
    };
    fetchMovies();
  }, []);

  return (
    <div className="MoviePage" style={{ padding: "10px 30px" }}>
      <p style={{ color: "#a2a2a2", fontSize: "25px", margin: "20px" }}>
        {genre}
      </p>
      <div style={{ display: "flex", overflow: "hidden", marginRight: "2vw" }}>
        {movies.map((movie, idx) => {
          console.log(movie?.primaryImage?.url);
          return (
            <div key={idx} style={{ width: "20vw", margin: "2vw" }}>
              <img
                alt="imagedata"
                src={movie?.primaryImage?.url}
                style={{
                  objectFit: "cover",
                  width: "20vw",
                  height: "40vh",
                  borderRadius: "12px",
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
