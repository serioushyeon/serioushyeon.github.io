// src/Body.js
import React, { useEffect, useState } from "react";
import "./Body.css";
import Card from "./Card";

const Body = () => {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("count");
    return savedCount ? parseInt(savedCount, 10) : 0;
  });

  // count 변경 시 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  const handlePrint = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const cardContents1 = [
    {
      bookTitle: "셰익스피어의 위대한 문장들",
      locate: "교문방정환(토평) 보존서고 840-셰63ㅅ",
      content:
        "셰익스피어를 읽는 방법은 여럿이 있다. 그가 쓴 작품을 읽는 것이 정석이겠지만, 특희 히곡 읽기는 평범한 독자들에게 익숙지 않은 법, 주옥같은 문장들을 모아놓은 앤솔로지는 물로 그가 그려낸 모든 세계를 탐사하기엔 부족함이 있겠지만, 그가 글자로 만들어낸 세계의 편린을 엿보는데는 부족함이 없다.",
      recommender: "추 천 인♥H 사 서",
      recommendContent:
        "나무연필이라는 출판사를 운영하면서 사회와 관련한 논픽션을 만든다. 오랫동안 틈틈이 국내외 도서관을 둘러본 경헝을 바탕으로 「도서관 여행하는 법」 이라는 책을 썼다.",
    },
    {
      bookTitle: "책 제목 2",
      locate: "위치 2",
      content: "내용 2",
      recommender: "추천자 2",
      recommendContent: "추천 내용 2",
    },
    {
      bookTitle: "책 제목 3",
      locate: "위치 3",
      content: "내용 3",
      recommender: "추천자 3",
      recommendContent: "추천 내용 3",
    },
  ];
  const cardContents2 = [
    {
      bookTitle: "셰익스피어의 위대한 문장들",
      locate: "교문방정환(토평) 보존서고 840-셰63ㅅ",
      content:
        "셰익스피어를 읽는 방법은 여럿이 있다. 그가 쓴 작품을 읽는 것이 정석이겠지만, 특희 히곡 읽기는 평범한 독자들에게 익숙지 않은 법, 주옥같은 문장들을 모아놓은 앤솔로지는 물로 그가 그려낸 모든 세계를 탐사하기엔 부족함이 있겠지만, 그가 글자로 만들어낸 세계의 편린을 엿보는데는 부족함이 없다.",
      recommender: "추 천 인♥H 사 서",
      recommendContent:
        "나무연필이라는 출판사를 운영하면서 사회와 관련한 논픽션을 만든다. 오랫동안 틈틈이 국내외 도서관을 둘러본 경헝을 바탕으로 「도서관 여행하는 법」 이라는 책을 썼다.",
    },
    {
      bookTitle: "책 제목 2",
      locate: "위치 2",
      content: "내용 2",
      recommender: "추천자 2",
      recommendContent: "추천 내용 2",
    },
    {
      bookTitle: "책 제목 3",
      locate: "위치 3",
      content: "내용 3",
      recommender: "추천자 3",
      recommendContent: "추천 내용 3",
    },
  ];
  const cardContents3 = [
    {
      bookTitle: "셰익스피어의 위대한 문장들",
      locate: "교문방정환(토평) 보존서고 840-셰63ㅅ",
      content:
        "셰익스피어를 읽는 방법은 여럿이 있다. 그가 쓴 작품을 읽는 것이 정석이겠지만, 특희 히곡 읽기는 평범한 독자들에게 익숙지 않은 법, 주옥같은 문장들을 모아놓은 앤솔로지는 물로 그가 그려낸 모든 세계를 탐사하기엔 부족함이 있겠지만, 그가 글자로 만들어낸 세계의 편린을 엿보는데는 부족함이 없다.",
      recommender: "추 천 인♥H 사 서",
      recommendContent:
        "나무연필이라는 출판사를 운영하면서 사회와 관련한 논픽션을 만든다. 오랫동안 틈틈이 국내외 도서관을 둘러본 경헝을 바탕으로 「도서관 여행하는 법」 이라는 책을 썼다.",
    },
    {
      bookTitle: "책 제목 2",
      locate: "위치 2",
      content: "내용 2",
      recommender: "추천자 2",
      recommendContent: "추천 내용 2",
    },
    {
      bookTitle: "책 제목 3",
      locate: "위치 3",
      content: "내용 3",
      recommender: "추천자 3",
      recommendContent: "추천 내용 3",
    },
  ];
  const cardContents4 = [
    {
      bookTitle: "셰익스피어의 위대한 문장들",
      locate: "교문방정환(토평) 보존서고 840-셰63ㅅ",
      content:
        "셰익스피어를 읽는 방법은 여럿이 있다. 그가 쓴 작품을 읽는 것이 정석이겠지만, 특희 히곡 읽기는 평범한 독자들에게 익숙지 않은 법, 주옥같은 문장들을 모아놓은 앤솔로지는 물로 그가 그려낸 모든 세계를 탐사하기엔 부족함이 있겠지만, 그가 글자로 만들어낸 세계의 편린을 엿보는데는 부족함이 없다.",
      recommender: "추 천 인♥H 사 서",
      recommendContent:
        "나무연필이라는 출판사를 운영하면서 사회와 관련한 논픽션을 만든다. 오랫동안 틈틈이 국내외 도서관을 둘러본 경헝을 바탕으로 「도서관 여행하는 법」 이라는 책을 썼다.",
    },
    {
      bookTitle: "책 제목 2",
      locate: "위치 2",
      content: "내용 2",
      recommender: "추천자 2",
      recommendContent: "추천 내용 2",
    },
    {
      bookTitle: "책 제목 3",
      locate: "위치 3",
      content: "내용 3",
      recommender: "추천자 3",
      recommendContent: "추천 내용 3",
    },
  ];
  const cardContents5 = [
    {
      bookTitle: "셰익스피어의 위대한 문장들",
      locate: "교문방정환(토평) 보존서고 840-셰63ㅅ",
      content:
        "셰익스피어를 읽는 방법은 여럿이 있다. 그가 쓴 작품을 읽는 것이 정석이겠지만, 특희 히곡 읽기는 평범한 독자들에게 익숙지 않은 법, 주옥같은 문장들을 모아놓은 앤솔로지는 물로 그가 그려낸 모든 세계를 탐사하기엔 부족함이 있겠지만, 그가 글자로 만들어낸 세계의 편린을 엿보는데는 부족함이 없다.",
      recommender: "추 천 인♥H 사 서",
      recommendContent:
        "나무연필이라는 출판사를 운영하면서 사회와 관련한 논픽션을 만든다. 오랫동안 틈틈이 국내외 도서관을 둘러본 경헝을 바탕으로 「도서관 여행하는 법」 이라는 책을 썼다.",
    },
    {
      bookTitle: "책 제목 2",
      locate: "위치 2",
      content: "내용 2",
      recommender: "추천자 2",
      recommendContent: "추천 내용 2",
    },
    {
      bookTitle: "책 제목 3",
      locate: "위치 3",
      content: "내용 3",
      recommender: "추천자 3",
      recommendContent: "추천 내용 3",
    },
  ];
  const cardContents6 = [
    {
      bookTitle: "셰익스피어의 위대한 문장들",
      locate: "교문방정환(토평) 보존서고 840-셰63ㅅ",
      content:
        "셰익스피어를 읽는 방법은 여럿이 있다. 그가 쓴 작품을 읽는 것이 정석이겠지만, 특희 히곡 읽기는 평범한 독자들에게 익숙지 않은 법, 주옥같은 문장들을 모아놓은 앤솔로지는 물로 그가 그려낸 모든 세계를 탐사하기엔 부족함이 있겠지만, 그가 글자로 만들어낸 세계의 편린을 엿보는데는 부족함이 없다.",
      recommender: "추 천 인♥H 사 서",
      recommendContent:
        "나무연필이라는 출판사를 운영하면서 사회와 관련한 논픽션을 만든다. 오랫동안 틈틈이 국내외 도서관을 둘러본 경헝을 바탕으로 「도서관 여행하는 법」 이라는 책을 썼다.",
    },
    {
      bookTitle: "책 제목 2",
      locate: "위치 2",
      content: "내용 2",
      recommender: "추천자 2",
      recommendContent: "추천 내용 2",
    },
    {
      bookTitle: "책 제목 3",
      locate: "위치 3",
      content: "내용 3",
      recommender: "추천자 3",
      recommendContent: "추천 내용 3",
    },
  ];
  const cardContents7 = [
    {
      bookTitle: "셰익스피어의 위대한 문장들",
      locate: "교문방정환(토평) 보존서고 840-셰63ㅅ",
      content:
        "셰익스피어를 읽는 방법은 여럿이 있다. 그가 쓴 작품을 읽는 것이 정석이겠지만, 특희 히곡 읽기는 평범한 독자들에게 익숙지 않은 법, 주옥같은 문장들을 모아놓은 앤솔로지는 물로 그가 그려낸 모든 세계를 탐사하기엔 부족함이 있겠지만, 그가 글자로 만들어낸 세계의 편린을 엿보는데는 부족함이 없다.",
      recommender: "추 천 인♥H 사 서",
      recommendContent:
        "나무연필이라는 출판사를 운영하면서 사회와 관련한 논픽션을 만든다. 오랫동안 틈틈이 국내외 도서관을 둘러본 경헝을 바탕으로 「도서관 여행하는 법」 이라는 책을 썼다.",
    },
    {
      bookTitle: "책 제목 2",
      locate: "위치 2",
      content: "내용 2",
      recommender: "추천자 2",
      recommendContent: "추천 내용 2",
    },
    {
      bookTitle: "책 제목 3",
      locate: "위치 3",
      content: "내용 3",
      recommender: "추천자 3",
      recommendContent: "추천 내용 3",
    },
  ];
  const cardContents8 = [
    {
      bookTitle: "셰익스피어의 위대한 문장들",
      locate: "교문방정환(토평) 보존서고 840-셰63ㅅ",
      content:
        "셰익스피어를 읽는 방법은 여럿이 있다. 그가 쓴 작품을 읽는 것이 정석이겠지만, 특희 히곡 읽기는 평범한 독자들에게 익숙지 않은 법, 주옥같은 문장들을 모아놓은 앤솔로지는 물로 그가 그려낸 모든 세계를 탐사하기엔 부족함이 있겠지만, 그가 글자로 만들어낸 세계의 편린을 엿보는데는 부족함이 없다.",
      recommender: "추 천 인♥H 사 서",
      recommendContent:
        "나무연필이라는 출판사를 운영하면서 사회와 관련한 논픽션을 만든다. 오랫동안 틈틈이 국내외 도서관을 둘러본 경헝을 바탕으로 「도서관 여행하는 법」 이라는 책을 썼다.",
    },
    {
      bookTitle: "책 제목 2",
      locate: "위치 2",
      content: "내용 2",
      recommender: "추천자 2",
      recommendContent: "추천 내용 2",
    },
    {
      bookTitle: "책 제목 3",
      locate: "위치 3",
      content: "내용 3",
      recommender: "추천자 3",
      recommendContent: "추천 내용 3",
    },
  ];
  const cardContents9 = [
    {
      bookTitle: "셰익스피어의 위대한 문장들",
      locate: "교문방정환(토평) 보존서고 840-셰63ㅅ",
      content:
        "셰익스피어를 읽는 방법은 여럿이 있다. 그가 쓴 작품을 읽는 것이 정석이겠지만, 특희 히곡 읽기는 평범한 독자들에게 익숙지 않은 법, 주옥같은 문장들을 모아놓은 앤솔로지는 물로 그가 그려낸 모든 세계를 탐사하기엔 부족함이 있겠지만, 그가 글자로 만들어낸 세계의 편린을 엿보는데는 부족함이 없다.",
      recommender: "추 천 인♥H 사 서",
      recommendContent:
        "나무연필이라는 출판사를 운영하면서 사회와 관련한 논픽션을 만든다. 오랫동안 틈틈이 국내외 도서관을 둘러본 경헝을 바탕으로 「도서관 여행하는 법」 이라는 책을 썼다.",
    },
    {
      bookTitle: "책 제목 2",
      locate: "위치 2",
      content: "내용 2",
      recommender: "추천자 2",
      recommendContent: "추천 내용 2",
    },
    {
      bookTitle: "책 제목 3",
      locate: "위치 3",
      content: "내용 3",
      recommender: "추천자 3",
      recommendContent: "추천 내용 3",
    },
  ];
  const cardContents10 = [
    {
      bookTitle: "셰익스피어의 위대한 문장들",
      locate: "교문방정환(토평) 보존서고 840-셰63ㅅ",
      content:
        "셰익스피어를 읽는 방법은 여럿이 있다. 그가 쓴 작품을 읽는 것이 정석이겠지만, 특희 히곡 읽기는 평범한 독자들에게 익숙지 않은 법, 주옥같은 문장들을 모아놓은 앤솔로지는 물로 그가 그려낸 모든 세계를 탐사하기엔 부족함이 있겠지만, 그가 글자로 만들어낸 세계의 편린을 엿보는데는 부족함이 없다.",
      recommender: "추 천 인♥H 사 서",
      recommendContent:
        "나무연필이라는 출판사를 운영하면서 사회와 관련한 논픽션을 만든다. 오랫동안 틈틈이 국내외 도서관을 둘러본 경헝을 바탕으로 「도서관 여행하는 법」 이라는 책을 썼다.",
    },
    {
      bookTitle: "책 제목 2",
      locate: "위치 2",
      content: "내용 2",
      recommender: "추천자 2",
      recommendContent: "추천 내용 2",
    },
    {
      bookTitle: "책 제목 3",
      locate: "위치 3",
      content: "내용 3",
      recommender: "추천자 3",
      recommendContent: "추천 내용 3",
    },
  ];
  const cardsData = [
    {
      num: "1",
      title: "힐링이 되는 책을\n읽고 싶어요",
      content: cardContents1,
    },
    {
      num: "2",
      title: "근사하고 품격있는\n삶을 원해요",
      content: cardContents2,
    },
    {
      num: "3",
      title: "인생에서 가장\n소중한 것을 찾고싶어요",
      content: cardContents3,
    },
    {
      num: "4",
      title: "모든 일이 우울하고\n삶에 의욕이 없을 때",
      content: cardContents4,
    },
    {
      num: "5",
      title: "과연 이렇게 사는 삶이\n맞는 삶일까요?",
      content: cardContents5,
    },
    {
      num: "6",
      title: "무슨 책부터 읽어야 \n할 지 고민인 그대에게",
      content: cardContents6,
    },
    {
      num: "7",
      title: "명언이나 명구로\n위로받고 싶어요",
      content: cardContents7,
    },
    {
      num: "8",
      title: "주체적인 여성으로\n살고 싶어요 ",
      content: cardContents8,
    },
    {
      num: "9",
      title: "과연 이렇게 사는 삶이\n맞는 삶일까요?",
      content: cardContents9,
    },
    {
      num: "10",
      title: "과연 이렇게 사는 삶이\n맞는 삶일까요?",
      content: cardContents10,
    },
  ];

  return (
    <div className="body-container">
      <div className="cards-grid">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            num={card.num}
            title={card.title}
            contents={card.content}
            onPrint={handlePrint}
          />
        ))}
        <div className="card-placeholder">
          고민상황을<br></br>눌러보세요
        </div>
        <div className="usage-info">
          <div className="usage-title">이용자 수</div>
          <div className="usage-count">{count}명</div>
        </div>
      </div>
    </div>
  );
};

export default Body;
