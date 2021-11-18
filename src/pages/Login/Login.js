import React from 'react';
import styled from 'styled-components';
import { KAKAO_AUTH_URL } from './OAuth';
import { positionTopCenter } from '../../mixin';

export default function Login() {
  return (
    <LoginWrapper>
      <TextBox>
        <Title>반가워요!</Title>
        <SubTitle>
          지금 프렙에 가입해보세요! <br />
          오늘부터 #프렙하자
        </SubTitle>
      </TextBox>
      <KakaoButton href={KAKAO_AUTH_URL}>
        <KakaoImage src="/images/kakao_login.png" />
      </KakaoButton>
    </LoginWrapper>
  );
}

const LoginWrapper = styled.div`
  width: 900px;
  margin: 0 auto;
  height: 700px;
  margin-top: 90px;
`;

const TextBox = styled.div`
  ${positionTopCenter}
  top: 40%;
`;

const Title = styled.h1`
  padding: 20px;
  font-size: 1.35rem;
  font-weight: 500;
  text-align: center;
  color: #333;
`;

const SubTitle = styled.p`
  line-height: 1.6;
  text-align: center;
  color: #999;
`;

const KakaoButton = styled.a`
  display: block;
  ${positionTopCenter}
  width: 180px;
  height: 45px;
`;

const KakaoImage = styled.img`
  src: url(${props => props.src});
  width: 180px;
`;
