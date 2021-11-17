import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import '../../styles/theme';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Main() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('http://10.58.3.54:8000/mainimages')
      .then(res => res.json())
      .then(data => setImages(data));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 4000,
    cssEase: 'linear',
  };

  return (
    <div>
      <SlideBox>
        <Slider {...settings}>
          {images.results &&
            images.results.map((ele, index) => {
              return <Image1 key={index} alt="이미지" src={ele.image_url} />;
            })}
        </Slider>
      </SlideBox>
    </div>
  );
}

const SlideBox = styled.div`
  .slick-dots {
    bottom: 10px;
  }
  .slick-prev,
  .slick-next {
    z-index: 1000;
    background-color: none;
  }
  .slick-prev {
    margin-left: 50px;
  }
  .slick-next {
    margin-right: 50px;
  }
`;

const Image1 = styled.img`
  width: 900px;
  height: 360px;
`;
