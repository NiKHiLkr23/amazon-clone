import Image from "next/legacy/image";
import Currency from "react-currency-formatter";
import { StarIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/BasketSlice";
import { useState } from "react";

import primeTag from "../public/images/prime-tag.png";

function Product({ id, title, price, description, category, image, rating }) {
  const [hasPrime] = useState(true);

  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      hasPrime,
      rating,
    };

    // sending the product as an action to the redux store... the basket slice
    dispatch(addToBasket(product));
  };
  return (
    <div className="relative flex flex-col m-5 bg-white shadow-md z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400 ">
        {category}
      </p>
      <Image
        src={image}
        alt="imga"
        width={200}
        height={200}
        objectFit="contain"
      />
      <h4 className="my-3 line-clamp-2">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className=" h-5 text-yellow-500" />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price} currency="USD" />
      </div>
      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <Image src={primeTag} alt="" width={48} height={48} />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}

      <button onClick={addItemToBasket} className="mt-auto button ">
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
