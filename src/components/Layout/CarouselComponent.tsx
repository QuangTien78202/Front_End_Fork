import React from "react";
import { Carousel } from "antd";

const CarouselComponent: React.FC<{ images: string[] }> = ({ images }) => {
  return (
    <Carousel autoplay>
      {images.map((src, index) => (
        <div key={index}>
          <img
            src={src}
            alt={`Banner ${index + 1}`}
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
