import React from 'react';
import styled from 'styled-components';
import '../../styles/theme';

export default function Nav() {
  return (
    <NavBox>
      <WidthBox>
        <CategotyAndSearch>
          <CategoryBox>
            <CategoryImg alt="카테고리" src="/images/category.png" />
            <CategoryText>카테고리</CategoryText>
          </CategoryBox>
          <CategoryContour />
          <Logo alt="logo" src="/images/logo.png" />
          <LogoTitle className="logoTitle">Prep</LogoTitle>
          <SearchBox>
            <ReadingGlasses alt="돋보기" src="/images/돋보기.png" />

            <Search type="text" />
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
          <IconBox>
            <IconImage alt="로그인" src="/images/login.png" />
            <IconText>로그인</IconText>
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
  border-bottom: 1px solid ${props => props.theme.subColor};
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

const CategoryBox = styled.div`
  display: column;
  text-align: center;
  margin-left: 10px;
  margin-right: 13px;
  width: 100px;
  height: 40px;
`;

const CategoryImg = styled.img`
  width: 35px;
  height: 35px;
`;

const CategoryText = styled.p`
  font-size: 0.7rem;
`;

const CategoryContour = styled.img`
  margin-right: 30px;
  height: 50px;
  border: white;
  border-left: rgb(230, 230, 230) 1px solid;
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
  margin-top: 11px;
  margin-left: 10px;
  position: absolute;
  width: 20px;
  height: 20px;
`;

const Search = styled.input`
  padding-left: 40px;
  margin-top: 4px;
  margin-right: 15px;
  width: 100%;
  height: 37px;
  border-radius: 30px;
  border: none;
  background-color: ${({ theme }) => theme.subColor};
`;

const NavIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
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
