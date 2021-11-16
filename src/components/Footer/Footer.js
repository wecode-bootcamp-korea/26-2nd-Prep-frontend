import React from 'react';
import styled from 'styled-components';
import '../../styles/theme';

export default function Footer() {
  return (
    <FooterBox>
      <WidthBox>
        <TextBox>
          <Service>
            <ServiceCenter>고객센터</ServiceCenter>
            <ServiceCenterText>
              이메일 : <Bold>yshh0514@gmail.com</Bold>
            </ServiceCenterText>
            <ServiceCenterText>
              고객센터 : <Bold>010-9427-5734</Bold>
            </ServiceCenterText>
            <ServiceCenterText>
              업무시간 : <Bold>평일 10:00 - 17:00 (점심: 12:00 - 13:00)</Bold>
            </ServiceCenterText>
          </Service>

          <Company>
            <CompanyName>Prep</CompanyName>
            <CompanyText>㈜Prep </CompanyText>
            <CompanyText>대표 : 양성호 </CompanyText>
            <CompanyText>
              주소 : 서울시 강남구 테헤란로 427 위워크 타워
            </CompanyText>
            <CompanyText>프론트엔드 : 양성호 , 장연정 , 박보라 </CompanyText>
            <CompanyText>백엔드 : 권민석 , 이용건</CompanyText>
          </Company>

          <DownloadApp>
            <IconAndText>
              <Icon alt="앱 아이콘" src="/images/playstore.png" />
              <Text>앱 다운로드</Text>
            </IconAndText>
          </DownloadApp>
        </TextBox>
      </WidthBox>
    </FooterBox>
  );
}

const FooterBox = styled.footer`
  position: relative;
  display: flex;
  align-items: flex-end;
  height: 100%;
`;

const WidthBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.subColor};
`;

const TextBox = styled.div`
  background-color: ${({ theme }) => theme.subColor};
  color: rgb(102, 102, 102);
`;

const Service = styled.p`
  margin-top: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(226, 226, 226);
`;

const ServiceCenter = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  color: black;
`;
const ServiceCenterText = styled.p`
  margin-top: 10px;
  font-size: 0.8rem;
`;

const Bold = styled.strong`
  font-weight: bold;
`;

const Company = styled.div`
  margin-top: 20px;
`;

const CompanyName = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
`;

const CompanyText = styled.p`
  font-size: 0.8rem;
  margin-top: 7px;
`;

const DownloadApp = styled.div`
  display: flex;
  width: 900px;
  height: 60px;
  margin-top: 20px;
  margin-bottom: 30px;
  background-color: #333333;
`;

const IconAndText = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 14px;
  width: 109px;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
`;

const Text = styled.div`
  margin-left: 5px;
  margin-top: 8px;
  color: ${({ theme }) => theme.subColor}; ;
`;
