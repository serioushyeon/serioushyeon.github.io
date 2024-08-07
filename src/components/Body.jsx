// src/Body.js
import React from "react";
import "./Body.css";
import Card from "./Card";

const Body = () => {
  const cardsData = [
    {
      num: "1",
      title: "힐링이 되는 책을 읽고 싶어요",
      bookTitle: "",
      locate: "",
      content: "",
      recommender: "",
      recommendContent: "",
    },
    {
      num: "2",
      title: "근사하고 품격있는 삶을 원해요",
      bookTitle: "",
      locate: "",
      content: "",
      recommender: "",
      recommendContent: "",
    },
    {
      num: "3",
      title: "인생에서 가장 소중한 것을 찾고싶어요",
      bookTitle: "",
      locate: "",
      content: "",
      recommender: "",
      recommendContent: "",
    },
    {
      num: "4",
      title: "모든 일이 우울하고 삶에 의욕이 없을 때",
      bookTitle: "",
      locate: "",
      content: "",
      recommender: "",
      recommendContent: "",
    },
    {
      num: "5",
      title: "과연 이렇게 사는 삶이 맞는 삶일까요?",
      bookTitle: "",
      locate: "",
      content: "",
      recommender: "",
      recommendContent: "",
    },
    {
      num: "6",
      title: "무슨 책부터 읽어야 할 지 고민인 그대에게",
      bookTitle: "",
      locate: "",
      content: "",
      recommender: "",
      recommendContent: "",
    },
    {
      num: "7",
      title: "명언이나 명구로 위로받고 싶어요",
      bookTitle: "셰익스피어의 위대한 문장들",
      locate: "교문방정환(토평) 보존서고 840-셰63ㅅ",
      content:
        "셰익스피어를 읽는 방법은 여럿이 있다. 그가 쓴 작품을 읽는 것이 정석이겠지만, 특희 히곡 읽기는 평범한 독자들에게 익숙지 않은 법, 주옥같은 문장들을 모아놓은 앤솔로지는 물로 그가 그려낸 모든 세계를 탐사하기엔 부족함이 있겠지만, 그가 글자로 만들어낸 세계의 편린을 엿보는데는 부족함이 없다.",
      recommender: "추천인♥H사서",
      recommendContent:
        "나무연필이라는 출판사를 운영하면서 사회와 관련한 논픽션을 만든다. 오랫동안 틈틈이 국내외 도서관을 둘러본 경헝을 바탕으로 「도서관 여행하는 법」 이라는 책을 썼다.",
    },
    {
      num: "8",
      title: "주체적인 여성으로 살고 싶어요 ",
      bookTitle: "",
      locate: "",
      content: "",
      recommender: "",
      recommendContent: "",
    },
    {
      num: "9",
      title: "과연 이렇게 사는 삶이 맞는 삶일까요?",
      bookTitle: "",
      locate: "",
      content: "",
      recommender: "",
      recommendContent: "",
    },
    {
      num: "10",
      title: "과연 이렇게 사는 삶이 맞는 삶일까요?",
      bookTitle: "",
      locate: "",
      content: "",
      recommender: "",
      recommendContent: "",
    },
  ];

  return (
    <div className="body-container">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          num={card.num}
          title={card.title}
          bookTitle={card.bookTitle}
          locate={card.locate}
          content={card.content}
          recommender={card.recommender}
          recommendContent={card.recommendContent}
        />
      ))}
    </div>
  );
};

export default Body;
