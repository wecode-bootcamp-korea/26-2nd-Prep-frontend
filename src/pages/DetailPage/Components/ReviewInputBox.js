import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { API } from '../../../config';
import StarRateInput from './StarRateInput';

export default function ReviewInputBox() {
  const [reviewImg, setReviewImg] = useState();
  const [reviewScore, setReviewScore] = useState();
  const [reviewDescription, setReviewDescription] = useState();

  const scoresRef = useRef([]);
  const reviewRef = useRef();

  function handleImgChange(e) {
    setReviewImg(e.target.files[0]);
  }

  function handleScoreChange(value) {
    setReviewScore(value);
  }

  function handleDescriptionChange(e) {
    setReviewDescription(e.target.value);
  }

  function resetReviewInputs() {
    setReviewImg(null);
    setReviewScore(null);
    setReviewDescription('');
    scoresRef.current.forEach(input => (input.checked = false));
    reviewRef.current.value = '';
  }

  function resetImgInput() {
    setReviewImg(null);
    reviewRef.current.value = '';
  }

  function submitReview(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('filename', reviewImg);
    formData.append('star_rate', reviewScore);
    formData.append('comment', reviewDescription);
    formData.append('option_id', 1);

    fetch(`${API.reviews}/review`, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
      body: formData,
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'SUCCESS') {
          alert('리뷰 등록이 완료되었습니다.');
        } else if (res.message === 'INVALID_TOKEN') {
          alert('먼저 로그인해주세요');
        } else {
          alert('모든 리뷰 칸을 작성해주세요.');
        }
      });

    resetReviewInputs();
  }

  return (
    <ReviewInputWrapper onSubmit={submitReview}>
      <StarInputWrapper>
        <StarInputTitle>평가</StarInputTitle>
        <StarRateInput
          scoresRef={scoresRef}
          handleScoreChange={handleScoreChange}
        />
      </StarInputWrapper>
      <ReviewInput
        value={reviewDescription}
        placeholder="체험에 대한 생생한 후기를 공유해주세요!"
        maxLength="50"
        onChange={handleDescriptionChange}
      />
      <SubmitWrapper>
        <ImageInputLabel htmlFor="ImageInput">
          이미지 업로드 (PNG, JPG)
        </ImageInputLabel>
        <ImageInput
          id="ImageInput"
          type="file"
          accept="image/jpeg image/png"
          onChange={handleImgChange}
          ref={reviewRef}
        />
        <ImagePreview
          style={{
            backgroundImage: reviewImg
              ? `url(${URL.createObjectURL(reviewImg)})`
              : null,
          }}
        />
        <ImageDeleteBtn
          type="button"
          className={reviewImg ? 'deleteBtn' : 'deleteBtn hidden'}
          onClick={resetImgInput}
        >
          x
        </ImageDeleteBtn>
        <SubmitBtn type="submit">후기 작성</SubmitBtn>
      </SubmitWrapper>
    </ReviewInputWrapper>
  );
}

const ReviewInputWrapper = styled.form`
  width: 100%;
  margin-top: 25px;
  border: 1px solid ${({ theme }) => theme.subColor};
`;

const StarInputWrapper = styled.div`
  padding: 15px;
  border-bottom: 1px solid ${({ theme }) => theme.subColor};
`;

const StarInputTitle = styled.span`
  margin-right: 15px;
  font-weight: bold;
`;

const ReviewInput = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  border: none;
  outline: none;
  resize: none;
`;

const SubmitWrapper = styled.div`
  position: relative;
  height: 50px;
  border-top: 1px solid ${({ theme }) => theme.subColor};
`;

const ImageInputLabel = styled.label`
  position: absolute;
  left: 0;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 15px;
  border-right: 1px solid ${({ theme }) => theme.subColor};
  font-size: 13px;
`;

const ImageInput = styled.input`
  display: none;
`;

const ImagePreview = styled.div`
  position: absolute;
  left: 175px;
  top: 7px;
  width: 35px;
  height: 35px;
  background-size: cover;
`;

const ImageDeleteBtn = styled.button`
  position: absolute;
  left: 210px;
  top: 15px;
  background: none;
  border: none;

  &.hidden {
    display: none;
  }
`;

const SubmitBtn = styled.button`
  position: absolute;
  right: 0;
  width: 120px;
  height: 100%;
  border: none;
  border-left: 1px solid ${({ theme }) => theme.subColor};
  background-color: white;
`;
