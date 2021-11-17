import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { CATEGORY_MENUS } from './CategoryMenuData';

export default function CategoryMenu({ setClicked }) {
  const navigate = useNavigate();

  const changeCategory = index => {
    navigate(
      `/products?category_id=1&ordering=-best_ranking${
        index > 0 ? `&sub_category_id=${index}` : `&limit=12&offset=0`
      }`
    );
  };

  return (
    <div>
      <CategoryMenuWrapper>
        {CATEGORY_MENUS.map((menu, idx) => {
          return (
            <CategoryMenuTitle
              key={idx}
              onClick={() => {
                changeCategory(idx);
                setClicked(true);
              }}
            >
              {menu}
            </CategoryMenuTitle>
          );
        })}
      </CategoryMenuWrapper>
    </div>
  );
}

const CategoryMenuWrapper = styled.ul`
  width: 50%;
  height: 30px;
  margin-bottom: 15px;
  clear: both;
`;

const CategoryMenuTitle = styled.li`
  margin-right: 20px;
  line-height: 30px;
  float: left;
  cursor: pointer;
  &:hover {
    font-weight: bold;
    color: ${({ theme }) => theme.mainColor};
  }
`;
