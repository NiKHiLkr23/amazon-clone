import { StarIcon } from "@heroicons/react/24/outline";
import Image from "next/legacy/image";
import CurrencyFormat from "react-currency-format";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/BasketSlice";
import primeTag from "../public/images/prime-tag.png";
function CheckoutProduct({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hasPrime,
}) {
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasPrime,
    };
    //push item into redux store
    dispatch(addToBasket(product));
  };
  const removeItemFromBasket = () => {
    //Remove item from redux
    dispatch(removeFromBasket({ id }));
  };
  return (
    <div className="grid grid-cols-4 md:grid-cols-5">
      <div className="flex items-center">
        <Image
          src={image}
          width={200}
          height={200}
          alt="title"
          objectFit="contain"
        />
      </div>

      <div className="col-span-3 text-xs md:text-lg mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className=" h-5 text-yellow-500" />
            ))}
        </div>

        <p className="text xs my-2 line-clamp-2">{description}</p>
        <CurrencyFormat value={price} prefix={"$"} />

        {hasPrime && (
          <div className=" flex items-center space-x-2">
            <Image
              loading="lazy"
              width={48}
              height={48}
              src={primeTag}
              alt=""
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>
      <div className=" flex justify-evenly col-span-full md:col-auto  md:flex-col md:space-y-2 md:my-auto md:justify-self-end ">
        <button className="button " onClick={addItemToBasket}>
          Add to Basket
        </button>
        <button className="button" onClick={removeItemFromBasket}>
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
