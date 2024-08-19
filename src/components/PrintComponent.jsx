import React, { useEffect, useImperativeHandle, useState } from "react";
import "./PrintComponent.css";
import logo from "../assets/logo.png";

const PrintComponent = React.forwardRef(({ num, title, contents }, ref) => {
  const [content, setContent] = useState({});

  // contents가 변경될 때 콘텐츠를 설정
  useEffect(() => {
    if (contents && contents.length > 0) {
      setContent(contents[0]);
    }
  }, [contents]);

  return (
    <div className="print-component" ref={ref}>
      <div className="print-header">
        <div className="num">{num}</div>
        <div className="title">{title}</div>
      </div>
      {content && content.bookTitle && (
        <>
          <div className="print-section">
            <div className="book-title">{`「${content.bookTitle}」`}</div>
            <div className="short-recommender">{`추천인 : ${content.shortRecommender}`}</div>
          </div>
          <div className="locate">{content.locate}</div>
          <div className="content">{content.content}</div>
          <div className="recommender-section">
            <div className="recommender">{content.recommender}</div>
            <div className="recommend-content">{content.recommendContent}</div>
          </div>
        </>
      )}
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="line">
        -------------------------------------------------------
      </div>
    </div>
  );
});

export default PrintComponent;
