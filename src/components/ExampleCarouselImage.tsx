import React from "react";

type Props = {
  text?: string;
  imageUrl?: string;
};

const ExampleCarouselImage: React.FC<Props> = ({ text, imageUrl }) => (
  <div
    style={{ backgroundImage: `url(${imageUrl})` }}
    // className={`w-full h-svh flex items-center justify-center text-2xl font-bold text-white bg-[url("/public/assets/roma-monster.jpg")] bg-cover bg-center bg-no-repeat`}
    className={`w-full h-svh bg-gray-400 flex items-center justify-center text-2xl font-bold text-white bg-cover bg-center bg-no-repeat`}
  >
    {text}
  </div>
);

export default ExampleCarouselImage;
