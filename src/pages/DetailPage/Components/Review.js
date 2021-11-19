import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { API } from '../../../config';
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
  const { id } = useParams();

  useEffect(() => {
    fetch(`${API}/reviews/review?product_id=${id}`)
      .then(res => res.json())
      .then(res => setReviews(res.results));
  }, [id]);

  function handleLikes(id) {
    fetch(`${API}/reviews/review/like`, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        review_id: id,
      }),
    })
      .then(res => res.json())
      .then(res => {
        const newData = reviews.map(review => {
          if (id === review.id) {
            return { ...review, likes: res.results.likes };
          } else {
            return review;
          }
        });

        setReviews(newData);
      });
  }
  return reviews.length > 0 ? (
    <SliderContainer>
      <Slider {...SETTINGS}>
        {reviews.length > 0 &&
          reviews.map(review => (
            <ReviewWrapper key={review.id}>
              <ReviewImg alt="product review" src={review.review_image} />
              <UserInfo>
                <UserImg alt="user profile" src={review.user_profile_image} />
                <UserName>{review.user_nickname}</UserName>
              </UserInfo>
              <SelectedOption>{review.option_name}</SelectedOption>
              <ReviewBody>{review.comment}</ReviewBody>
              <Likes
                onClick={() => {
                  handleLikes(review.id);
                }}
              >
                <FaRegThumbsUp />
                <NumOfLikes>{review.likes}</NumOfLikes>
              </Likes>
            </ReviewWrapper>
          ))}
      </Slider>
    </SliderContainer>
  ) : (
    <BlankReviewWrapper>
      <BlankReviewTitle>아직 후기가 없어요.</BlankReviewTitle>
      <p>처음으로 후기를 남겨주세요!</p>
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
