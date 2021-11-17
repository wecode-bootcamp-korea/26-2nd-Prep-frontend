import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import '../../styles/theme';

export default function Modal() {
  const [modal, setModal] = useState(false);
  const [categories, setcategories] = useState([]);

  useEffect(() => {
    fetch('http://10.58.3.54:8000/categories')
      .then(res => res.json())
      .then(data => setcategories(data));
  }, []);

  // useEffect(() => {}, [categories]); //확인용

  const toggleModal = () => {
    setModal(prev => !prev);
  };
  const goList = useNavigate();
  function goToList() {
    goList('/products?category_id=1&ordering=-best_ranking');
    setModal(false);
  }

  //사이드 이펙트로 수정 하겠습니다
  useEffect(() => {
    if (modal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [modal]);

  return (
    <div>
      <CategoryBox onClick={toggleModal}>
        <CategoryImg alt="카테고리" src="/images/category.png" />
        <CategoryText>카테고리</CategoryText>
      </CategoryBox>
      {modal && (
        <ModalBox>
          <Overlay onClick={toggleModal} />
          <ModalContent>
            <ModalHeadText>카테고리</ModalHeadText>
            <CategoryElementsBox>
              {categories.result &&
                categories.result.map((ele, idx) => {
                  return (
                    <CategoryImageAndText key={idx} onClick={goToList}>
                      <CategoryElementsImg alt={ele.name} src={ele.image} />
                      <ElementsName>{ele.name}</ElementsName>
                    </CategoryImageAndText>
                  );
                })}
            </CategoryElementsBox>
            <CloseModal onClick={toggleModal}>✕</CloseModal>
          </ModalContent>
        </ModalBox>
      )}
    </div>
  );
}

const CategoryBox = styled.button`
  display: column;
  text-align: center;
  margin-left: -30px;
  margin-right: 8px;
  width: 100px;
  height: 40px;
  border: none;
  background-color: white;
`;

const CategoryImg = styled.img`
  width: 35px;
  height: 35px;
`;

const CategoryText = styled.p`
  font-size: 0.7rem;
`;

const ModalBox = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Overlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(49, 49, 49, 0.8);
`;

const ModalContent = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  width: 850px;
  height: 550px;
  transform: translate(-50%, -50%);
  line-height: 1.4;
  background: white;
  padding: 14px 28px;
  border-radius: 10px;
`;

const CloseModal = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 7px;
  border: none;
  background: white;
`;

const ModalHeadText = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;

const CategoryElementsBox = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
`;

const CategoryImageAndText = styled.div`
  margin-top: 10px;
`;

const CategoryElementsImg = styled.img`
  width: 180px;
  height: 100px;
  border-radius: 5px;
`;

const ElementsName = styled.p`
  position: absolute;
  text-align: center;
  margin-top: -40px;
  margin-left: 104px;
  width: 60px;
  height: 23px;
  border-radius: 5px;
  font-size: 0.8rem;
  color: white;
  padding: 3px;
  opacity: 80%;
  background-color: ${({ theme }) => theme.mainColor};
`;
