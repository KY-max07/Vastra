import { HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import CardDrawer from "../Layout/CartDrawer";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileDraw, setMobileDreaw] = useState(false);

  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const toggleMobileDraw = () => {
    setMobileDreaw(!mobileDraw);
  };

  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-3 px-8 ">
        <div>
          <NavLink
            path="/"
            className="text-3xl font-canopee tracking-widest  font-extrabold text-gray-800 hover:text-black"
          >
            Vastra
          </NavLink>
        </div>
        <div className="hidden md:flex space-x-6 pl-7">
          <NavLink
            path="#"
            className="font-primary font-bold uppercase text-gray-600 hover:text-gray-800 text-sm"
          >
            men
          </NavLink>
          <NavLink
            path="#"
            className="font-primary font-bold uppercase text-gray-600 hover:text-gray-800 text-sm"
          >
            Women
          </NavLink>
          <NavLink
            path="#"
            className="font-primary font-bold uppercase text-gray-600 hover:text-gray-800 text-sm"
          >
            topwear
          </NavLink>
          <NavLink
            path="#"
            className="font-primary font-bold uppercase text-gray-600 hover:text-gray-800 text-sm"
          >
            bottomwear
          </NavLink>
        </div>
        <div className="flex items-center space-x-4">
          <NavLink path="/profile">
            <HiOutlineUser className="h-6.5 w-6 hover:text-gray-700" />
          </NavLink>
          <button
            className="relative hover:text-gray-700"
            onClick={toggleCartDrawer}
          >
            <HiOutlineShoppingBag className="h-5.5 w-6  hover:text-gray-700" />
            <span className="absolute -top-1 bg-rabbit-red text-white text-xs rounded-full px-1.5 ">
              0
            </span>
          </button>
          {/* search */}
          <div className="overflow-hidden">
            <SearchBar />
          </div>

          <button onClick={toggleMobileDraw} className="md:hidden">
            <HiBars3CenterLeft className="h-8 w-8  hover:text-gray-700" />
          </button>
        </div>
        <CardDrawer
          drawerOpen={drawerOpen}
          toggleCardDrawer={toggleCartDrawer}
        />
      </nav>
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-2/3 md:w-[28rem] h-full bg-gray-100 shadow-lg transform transition-transform duration-300 flex flex-col z-50 border-l border-gray-200 ${
          mobileDraw ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMobileDraw}>
            <IoMdClose className="h-6 w-6 text-gray-500 hover:text-gray-950" />
          </button>
        </div>
        <div className="p-4 font-secondary">
          <h2 className="text-5xl font-semibold mb-4 uppercase">
            menu
          </h2>
          <nav className="flex flex-col mt-10 text-3xl">
            <NavLink
              to="#"
              onClick={toggleMobileDraw}
              className="block text-gray-800 text-center uppercase border-b border-gray-500  p-5 hover:text-white hover:bg-gray-900"
            >
              {" "}
              men
            </NavLink>
            <NavLink
              to="#"
              onClick={toggleMobileDraw}
              className="block text-gray-800 text-center uppercase border-b border-gray-500 p-5 hover:text-white hover:bg-gray-900"
            >
              {" "}
             Women
            </NavLink>
            <NavLink
              to="#"
              onClick={toggleMobileDraw}
              className="block text-gray-800 text-center uppercase border-b border-gray-500 p-5 hover:text-white hover:bg-gray-900"
            >
              {" "}
              new arrival
            </NavLink>
            <NavLink
              to="#"
              onClick={toggleMobileDraw}
              className="block text-gray-800 text-center uppercase border-b border-gray-500 p-5 hover:text-white hover:bg-gray-900"
            >
              {" "}
              topwear
            </NavLink>
            
            <NavLink
              to="#"
              onClick={toggleMobileDraw}
              className="block text-gray-800 text-center uppercase   p-5 hover:text-white hover:bg-gray-900"
            >
              {" "}
              bottomwear
            </NavLink>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavBar;
