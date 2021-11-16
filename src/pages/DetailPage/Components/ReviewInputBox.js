import React from 'react';
import styled from 'styled-components';
import StarRateInput from './StarRateInput';

export default function ReviewInputBox() {
  return (
    <ReviewInputWrapper>
      <StarInputWrapper>
        <StarInputTitle>평가</StarInputTitle>
        <StarRateInput />
      </StarInputWrapper>
      <ReviewInput placeholder="체험에 대한 생생한 후기를 공유해주세요!" />
      <SubmitWrapper>
        <label>이미지 업로드 (PNG, JPG)</label>
        <ImageInput type="file" accept="image/jpeg image/png" />
        <SubmitBtn>후기 작성</SubmitBtn>
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

  label {
    position: absolute;
    left: 0;
    display: flex;
    align-items: center;
    height: 100%;
    padding: 15px;
    border-right: 1px solid ${({ theme }) => theme.subColor};
    font-size: 13px;
  }
`;

const ImageInput = styled.input`
  position: absolute;
  left: 0;
  width: 165px;
  height: 100%;
  opacity: 0;
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
