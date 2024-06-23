// import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Category from "./components/Category/Category";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="main-section">
        <div className="container">
          <Navbar />
          <Banner />
        </div>
      </div>
      <Category />
    </>
  );
}

export default App;
