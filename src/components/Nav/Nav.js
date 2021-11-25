import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import '../../styles/theme';
import Category from './Category';
import { useNavigate } from 'react-router-dom';

export default function Nav() {
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const userToken = localStorage.getItem('token');

  function goToMain() {
    navigate('/');
  }

  const login = useNavigate();
  function goToLogin() {
    login('/login');
  }

  function goToLogOut() {
    localStorage.removeItem('token');
    alert('로그아웃 됐어용');
    goToMain();
  }

  const changeText = e => {
    setText(e.target.value);
  };

  const searchText = e => {
    if (e.code === 'Enter' && text) {
      navigate(`/products?odering=-best_ranking&searching=${text}`);
      setText('');
    }
  };

  return (
    <NavBox>
      <WidthBox>
        <CategotyAndSearch>
          <Category />
          <CategoryContour />
          <LogoBox onClick={goToMain}>
            <Logo alt="logo" src="/images/logo.png" />
            <LogoTitle className="logoTitle">Prep</LogoTitle>
          </LogoBox>
          <SearchBox>
            <ReadingGlasses alt="돋보기" src="/images/돋보기.png" />

            <Search
              type="text"
              value={text}
              onChange={changeText}
              onKeyPress={searchText}
            />
          </SearchBox>
        </CategotyAndSearch>

        <NavIcons>
          <IconBox>
            <IconImage alt="피드" src="/images/feed.png" />
            <IconText>피드</IconText>
          </IconBox>
          <IconBox>
            <IconImage alt="마이" src="/images/mypage.png" />
            <IconText>마이</IconText>
          </IconBox>
          <IconBox
            onClick={
              !userToken || userToken === 'undefined' ? goToLogin : goToLogOut
            }
          >
            <IconImage alt="로그인" src="/images/login.png" />
            <IconText>
              {!userToken || userToken === 'undefined' ? '로그인' : '로그아웃'}
            </IconText>
          </IconBox>
        </NavIcons>
      </WidthBox>
    </NavBox>
  );
}

const NavBox = styled.nav`
  position: relative;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgb(230, 230, 230);
`;

const WidthBox = styled.div`
  display: flex;
  width: 900px;
`;

const CategotyAndSearch = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  height: 90px;
`;

const CategoryContour = styled.img`
  margin-right: 30px;
  height: 40px;
  border: white;
  border-left: rgb(230, 230, 230) 1px solid;
`;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  margin-right: 3px;
  width: 25px;
  height: 25px;
`;

const LogoTitle = styled.span`
  margin-bottom: 3px;
  margin-right: 29.48px;
  font-family: ${({ theme }) => theme.font};
  font-weight: bold;
  font-size: 2.2rem;
  color: ${({ theme }) => theme.mainColor};
`;

const SearchBox = styled.div`
  width: 100%;
`;

const ReadingGlasses = styled.img`
  position: absolute;
  margin-top: 11px;
  margin-left: 10px;
  width: 20px;
  height: 20px;
`;

const Search = styled.input`
  padding-left: 40px;
  margin-top: 4px;
  margin-right: 15px;
  width: 95%;
  height: 37px;
  border-radius: 30px;
  border: none;
  background-color: ${({ theme }) => theme.subColor};
`;

const NavIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 20%;
`;

const IconBox = styled.div`
  display: column;
  text-align: center;
  margin-top: 9px;
  width: 40px;
  height: 40px;
`;

const IconImage = styled.img`
  width: 25px;
  height: 25px;
`;

const IconText = styled.p`
  font-size: 0.7rem;
`;
