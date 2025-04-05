import { HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import CardDrawer from "../Layout/CartDrawer";
import { useState } from "react";

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
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
          <button className="relative hover:text-gray-700" onClick={toggleCartDrawer}>
            <HiOutlineShoppingBag className="h-5.5 w-6  hover:text-gray-700" />
            <span className="absolute -top-1 bg-rabbit-red text-white text-xs rounded-full px-1.5 ">
              0
            </span>
          </button>
          {/* search */}
          <div className="overflow-hidden">
            <SearchBar />
          </div>

          <button className="md:hidden">
            <HiBars3CenterLeft className="h-8 w-8  hover:text-gray-700" />
          </button>
        </div>
        <CardDrawer drawerOpen={drawerOpen} toggleCardDrawer={toggleCartDrawer}/>
      </nav>
    </>
  );
};

export default NavBar;
