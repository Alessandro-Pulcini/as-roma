import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../components/ExampleCarouselImage";
import asRomaMonster from "../assets/roma-monster.jpg";
import rissaRomaLazio from "../assets/rissa-roma-lazio.jpg";

function AsRomaCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" imageUrl={asRomaMonster} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" imageUrl={rissaRomaLazio} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default AsRomaCarousel;
