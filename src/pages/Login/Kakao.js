import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { API } from '../../config';
import { CLIENT_ID, REDIRECT_URI } from './OAuth';

export default function Kakao(props) {
  const [searchParams] = useSearchParams();
  const code = searchParams.toString('=');
  const navigate = useNavigate();

  useEffect(() => {
    const goToMain = () => {
      navigate('/');
    };

    const getAccessToken = accessToken => {
      fetch(`${API.login}`, {
        headers: {
          Authorization: accessToken,
        },
      })
        .then(res => res.json())
        .then(data => {
          localStorage.setItem('token', data.Token);
          goToMain();
        });
    };

    const KakaoLogin = () => {
      fetch(
        `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&${code}`
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
  }, [code, navigate]);

  return <div />;
}
