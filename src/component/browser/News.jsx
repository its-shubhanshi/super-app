import React, { useEffect, useState } from "react";
import "./news.css";

const News = () => {
  const [news, setNews] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      await fetch(
        "https://newsapi.org/v2/everything?q=tesla&from=2023-04-01&sortBy=publishedAt&apiKey=d48effb067194437861d68cbd8c12b83"
      )
        .then(async (data) => await data.json())
        .then((res) => {
          setNews(res.articles[0]);
          console.log(res.articles[0]);
        });
    };
    fetchNews();
  }, []);

  useEffect(() => {
    const date = new Date();
    var hours = date.getHours();
    var minute = date.getMinutes();
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minute = minute < 10 ? "0" + minute : minute;
    const formetTime = hours + ":" + minute + " " + ampm;
    setTime(formetTime);
  });
  useEffect(() => {
    const today = new Date();
    var yyyy = today.getFullYear();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    const formetDate = mm + "-" + dd + "-" + yyyy;
    setDate(formetDate);
  });

  return (
    <div className="newsBox">
      <div className="row">
        <div className="col-12">
          <div className="newsImg">
            <img src={news.urlToImage} alt="news" />
            <div className="newsTitle">
              <h2>{news.title}</h2>
              <p>
                <span>{date}</span>
                <span>{time} </span>
              </p>
            </div>
          </div>
          <p className="newsPara">{news.description}</p>
        </div>
      </div>
    </div>
  );
};

export default News;
