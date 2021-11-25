import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../../config';
import styled from 'styled-components';
import '../../styles/theme';

export default function ReviewProducts() {
  const [reviewProduct, setReviewProduct] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API.product}?ordering=-review_count`)
      .then(res => res.json())
      .then(data => setReviewProduct(data));
  }, []);

  const goToDetailPage = id => {
    navigate(`/products/${id}`);
  };

  const goList = useNavigate();
  function goToList() {
    goList('/products?category_id=1&ordering=-best_ranking');
  }
  // console.log('리뷰푸로덕투', reviewProduct);

  return (
    <div>
      <PopularAndAllText>
        <PopularText>리뷰가 많은 프렙 🌟</PopularText>
        <p onClick={goToList}>전체보기</p>
      </PopularAndAllText>

      <ProductBox>
        {reviewProduct.results &&
          reviewProduct.results.slice(0, 4).map((ele, index) => {
            return (
              <Product
                onClick={() => {
                  goToDetailPage(ele.id);
                }}
                key={index}
              >
                <ProductWhere>{ele.address}</ProductWhere>
                <ProductImage alt="상품사진" src={ele.image_url} />
                <ProductExplanation>
                  [{ele.address}] {ele.product_name}(예약 가능)
                </ProductExplanation>
                <ProductPrice>
                  {ele.discounted_price.toLocaleString()} 원
                </ProductPrice>
                <StarRateBox>
                  <StarFlexBox>
                    <StarImage alt="별점" src="/images/star.png" />
                    <StarRate>{ele.star_point}</StarRate>
                  </StarFlexBox>
                  <Tag>
                    <New value={ele.tag}>NEW</New>
                    <Only value={ele.tag}>ONLY</Only>
                  </Tag>
                </StarRateBox>
              </Product>
            );
          })}
      </ProductBox>
    </div>
  );
}

const PopularAndAllText = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
`;

const PopularText = styled.div`
  font-weight: bold;
  font-size: 1.25rem;
`;

const Product = styled.div`
  margin-top: 30px;
  width: 210px;
`;

const ProductWhere = styled.span`
  position: absolute;
  margin-top: 10px;
  margin-left: 10px;
  font-size: 0.8rem;
  color: white;
`;

const ProductImage = styled.img`
  width: 210px;
  height: 210px;
  border-radius: 7px;
`;

const ProductExplanation = styled.p`
  margin-top: 10px;
  width: 210px;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 19px;
  font-weight: 500;
  font-size: 16px;
`;

const ProductPrice = styled.p`
  margin-top: 10px;
  font-size: 16px;
  font-weight: 900;
`;

const StarRateBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  width: 210px;
`;

const StarFlexBox = styled.div`
  display: flex;
  align-items: center;
`;

const StarImage = styled.img`
  width: 18px;
  height: 18px;
`;

const StarRate = styled.p`
  margin-left: 2px;
  margin-top: 2px;
  font-size: 14px;
  color: rgb(187, 187, 187);
`;

const ProductBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const Tag = styled.div`
  float: right;
  text-align: right;
`;

const New = styled.span`
  display: ${props => (props.value.includes('New') ? '' : 'none')};
  padding: 5px;
  background-color: navy;
  color: #fff;
  border-radius: 6px;
  font-size: 6px;
  font-weight: 600;
`;

const Only = styled.span`
  display: ${props => (props.value.includes('Only') ? '' : 'none')};
  padding: 5px;
  margin-left: 5px;
  background-color: ${({ theme }) => theme.mainColor};
  color: #fff;
  border-radius: 6px;
  font-size: 6px;
  font-weight: 600;
`;
