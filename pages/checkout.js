import Image from "next/legacy/image";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/BasketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { useSession } from "next-auth/react";
import Primedaybanner from "../public/images/Prime-day-banner.png";

function Checkout() {
  const items = useSelector(selectItems);
  const { data: session } = useSession();
  const total = useSelector(selectTotal);
  return (
    <div>
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        <div className="grow m-5 shadow-sm">
          <Image
            src={Primedaybanner}
            width={1020}
            height={250}
            objectFit="contain"
            alt=""
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0
                ? "Your Shopping Basket is Empty"
                : "Shopping Basket"}
              !
            </h1>

            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                rating={item.rating}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap ">
                Subtotal ({items.length} items):{" "}
                <span className="font-bold">
                  <CurrencyFormat value={total} prefix={"$"} />
                </span>{" "}
              </h2>
              <button
                disabled={!session}
                className={`mt-2 ${
                  !session
                    ? "bg-gradient-to-b from-gray-400 to-gray-200 border border-gray-200 cursor-not-allowed"
                    : "button"
                }`}
              >
                {!session ? "Sign in to Checkout" : "Proceed to Checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;
