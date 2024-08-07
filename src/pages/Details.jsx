import React from "react";
import { useParams } from "react-router-dom";
import "./Details.css";

const Details = () => {
  const { title } = useParams();

  return (
    <div className="details">
      <h1>{title}에 대한 설명</h1>
      <p>여기에 {title}에 대한 자세한 설명을 입력합니다.</p>
    </div>
  );
};

export default Details;
