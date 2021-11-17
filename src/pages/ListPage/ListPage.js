import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { API } from '../../config';
import { BiChevronDown } from 'react-icons/bi';
import CategoryMenu from './ListHeader/ListMenu/CategoryMenu';
import FilteringMenu from './ListHeader/ListMenu/FilteringMenu';
import Product from './Products/Product';

const LIMIT = 12;
const pageIndex = [1, 2, 3];

export default function ListPage({ props }) {
  const [productList, setProductList] = useState([]);
  const [count, setCount] = useState(0);
  const [priceValue, setPriceValue] = useState('');
  const [buttonIndex, setButtonIndex] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const queryString = searchParams.toString('?');
  const currentPage = Number(searchParams.getAll('offset')) / LIMIT;

  const includeSubCategory = searchParams.has('sub_category_id');

  //data loading
  useEffect(() => {
    fetch(`${API.product}?category_id=1&ordering=-best_ranking`)
      .then(res => res.json())
      .then(data => {
        setProductList(data.results);
        setCount(data.total_count);
      });
  }, []);

  //pagination
  useEffect(() => {
    fetch(`${API.product}?${queryString}`)
      .then(res => res.json())
      .then(data => {
        setProductList(data.results);
      });
  }, [queryString, productList.length]);

  const changePageByClick = index => {
    const query = `?category_id=1&ordering=-best_ranking&limit=${LIMIT}&offset=${
      index * LIMIT
    }`;

    navigate(
      `/products${query}${priceValue ? `price_upper=${priceValue}` : ''}`
    );
  };

  const selectButton = index => {
    setButtonIndex(index);
  };

  const goToNextButton = index => {
    if (index >= 0 && index < 2) {
      changePageByClick(index + 1);
      selectButton(index + 1);
    } else if (index === 2) {
      changePageByClick(2);
    }
  };

  const goToPrevButton = index => {
    if (index >= 1) {
      changePageByClick(index - 1);
      selectButton(index - 1);
    } else if (index === 0) {
      changePageByClick(0);
    }
  };

  return (
    <ListWrapper>
      <ListHeader>
        <CategoryTitle>
          아웃도어 <BiChevronDown />
        </CategoryTitle>
        <CategoryMenu setClicked={setClicked} />
        <FilteringMenu
          clicked={clicked}
          setClicked={setClicked}
          priceValue={priceValue}
          setPriceValue={setPriceValue}
        />
      </ListHeader>
      <ProductListTitle>
        인기있는 아웃도어
        <TotalList>
          {clicked && includeSubCategory ? productList.length : count}
        </TotalList>
      </ProductListTitle>

      <ProductList>
        {productList.map(product => {
          return (
            <Product
              key={product.id}
              address={product.address}
              image={product.image_url}
              title={product.product_name}
              price={product.price}
              discount={product.discounted_price}
              star={product.star_point}
              productId={product.id}
              tag={product.tag}
            />
          );
        })}
      </ProductList>
      {productList.length < 12 && currentPage !== 2 ? null : (
        <PageWrapper>
          <PageButton
            onClick={() => {
              goToPrevButton(buttonIndex);
              setClicked(true);
            }}
          >
            &lt;
          </PageButton>
          {pageIndex.map((pageNumber, idx) => {
            return (
              <PageNumber
                key={idx}
                isActiveButton={buttonIndex[idx] || currentPage === idx}
                onClick={() => {
                  changePageByClick(pageNumber - 1);
                  selectButton(idx);
                  setClicked(!clicked);
                }}
              >
                {pageNumber}
              </PageNumber>
            );
          })}
          <PageButton
            onClick={() => {
              goToNextButton(buttonIndex);
              setClicked(true);
            }}
          >
            &gt;
          </PageButton>
        </PageWrapper>
      )}
    </ListWrapper>
  );
}

const ListWrapper = styled.div`
  width: 900px;
  margin: 0 auto;
  margin-top: 20px;
`;

const ListHeader = styled.div``;

const CategoryTitle = styled.h2`
  padding-bottom: 15px;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
`;

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 4rem 1rem;
  margin-bottom: 60px;
`;

const ProductListTitle = styled.h3`
  padding: 20px 0 40px;
  font-size: 1.3rem;
  font-weight: bold;
`;

const TotalList = styled.span`
  padding-left: 5px;
  color: #777;
  font-size: 1.25rem;
  font-weight: normal;
`;
const PageWrapper = styled.div`
  margin: 60px 0;
  text-align: center;
`;

const PageNumber = styled.a`
  padding: 10px;
  font-size: 1.375rem;
  color: ${props => (props.isActiveButton ? '#3274e7' : '#333')};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.mainColor};
  }
`;

const PageButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  padding: 0 20px;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;
