import React, { useState } from "react";
import "./category.css";
import Image2 from "../../img/image2.png";
import Image3 from "../../img/image3.png";
import Image4 from "../../img/image4.png";
import Image5 from "../../img/image6.png";
import Image6 from "../../img/image7.png";
import Image7 from "../../img/image8.png";
import Image8 from "../../img/image9.png";
import Image9 from "../../img/image10.png";
import Image10 from "../../img/image11.png";
import CategoryButton from "./CategoryButton";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import Logo from "../Logo";

const Category = () => {
  const boxes = [
    {
      title: "Action",
      Image: Image2,
      bgcolor: "#FF5209",
    },
    {
      title: "Drama",
      Image: Image3,
      bgcolor: "#D7A4FF",
    },
    {
      title: "Romance",
      Image: Image4,
      bgcolor: "#148A08",
    },
    {
      title: "Thriller",
      Image: Image5,
      bgcolor: "#84C2FF",
    },
    {
      title: "Western",
      Image: Image6,
      bgcolor: "#902500",
    },
    {
      title: "Horror",
      Image: Image7,
      bgcolor: "#7358FF",
    },
    {
      title: "Fantasy",
      Image: Image8,
      bgcolor: "#FF4ADE",
    },
    {
      title: "Music",
      Image: Image9,
      bgcolor: "#E61E32",
    },
    {
      title: "Fiction",
      Image: Image10,
      bgcolor: "#6CD061",
    },
  ];

  const [categories, setCategory] = useState([]);

  const navigate = useNavigate();
  const handleSignUp = () => {
    if (categories.length < 3) {
      toast.warning("Please Select more option !", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      window.localStorage.setItem("boxes", JSON.stringify([...categories]));
      navigate("/notebrowser");
    }
  };
  return (
    <div className="categorySection">
      <div className="container">
        <div className="row">
          <div className="col-5">
            <div className="categoryLeft">
              <Logo />
              <h3>Choose your entertainment category</h3>
              <CategoryButton
                categories={categories}
                setCategory={setCategory}
              />
            </div>
          </div>
          <div className="col-7">
            <div className="categoryRight">
              {boxes.map((item, idx) => {
                return (
                  <Block
                    item={item}
                    keyid={idx}
                    categories={categories}
                    setCategory={setCategory}
                  />
                );
              })}
            </div>
            <ToastContainer />
            <button className="nextBtn" onClick={handleSignUp}>
              Next Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const Block = ({ item, keyid, setCategory, categories }) => {
  const [selected, setSelected] = useState();
  const handleClick = (e) => {
    console.log("check...");
    console.log(categories.includes(item.title));
    if (categories.includes(item.title)) {
      const index = categories.indexOf(item.title);
      categories.splice(index, 1);
      setCategory([...categories]);
    } else {
      setCategory([...categories, item.title]);
    }
    setSelected(!selected);
  };
  useEffect(() => {
    setSelected(categories.includes(item.title) == true);
  });
  return (
    <div
      className="boxes"
      style={{
        background: item.bgcolor,
        border: `${
          selected ? "4px solid green" : `4px solid ${item.bgcolor} `
        }`,
      }}
      item={item}
      key={keyid}
      onClick={(e) => handleClick(e)}
    >
      <h4>{item.title}</h4>
      <br />
      <img src={item.Image} alt={item.title} />
    </div>
  );
};

export default Category;
