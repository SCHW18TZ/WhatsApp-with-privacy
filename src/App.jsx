import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { auth } from "./firebase";
import { MantineProvider } from "@mantine/core";

const App = () => {
  return (
    <Router>
      <MantineProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MantineProvider>
    </Router>
  );
};

export default App;
