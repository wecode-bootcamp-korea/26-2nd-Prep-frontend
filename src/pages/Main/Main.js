import React from 'react';
import styled from 'styled-components';
import '../../styles/theme';
import ImageSlide from './ImageSlide';
import BestProducts from './BestProducts';
import NewProducts from './NewProducts';
import ReviewProducts from './ReviewProducts';
import { useNavigate } from 'react-router-dom';

export default function Main() {
  const goList = useNavigate();
  function goToList() {
    goList('/products?category_id=1&ordering=-best_ranking');
  }

  return (
    <MainBox>
      <WidthBox>
        <ImageSlide />
        <SubCategorys>
          {subCategoryElements.map((ele, index) => {
            return (
              <CategotyAndText key={index} onClick={goToList}>
                <SubCategotyElements alt={ele.name} src={ele.image} />
                <CategotyText>{ele.name}</CategotyText>
              </CategotyAndText>
            );
          })}
        </SubCategorys>
        <NewProducts />
        <BestProducts />
        <ReviewProducts />
      </WidthBox>
    </MainBox>
  );
}

const MainBox = styled.div`
  height: 100%;
  margin-top: 30px;
`;

const WidthBox = styled.div`
  margin: 0 auto;
  width: 900px;
  height: 100%;
  background-color: white;
`;

const SubCategorys = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  width: 100%;
`;

const CategotyAndText = styled.div`
  text-align: center;
  width: 60px;
  height: 60px;
`;

const SubCategotyElements = styled.img`
  width: 35px;
  height: 35spx;
  background-color: white;
`;

const CategotyText = styled.div`
  margin-top: 4px;
  font-size: 0.9rem;
  font-weight: bold;
  color: rgb(150, 150, 150);
`;

const subCategoryElements = [
  { name: '아웃도어', image: '/images/climbing.png' },
  { name: '캠핑', image: '/images/camping.png' },
  { name: '러닝', image: '/images/running.png' },
  { name: '공예', image: '/images/toolbox.png' },
  { name: '베이킹', image: '/images/baking.png' },
  { name: '스포츠', image: '/images/sport.png' },
  { name: '미술', image: '/images/art.png' },
  { name: '쿠킹', image: '/images/cooking.png' },
  { name: '뷰티', image: '/images/beauty.png' },
  { name: '낚시', image: '/images/fishing.png' },
];
