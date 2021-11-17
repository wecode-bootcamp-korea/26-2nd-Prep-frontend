import React from 'react';
import styled from 'styled-components';

import FilterContent from './FilterContent';

export default function FilterModal({
  children,
  setModal,
  clicked,
  setClicked,
  priceValue,
  setPriceValue,
}) {
  return (
    <Container>
      <FilterContent
        setModal={setModal}
        clicked={clicked}
        setClicked={setClicked}
        priceValue={priceValue}
        setPriceValue={setPriceValue}
      >
        {children}
      </FilterContent>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 181%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.75);
`;
