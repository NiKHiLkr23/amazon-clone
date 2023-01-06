import Image from "next/legacy/image";
import amazon_logo from "../public/images/amazon_logo.png";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/BasketSlice";
function Header() {
  const { data: session } = useSession();

  const items = useSelector(selectItems);

  const router = useRouter();
  return (
    <header>
      {/* topNav */}
      <div className="flex items-center bg-amazon_blue grow p-2">
        <div className="mt-2 flex items-center grow sm:grow-0 mx-2">
          <Image
            onClick={() => router.push("/")}
            src={amazon_logo}
            width={75}
            height={30}
            alt="logo"
            objectFit="contain"
            className=" cursor-pointer"
          />
        </div>

        {/* SearchBar */}
        <div className="hidden sm:flex items-center h-10 grow cursor-pointer rounded-md bg-yellow-400 hover:bg-yellow-500 ">
          <input
            className="p-2 px-4 h-full w-6 grow shrink rounded-l-md focus:outline-none "
            type="text"
          />
          <MagnifyingGlassIcon className="h-12 p-4 " />
        </div>

        {/* Right */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p
              onClick={!session ? signIn : signOut}
              className="hover:underline"
            >
              {session ? `Hello, ${session.user.name}` : "Sign In"}
            </p>
            <p className="font-extrabold md:text-sm ">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm ">& Orders</p>
          </div>
          <div
            onClick={() => router.push("/checkout")}
            className=" relative link flex items-center"
          >
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2 ">
              Basket
            </p>
          </div>
        </div>
      </div>
      {/* bottomNav */}
      <div className="flex items-center space-x-3 p-2 pl-4 bg-amazon_blue-light text-white text-sm md:text-lg">
        <p className="link flex items-center">
          <Bars3Icon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Courses</p>
        <p className="link">Todays Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Fashion</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Shopper toolkit</p>
        <p className="link hidden xl:inline-flex">Health & Personal Care</p>
        <p className="link hidden xl:inline-flex">Buy Again</p>
        <p className="link hidden md:inline-flex">Prime</p>
      </div>
    </header>
  );
}

export default Header;
