import React from "react";
import { signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase";

const Home = () => {
  return (
    <div>
      <button>Send OTP</button>
    </div>
  );
};

export default Home;
