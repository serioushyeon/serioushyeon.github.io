import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Body from "./components/Body";

const App = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <div className="app-title">교문방정환도서관</div>
        <div className="about">
          마음 속 고민들을 책으로 치유받아보는 것은 어떨까요?<br></br>고민이
          되는 내용을 눌러보세요.
        </div>
        <div className="app-section">고민상황별</div>
      </header>
      <Body />
    </div>
  );
};

export default App;
