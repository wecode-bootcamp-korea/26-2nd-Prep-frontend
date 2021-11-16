import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function StarRating() {
  const [rates, setRates] = useState([]);

  useEffect(() => {
    fetch('data/StarRate.json')
      .then(res => res.json())
      .then(res => setRates(res));
  }, []);

  return rates.map((rate, idx) => (
    <React.Fragment key={idx}>
      <StarRate>
        <StarImg alt="star rating" src="/images/회색별들.png" />
        <ColoredStarBox width={rate.ratingNum * 20}>
          <StarImgColored alt="star rating" src="/images/파란별들.png" />
        </ColoredStarBox>
        <RatingNum>{rate.ratingNum}</RatingNum>
        <Bullet>&bull;</Bullet>
        <NumOfReviews>{rate.numOfReviews}개 후기</NumOfReviews>
      </StarRate>
      <RateDescription>
        경험한 대원의 {rate.percentage}%가 5점을 줬어요!
      </RateDescription>
    </React.Fragment>
  ));
}

const StarRate = styled.section`
  display: flex;
  align-items: end;
  position: relative;
  margin-bottom: 12px;
`;

const StarImg = styled.img`
  margin-right: 10px;
  width: 100px;
`;

const ColoredStarBox = styled.div`
  position: absolute;
  top: 0;
  width: ${props => props.width}px;
  overflow: hidden;
`;

const StarImgColored = styled.img`
  margin-right: 10px;
  width: 100px;
`;

const RatingNum = styled.span`
  margin-right: 1px;
  font-size: 16px;
  font-weight: bold;
`;

const Bullet = styled.span`
  margin-right: 1px;
  color: ${({ theme }) => theme.fontColor};
`;

const NumOfReviews = styled.span`
  color: ${({ theme }) => theme.fontColor};
`;

const RateDescription = styled.p`
  font-size: 18px;
`;
