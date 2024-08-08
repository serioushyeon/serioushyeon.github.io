// src/components/Card.js
import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import PrintComponent from "./PrintComponent";
import "./Card.css";
import { IconContext } from "react-icons";
import { MdOutlineArrowOutward } from "react-icons/md";

const Card = ({ num, title, contents, onPrint }) => {
  const componentRef = useRef();
  const randomIndex = Math.floor(Math.random() * contents.length);
  const [selectedContent, setSelectedContent] = useState(contents[randomIndex]);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    onAfterPrint: () => onPrint(num),
  });

  const getRandomContent = () => {
    if (!contents || contents.length === 0) {
      console.error("Contents array is empty or undefined");
      return null;
    }
    const randomIndex = Math.floor(Math.random() * contents.length);
    return contents[randomIndex];
  };

  const handleClick = () => {
    const content = getRandomContent();
    if (content) {
      setSelectedContent(content); // 랜덤 콘텐츠를 상태에 설정
      handlePrint();
    }
  };

  return (
    <>
      <div className="card" onClick={handleClick}>
        <IconContext.Provider
          value={{ color: "black", className: "arrow-icon" }}
        >
          <MdOutlineArrowOutward />
        </IconContext.Provider>
        <div className="card-content">{title}</div>
      </div>
      <div style={{ display: "none" }}>
        <PrintComponent
          ref={componentRef}
          num={num}
          title={title}
          contents={[selectedContent]} // 선택된 랜덤 콘텐츠만 전달
        />
      </div>
    </>
  );
};

export default Card;
