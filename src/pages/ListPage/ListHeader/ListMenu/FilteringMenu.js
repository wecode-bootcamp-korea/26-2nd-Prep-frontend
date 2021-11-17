import React, { useState } from 'react';
import styled from 'styled-components';
import FilterModal from '../components/FilterModal';
import { FILTERING_MENUS } from './FilteringMenuData';

export default function FilteringMenu({
  clicked,
  setClicked,
  setPriceValue,
  priceValue,
}) {
  const [modal, setModal] = useState(false);

  const handleClickModal = index => {
    if (index === 3) {
      setModal(true);
    }
  };

  return (
    <>
      {FILTERING_MENUS.map((menu, idx) => {
        return (
          <FilterButton
            key={idx}
            onClick={() => {
              handleClickModal(idx);
            }}
          >
            {menu}
          </FilterButton>
        );
      })}
      {modal === true ? (
        <FilterModal
          setModal={setModal}
          clicked={clicked}
          setClicked={setClicked}
          priceValue={priceValue}
          setPriceValue={setPriceValue}
        />
      ) : null}
    </>
  );
}

const FilterButton = styled.button`
  margin-right: 20px;
  margin-bottom: 15px;
  padding: 10px 15px;
  background-color: #fff;
  border: 1.6px solid ${({ theme }) => theme.subColor};
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
`;
