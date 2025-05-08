import React from "react";

type Props = {
  text?: string;
};

const ExampleCarouselImage: React.FC<Props> = ({ text }) => (
  <div className="w-full h-svh bg-gray-400 flex items-center justify-center text-2xl font-bold text-white">
    {text}
  </div>
);

export default ExampleCarouselImage;
