import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

const SETTINGS = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function ProductHead({ productInfo, option }) {
  return (
    <ProductHeader>
      <Slider {...SETTINGS}>
        {productInfo.product_image_url.map((img, idx) => (
          <ProductImg key={idx} alt="product" src={img} />
        ))}
      </Slider>
      <ProductInfo>
        <ProductTitle>{productInfo.name}</ProductTitle>
        <Price>
          <DiscountRate>{Math.floor(option.discount_rate)}%</DiscountRate>
          <span>{Number(option.price).toLocaleString()}</span>
          <Currency>원</Currency>
          <DiscountPrice>
            {Number(option.discounted_price).toLocaleString()}원
          </DiscountPrice>
        </Price>
        <ExpiryDate>
          유효기간: 구매일로부터 {productInfo.expiration_date}일까지
        </ExpiryDate>
      </ProductInfo>
    </ProductHeader>
  );
}

const ProductHeader = styled.section`
  display: flex;
  padding-bottom: 25px;
  margin-bottom: 25px;
  border-bottom: 2px solid ${({ theme }) => theme.subColor};

  .slick-slider {
    width: 430px;
    height: 430px;
    border-radius: 3%;
  }

  .slick-prev:before,
  .slick-next:before {
    color: ${({ theme }) => theme.subColor};
  }

  .slick-prev {
    left: 15px;
    z-index: 1;
  }

  .slick-next {
    right: 15px;
    z-index: 1;
  }

  .slick-arrow {
    font-size: 0px;
  }
`;

const ProductImg = styled.img`
  width: 430px;
  height: 430px;
  border-radius: 3%;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  position: relative;
  margin-left: 25px;
  padding: 5px;
`;

const ProductTitle = styled.h2`
  max-width: 430px;
  margin-bottom: 10px;
  font-size: 23px;
  line-height: 28px;
  word-break: keep-all;
`;

const Price = styled.div`
  font-size: 23px;
  font-weight: bold;
`;

const DiscountRate = styled.span`
  margin-right: 15px;
  color: red;
`;

const Currency = styled.span`
  margin-right: 15px;
  font-size: 15px;
`;

const DiscountPrice = styled.span`
  color: ${({ theme }) => theme.fontColor};
  font-size: 15px;
  text-decoration: line-through;
`;

const ExpiryDate = styled.span`
  position: absolute;
  bottom: 10px;
  color: ${({ theme }) => theme.fontColor};
  font-size: 12px;
`;
