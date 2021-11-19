import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Kakao from './pages/Login/Kakao';
import ListPage from './pages/ListPage/ListPage';
import DetailPage from './pages/DetailPage/DetailPage';
import MyPage from './pages/MyPage/MyPage';
import Footer from './components/Footer/Footer';

export default function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users/kakao" element={<Kakao />} />
        <Route path="/main" element={<Main />} />
        <Route path="/categories" element={<ListPage />} />
        <Route path="/products/:id" element={<DetailPage />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
