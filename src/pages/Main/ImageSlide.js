import React from 'react';
import styled from 'styled-components';
import '../../styles/theme';
import Slider from 'react-slick';

export default function Main({ images }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };

  return (
    <div>
      <SlideBox>
        <Slider {...settings}>
          {images.length > 0 &&
            images.map(ele => {
              return <Image1 key={ele.id} alt="이미지" src={ele.image_url} />;
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
