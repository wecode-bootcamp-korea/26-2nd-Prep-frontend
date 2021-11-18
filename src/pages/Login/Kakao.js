import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { CLIENT_ID, REDIRECT_URI } from './OAuth';

export default function Kakao(props) {
  const [searchParams] = useSearchParams();
  const code = searchParams.toString('=');
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main');
  };

  useEffect(() => {
    const getAccessToken = accessToken => {
      fetch('http://10.58.2.185:8000/users/kakao', {
        headers: {
          Authorization: accessToken,
        },
      })
        .then(res => res.json())
        .then(data => {
          localStorage.setItem('token', accessToken);
          goToMain();
        });
    };

    const KakaoLogin = () => {
      fetch(
        `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&'${code}'`
      )
        .then(res => res.json())
        .then(data => {
          const accessToken = data.access_token;

          if (accessToken) {
            getAccessToken(accessToken);
          }
        });
    };

    KakaoLogin();
  }, [code, goToMain]);

  return <div />;
}
