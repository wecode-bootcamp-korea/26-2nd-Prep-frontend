import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaRegThumbsUp } from 'react-icons/fa';

export default function Review() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('data/ReviewData.json')
      .then(res => res.json())
      .then(res => setReviews(res));
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <SliderContainer>
      <Slider {...settings}>
        {reviews.map((review, idx) => (
          <ReviewWrapper key={idx}>
            <ReviewImg alt="product review" src={review.reviewImg} />
            <UserInfo>
              <UserImg alt="user profile" src={review.userImg} />
              <UserName>{review.userName}</UserName>
            </UserInfo>
            <SelectOption>{review.option}</SelectOption>
            <ReviewBody>{review.review}</ReviewBody>
            <Likes>
              <FaRegThumbsUp />
              <NumOfLikes>{review.numOfLikes}</NumOfLikes>
            </Likes>
          </ReviewWrapper>
        ))}
      </Slider>
    </SliderContainer>
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

const SelectOption = styled.span`
  color: ${({ theme }) => theme.fontColor};
  font-size: 13px;
`;
const ReviewBody = styled.p`
  margin-top: 10px;
  font-size: 15px;
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
