import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import ListPage from './pages/ListPage/ListPage';
import DetailPage from './pages/DetailPage/DetailPage';
import MyPage from './pages/MyPage/MyPage';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/categories" element={<ListPage />} />
        <Route path="/products" element={<DetailPage />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}
