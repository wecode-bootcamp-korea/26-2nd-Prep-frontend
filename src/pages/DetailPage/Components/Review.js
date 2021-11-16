import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { FaRegThumbsUp } from 'react-icons/fa';

const SETTINGS = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
};

export default function Review() {
  const [reviews, setReviews] = useState([]);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    fetch('data/ReviewData.json')
      .then(res => res.json())
      .then(res => setReviews(res));
  }, []);

  function handleLikes(numOfLikes) {
    setLikes(numOfLikes + 1);
  }

  return reviews.length > 0 ? (
    <SliderContainer>
      <Slider {...SETTINGS}>
        {reviews.map((review, idx) => (
          <ReviewWrapper key={idx}>
            <ReviewImg alt="product review" src={review.reviewImg} />
            <UserInfo>
              <UserImg alt="user profile" src={review.userImg} />
              <UserName>{review.userName}</UserName>
            </UserInfo>
            <SelectedOption>{review.option}</SelectedOption>
            <ReviewBody>{review.review}</ReviewBody>
            <Likes
              onClick={() => {
                handleLikes(review.numOfLikes);
              }}
            >
              <FaRegThumbsUp />
              <NumOfLikes>{likes === 0 ? review.numOfLikes : likes}</NumOfLikes>
            </Likes>
          </ReviewWrapper>
        ))}
      </Slider>
    </SliderContainer>
  ) : (
    <BlankReviewWrapper>
      <BlankReviewTitle>아직 후기가 없어요.</BlankReviewTitle>
      <BlankReviewText>첫 후기를 남겨주세요!</BlankReviewText>
    </BlankReviewWrapper>
  );
}

const SliderContainer = styled.div`
  .slick-list {
    width: 850px;
    padding-left: 10px;
  }

  .slick-prev:before,
  .slick-next:before {
    color: ${({ theme }) => theme.mainColor};
  }

  .slick-prev {
    left: -12px;
  }

  .slick-next {
    right: -12px;
  }

  .slick-arrow {
    top: 150px;
    font-size: 0px;
    z-index: 1;
  }

  .slick-disabled {
    opacity: 0;
    cursor: default;
  }
`;

const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 480px;
`;

const ReviewImg = styled.img`
  width: 260px;
  height: 260px;
  border-radius: 5px;
  object-fit: cover;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;
`;

const UserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
`;

const UserName = styled.span`
  margin-left: 10px;
  font-size: 15px;
  font-weight: bold;
`;

const SelectedOption = styled.span`
  color: ${({ theme }) => theme.fontColor};
  font-size: 13px;
`;

const ReviewBody = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  width: 240px;
  margin-top: 10px;
  font-size: 15px;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Likes = styled.button`
  position: absolute;
  bottom: 20px;
  padding: 6px 12px;
  border: 1px solid ${({ theme }) => theme.fontColor};
  border-radius: 20px;
  background-color: rgb(255, 255, 255);

  i {
    width: 20px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.subColor};
  }
`;

const NumOfLikes = styled.span`
  margin-left: 3px;
  font-size: 15px;
`;

const BlankReviewWrapper = styled.div`
  text-align: center;
  width: 900px;
`;

const BlankReviewTitle = styled.p`
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: bold;
`;

const BlankReviewText = styled.p``;
