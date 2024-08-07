import React from "react";
import "./PrintComponent.css";
import logo from "../assets/logo.png";

const PrintComponent = React.forwardRef(
  (
    { num, title, bookTitle, locate, content, recommender, recommendContent },
    ref
  ) => (
    <div className="print-component" ref={ref}>
      <div className="print-header">
        <div className="num">{num}</div>
        <div className="title">{title}</div>
      </div>
      <div className="book-title">{`「${bookTitle}」`}</div>
      <div className="locate">{locate}</div>
      <div className="content">{content}</div>
      <div className="recommender-section">
        <div className="recommender">{recommender}</div>
        <div className="recommend-content">{recommendContent}</div>
      </div>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
    </div>
  )
);

export default PrintComponent;
