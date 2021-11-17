import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function Product({
  address,
  image,
  title,
  price,
  discount,
  star,
  productId,
  tag,
}) {
  const navigate = useNavigate();

  const changePriceToString = price => {
    return price.toLocaleString('ko-kr');
  };

  const goToDetailPage = id => {
    navigate(`/proudcts/${id}`);
  };

  return (
    <ProductBox
      onClick={() => {
        goToDetailPage(productId);
      }}
    >
      <ProductImg src={image} />
      <ProductTitle>
        [{address}] {title}
      </ProductTitle>
      <ProductPrice>
        {changePriceToString(discount)}원{' '}
        <DiscountPrice>{changePriceToString(price)}원</DiscountPrice>
      </ProductPrice>
      <Stars>
        <StarImg src="/images/star.png" /> {star}
      </Stars>
      <Tag>
        {tag[0] === 'New' || tag[1] === 'New' ? <New>NEW</New> : null}
        {tag[0] === 'Only' || tag[1] === 'Only' ? <Only>ONLY</Only> : null}
      </Tag>
    </ProductBox>
  );
}

const ProductBox = styled.div`
  clear: both;
`;

const ProductImg = styled.img`
  display: block;
  width: 215px;
  height: 210px;
  border-radius: 8px;
  cursor: pointer;
`;

const ProductTitle = styled.h3`
  width: 215px;
  height: 38px;
  margin-top: 10px;
  font-size: 1rem;
  font-weight: 500;
  text-overflow: ellipsis;
  word-break: keep-all;
  line-height: 1.4;
  overflow: hidden;
  cursor: pointer;
`;

const ProductPrice = styled.p`
  margin: 10px 0;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
`;

const DiscountPrice = styled.span`
  padding-left: 5px;
  color: ${({ theme }) => theme.fontColor};
  text-decoration: line-through;
  font-weight: normal;
  font-size: 0.9rem;
`;

const StarImg = styled.img`
  display: inline-block;
  width: 18px;
  height: 18px;
`;

const Stars = styled.span`
  display: inline-block;
  color: #777;
`;

const Tag = styled.div`
  float: right;
  text-align: right;
`;

const New = styled.span`
  display: inline-block;
  padding: 5px;
  background-color: navy;
  color: #fff;
  border-radius: 6px;
  font-size: 6px;
  font-weight: 600;
`;

const Only = styled.span`
  display: inline-block;
  margin-left: 5px;
  padding: 5px;
  background-color: ${({ theme }) => theme.mainColor};
  color: #fff;
  border-radius: 6px;
  font-size: 6px;
  font-weight: 600;
`;
