import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { FILTER_MENUS } from './FilterMenuData';
import { positionTopCenter } from '../../../../mixin';

export default function FilterContent({ setModal, priceValue, setPriceValue }) {
  const [listIndex, setListIndex] = useState(0);
  const [query, setQuery] = useState('');
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const params = searchParams.has('sub_category_id');
  const subCategoryNumber = searchParams.get('sub_category_id');

  const selectCurrentList = index => {
    setListIndex(index);
  };

  const changePriceRange = price => {
    let priceRange = Math.floor(Number(price) / 1000) / 10;
    return priceRange;
  };

  return (
    <Container>
      <FilterHeader>
        필터{' '}
        <CloseButton
          onClick={() => {
            setModal(false);
            setPriceValue(0);
          }}
        >
          ×
        </CloseButton>
      </FilterHeader>
      <FilterDetails>
        <FilterTitle>정렬</FilterTitle>
        {FILTER_MENUS.map(filter => {
          return (
            <Filter key={filter.id} type="checkbox">
              <label htmlFor="menus">{filter.name}</label>
              <CheckedStyle
                isActive={listIndex === filter.id}
                onClick={() => {
                  selectCurrentList(filter.id);
                  setQuery(filter.value);
                }}
              />
              <Checkbox type="checkbox" name="menus" id="menus" />
            </Filter>
          );
        })}
      </FilterDetails>
      <PriceFilter>
        <FilterTitle>
          가격
          <PriceRangeTitle>
            0 ~ {changePriceRange(priceValue)}만원
          </PriceRangeTitle>
        </FilterTitle>
        <PriceRangeBar>
          <PriceRange
            type="range"
            name="price"
            min="0"
            max="300000"
            defaultValue="0.5"
            className="price"
            onChange={e => {
              setPriceValue(e.target.value);
            }}
          />
        </PriceRangeBar>
        <MinPrice>0원</MinPrice>
        <MaxPrice>300,000원 이상</MaxPrice>
      </PriceFilter>
      <ApplyButton
        onClick={() => {
          navigate(
            `/products?category_id=1&ordering=${query ? query : ''}${
              priceValue ? `&price_upper=${priceValue}` : ''
            }${
              params
                ? `&sub_category_id=${
                    subCategoryNumber > 0 ? subCategoryNumber : ''
                  }`
                : ''
            }`
          );
          setModal(false);
          setPriceValue(0);
        }}
      >
        적용하기
      </ApplyButton>
    </Container>
  );
}

const Container = styled.div`
  ${positionTopCenter}
  top: 28%;
  width: 420px;
  height: 680px;
  overflow: scroll;
  border-radius: 7px;
  background-color: #fff;
`;

const FilterHeader = styled.h4`
  padding: 30px 0 30px 40px;
  border-bottom: 2px solid ${({ theme }) => theme.subColor};
  font-size: 1.25rem;
  font-weight: bold;
`;

const CloseButton = styled.span`
  float: right;
  padding-right: 30px;
  font-size: 1.25rem;
  font-weight: bold;
  text-align: right;
  cursor: pointer;
`;

const FilterDetails = styled.ul`
  clear: both;
  width: 100%;
  padding-bottom: 30px;
  border-bottom: 2px solid ${({ theme }) => theme.subColor};
`;

const FilterTitle = styled.li`
  padding: 30px 0 30px 40px;
  font-size: 1.125rem;
  font-weight: bold;
`;

const Filter = styled.li`
  height: 60px;
  padding-left: 40px;
  line-height: 60px;
  font-size: 1.1rem;
`;

const Checkbox = styled.input`
  display: none;
  float: right;
  height: 100%;
  margin: 0;
  margin-right: 30px;
`;

const CheckedStyle = styled.span`
  position: absolute;
  right: 6%;
  width: 20px;
  height: 20px;
  margin-top: 22px;
  background: ${props =>
    props.isActive
      ? 'url("/images/check.png") #3274e7 no-repeat center/50%'
      : '#fff'};
  border: 0.6px solid ${({ theme }) => theme.mainColor};
  border-radius: 50%;
  cursor: pointer;
`;

const PriceFilter = styled.ul`
  padding-bottom: 60px;
`;

const PriceRangeTitle = styled.span`
  padding-left: 5px;
  color: ${({ theme }) => theme.mainColor};
  font-weight: 500;
`;

const PriceRangeBar = styled.li`
  padding-left: 40px;
`;

const PriceRange = styled.input`
  width: 320px;
`;

const MinPrice = styled.span`
  display: inline-block;
  width: 50%;
  padding-left: 40px;
  padding-top: 5px;
  color: ${({ theme }) => theme.fontColor};
`;

const MaxPrice = styled.span`
  display: inline-block;
  width: 50%;
  padding-right: 30px;
  text-align: right;
  color: ${({ theme }) => theme.fontColor};
`;

const ApplyButton = styled.button`
  display: block;
  width: 90%;
  margin: 0 auto 40px;
  padding: 20px 0;
  background-color: ${({ theme }) => theme.mainColor};
  color: #fff;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
`;
