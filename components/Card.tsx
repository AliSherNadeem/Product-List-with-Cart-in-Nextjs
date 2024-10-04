import React from "react";
import Image from "next/image";
import Button from "./Button";
import { CardContent, CardDescription, CardTitle } from "./ui/card";

interface Dish {
  name: string;
  category: string;
  price: number;
  image: {
    desktop: string;
  };
}

const Card = ({ dish }: { dish: Dish }) => {
  return (
    <div className="relative overflow-hidden">
      <div className="relative">
        <Image
          src={dish.image.desktop}
          alt={dish.name}
          className="w-full h-auto rounded-lg"
          width="200"
          height="200"
        />
        <div className="absolute font-bold inset-x-0 bottom-0 flex justify-center">
          <Button label="Add to Cart" />
        </div>
      </div>

      <div className="mt-4">
        <CardDescription className="text-rose-500 ">
          {dish.category}
        </CardDescription>
        <CardTitle className="text-lg font-semibold mt-1">
          {dish.name}
        </CardTitle>
        <CardContent className="mt-1 p-0">
          <p className="text-rose-600 font-medium">${dish.price.toFixed(2)}</p>
        </CardContent>
      </div>
    </div>
  );
};

export default Card;
