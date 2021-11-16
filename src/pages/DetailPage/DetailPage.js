import React from 'react';
import styled from 'styled-components';
import ProductHead from './Components/ProductHead';
import StarRating from './Components/StarRating';
import Review from './Components/Review';
import ReviewInputBox from './Components/ReviewInputBox';

export default function DetailPage() {
  return (
    <DetailPageWrapper>
      <ProductHead />
      <StarRating />
      <ReviewsSection>
        <Review />
      </ReviewsSection>
      <ReviewInputBox />
      <ProductBody>
        <BodyTitle>프렙 소개</BodyTitle>
        <BodyDescription>블라블라블라</BodyDescription>
      </ProductBody>
    </DetailPageWrapper>
  );
}

const DetailPageWrapper = styled.div`
  width: 900px;
  margin: 50px auto;
`;

const ReviewsSection = styled.section`
  margin-top: 30px;
  padding: 25px;
  background-color: rgb(245, 250, 254);
  border-top: 1px solid rgb(223, 236, 253);
  border-bottom: 1px solid rgb(223, 236, 253);
`;

const ProductBody = styled.section`
  margin: 30px auto;
  border-top: 2px solid ${({ theme }) => theme.subColor};
`;

const BodyTitle = styled.h2`
  margin: 30px 0;
  font-size: 20px;
  font-weight: bold;
`;

const BodyDescription = styled.p`
  margin: 0 20px;
`;
