import React, { useEffect } from "react";
import {
  getAuth,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "firebase/auth";

import { auth } from "../../firebase";
import { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { formatPhoneNumber } from "react-phone-number-input";

const Home = () => {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState();
  const [Phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    const auth = getAuth();

    e.preventDefault();
    const number = e.target[0].value;
    console.log(number);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="phone"> Enter your phone number: </label>
        <input type="tel" name="" id="" />
        <button type="submit">Send code</button>
      </form>
    </div>
  );
};

export default Home;
