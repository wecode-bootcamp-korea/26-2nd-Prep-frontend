import React from 'react';
import styled from 'styled-components';

export default function StarRateInput() {
  return STAR_RATE_DATA.map((starRate, idx) => (
    <React.Fragment key={idx}>
      <StarRate type="radio" name="starRate" />
      <StarImg alt="star rate" src={starRate.img} />
    </React.Fragment>
  ));
}

const StarRate = styled.input`
  margin-right: 5px;
`;

const StarImg = styled.img`
  width: 60px;
  margin-right: 12px;
`;

const STAR_RATE_DATA = [
  { id: '1', img: '/images/파란별들.png' },
  { id: '2', img: '/images/회색별들.png' },
  { id: '3', img: '/images/회색별들.png' },
  { id: '4', img: '/images/회색별들.png' },
  { id: '5', img: '/images/회색별들.png' },
];
