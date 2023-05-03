import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Category from "./component/category/Category";
import Browser from "./component/browser/Browser";
import NoteBrowse from "./component/notesBrowse/NoteBrowse";
import Movie from "./component/Movie/Movie";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/category" element={<Category />} />
        <Route path="/browser" element={<Browser />} />
        <Route path="/notebrowser" element={<NoteBrowse />} />
        <Route path="/movie" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
