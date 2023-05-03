import React, { useEffect, useState } from "react";
import "./right.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../Logo";

const RightSide = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    uname: "",
    email: "",
    mobno: "",
    checkBox: false,
  });
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };
  const isFormSubmit = () => {
    if (
      formValues.name &&
      formValues.uname &&
      formValues.email &&
      formValues.mobno &&
      formValues.checkBox == true
    ) {
      toast.error('🦄 Session Expired !', {
        position: "bottom-right",
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        }, setTimeout(() => {
          window.location.reload();
        },6000));
      window.localStorage.setItem("userData", JSON.stringify(formValues));
      return true;
    } else {
      return false;
    }
  };

  const claimTrial = (event) => {
    event.preventDefault();
    navigate("/category");
    Object.values(formValues).forEach((data) => {
      if (data.length == 0) {
        document.querySelector(".error").innerHTML =
          "<p>Please enter all field <p>";
        return;
      }
    });
    if (!isFormSubmit()) {
      return;
    }
    setFormValues({
      name: "",
      uname: "",
      email: "",
      mobno: "",
      checkBox: false,
    });
    setActive(false);
  };

  useEffect(() => {
    setActive(isFormSubmit());
  }, [formValues]);

  return (
    <div className="rightSide">
     <Logo/>
      <p className="text1">Create your new account</p>
      <p className="text2">
        <Link to="">Email</Link> <Link to="">Google </Link>
      </p>

      <div className="formBox">
        <form onSubmit={claimTrial}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formValues.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="uname"
            placeholder="UserName"
            value={formValues.uname}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formValues.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="tel"
            name="mobno"
            placeholder="Mobile"
            value={formValues.mobno}
            onChange={handleInputChange}
            required
          />
          <input
            type="checkbox"
            name="checkBox"
            onChange={(e) =>
              setFormValues({
                ...formValues,
                [e.target.name]: e.target.checked,
              })
            }
            required
          />
          <span>Share my registration data with Superapp </span>
          <br />
          <button className={`${active ? "formbtnactive" : "signBtn"}`}>
            Sign Up{" "}
          </button>
          <ToastContainer />
          <br />
          <div className="error"> </div>

          <p className="termText">
            By clicking on Sign up. you agree to Superapp
            <Link to=""> Terms and Conditions of Use</Link>
          </p>
          <p className="termText">
            To learn more about how Superapp collects, uses, shares and protects
            your personal data please head Superapp
            <Link to=""> Privacy Policy</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RightSide;
