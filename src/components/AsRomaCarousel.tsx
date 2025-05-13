import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../components/ExampleCarouselImage";
import asRomaFoto from "../assets/roma-foto.jpg";
import rissaRomaLazio from "../assets/rissa-roma-lazio.jpg";
import asRomaFotoAllenatore from "../assets/roma-foto-allenatore.jpg";

function AsRomaCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage imageUrl={asRomaFoto} />
        <Carousel.Caption>
          <h3 className="text-yellow-500 font-bold">FIORENTINA-ROMA 0-1</h3>
          <p className="font-bold text-xl">GIALLOROSSE IN CHAMPIONS!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage imageUrl={rissaRomaLazio} />
        <Carousel.Caption>
          <h3 className="text-yellow-500 font-bold">RISSA ROMA-LAZIO</h3>
          <p className="font-bold text-xl">UNA RISSA DA PAURA!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage imageUrl={asRomaFotoAllenatore} />
        <Carousel.Caption>
          <iframe
            className="aspect-video w-5/6 flex items-center py-12 right-0 left-0 mx-auto"
            src="https://www.youtube.com/embed/w7QVxewtoXI?si=vMUQWXJUNpLFffvy"
          ></iframe>
          <h3 className="text-yellow-500 font-bold">MAI SOLI MAI</h3>
          <p className="font-bold text-xl">UNA SORPRESA SPECIALE...</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default AsRomaCarousel;
