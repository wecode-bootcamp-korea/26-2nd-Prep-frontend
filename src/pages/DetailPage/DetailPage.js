import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { API } from '../../config';
import ProductHead from './Components/ProductHead';
import StarRating from './Components/StarRating';
import Review from './Components/Review';
import ReviewInputBox from './Components/ReviewInputBox';
import { IoIosArrowUp } from 'react-icons/io';

export default function DetailPage() {
  const [products, setProducts] = useState({
    productInfo: {},
    option: {},
  });
  const [scrollPosition, setScrollPosition] = useState();
  const { id } = useParams();
  const topBtnRef = useRef();

  useEffect(() => {
    fetch(`${API.product}/${id}`)
      .then(res => res.json())
      .then(res => {
        setProducts({
          productInfo: res.message.product_info,
          option: res.message.option_list[0],
        });
      });
  }, [id]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [scrollPosition]);

  function handleScroll() {
    setScrollPosition(window.scrollY);
  }

  function moveToTop(ref) {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }

  if (!Object.keys(products.option).length) return <>Loading...</>;
  const { productInfo, option } = products;

  return (
    <DetailPageWrapper ref={topBtnRef}>
      <ProductHead productInfo={productInfo} option={option} />

      <StarRating productInfo={productInfo} option={option} />
      <ReviewsSection>
        <Review />
      </ReviewsSection>
      <ReviewInputBox />
      <ProductBody>
        <BodyTitle>프렙 소개</BodyTitle>
        <BodyDescription>{productInfo.description}</BodyDescription>
      </ProductBody>
      <TopBtn
        type="button"
        onClick={() => moveToTop(topBtnRef)}
        position={scrollPosition}
      >
        <IoIosArrowUp />
      </TopBtn>
    </DetailPageWrapper>
  );
}

const DetailPageWrapper = styled.div`
  position: relative;
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

const BodyDescription = styled.div`
  margin: 0 20px;
`;

const TopBtn = styled.button`
  position: fixed;
  right: 20%;
  bottom: 20%;
  width: 30px;
  height: 30px;
  border: 1px solid lightgrey;
  border-radius: 100%;
  background-color: white;
  box-shadow: 1px 1px 3px lightgrey;
  opacity: ${props => (props.position > 250 ? 1 : 0)};
  transition-duration: 200ms;
  z-index: 100;
`;
