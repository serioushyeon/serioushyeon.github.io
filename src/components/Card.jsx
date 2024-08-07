// src/components/Card.js
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import PrintComponent from "./PrintComponent";
import "./Card.css";

const Card = ({
  num,
  title,
  bookTitle,
  locate,
  content,
  recommender,
  recommendContent,
}) => {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <div className="card" onClick={handlePrint}>
        <div className="card-content">{title}</div>
      </div>
      <div style={{ display: "none" }}>
        <PrintComponent
          ref={componentRef}
          num={num}
          title={title}
          bookTitle={bookTitle}
          locate={locate}
          content={content}
          recommender={recommender}
          recommendContent={recommendContent}
        />
      </div>
    </>
  );
};

export default Card;
