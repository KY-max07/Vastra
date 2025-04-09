import { FiPhoneCall } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";
import { PiCopyrightThin } from "react-icons/pi";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t m-8 mb-4 border-gray-300 items-center justify-around">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4  gap-12 px-4  lg:px-0 md:place-items-center md:ml-12 md:mr-12 ">
        <div >
          <h3 className="text-2xl font-secondary text-gray-900 font-bold mt-4 mb-2">
            News Letter{" "}
          </h3>
          <p className="font-primary font-bold text-gray-700 mb-5">
            Be the first to hear about new products, exclusive events, and
            online offers.
          </p>
          <p className="font-primary font-bold text-gray-700 mb-4">
            sign up and get6 10% off on your first order.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email...."
              required
              className="border  border-gray-400 bg-gray-100 p-3 w-full text-sm text-primary rounded-l-md focus:outline-none transition-all placeholder:font-primary "
            />
            <button
              type="submit"
              className="bg-black hover:bg-gray-700 text-gray-50 font-secondary p-3  transition-colors rounded-r-md"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div >
          <h3 className="text-2xl font-secondary text-gray-900 font-bold mt-4 mb-2">
            Shop
          </h3>
          <div className="font-primary font-bold flex flex-col">
            <NavLink
              to="#"
              className="text-gray-700 transition-colors  hover:text-gray-950 mb-1"
            >
              {" "}
              Men's Topwear
            </NavLink>
            <NavLink
              to="#"
              className="text-gray-700 transition-colors  hover:text-gray-950 mb-1"
            >
              {" "}
              Women's Topwear
            </NavLink>
            <NavLink
              to="#"
              className="text-gray-700 transition-colors  hover:text-gray-950 mb-1"
            >
              {" "}
              Men's Bottomwear
            </NavLink>
            <NavLink
              to="#"
              className="text-gray-700 transition-colors  hover:text-gray-950 "
            >
              {" "}
              Women's Bottomwear
            </NavLink>
          </div>
        </div>
        <div >
          <h3 className="text-2xl font-secondary text-gray-900 font-bold mt-4 mb-2">
            Support
          </h3>
          <div className="font-primary font-bold flex flex-col">
            <NavLink
              to="#"
              className="text-gray-700 transition-colors  hover:text-gray-950 mb-1"
            >
              Contact Us
            </NavLink>
            <NavLink
              to="#"
              className="text-gray-700 transition-colors  hover:text-gray-950 mb-1"
            >
              About Us
            </NavLink>
            <NavLink
              to="#"
              className="text-gray-700 transition-colors  hover:text-gray-950 mb-1"
            >
              Features
            </NavLink>
            <NavLink
              to="#"
              className="text-gray-700 transition-colors  hover:text-gray-950 "
            >
             FAQs 
            </NavLink>
          </div>
        </div>
        <div >
        <h3 className="text-2xl font-secondary text-gray-900 font-bold mt-4 mb-3">Follow Us</h3>
          <div className="flex items-center space-x-6 text-gray-700 transition-colors  hover:text-gray-950">
            <a href="#" className="hover:text-gray-800">
              <TbBrandMeta className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-gray-800">
              <IoLogoInstagram className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-gray-800">
              <RiTwitterXLine className="h-4 w-4" />
            </a>
          </div>
          <div>
          <h3 className="text-2xl font-secondary text-gray-900 font-bold mt-5 mb-3">Call Us</h3>
                <p className="font-secondary font-bold text-gray-700 transition-colors  hover:text-gray-950">
                    <FiPhoneCall className="inline-block mr-2"/> 0123-456-789
                </p>
          </div>
        </div>
      </div>
      <div></div>
      <div className="border-t mt-6 w-full border-gray-300 font-secondary font-bold text-center">
        <p className="mt-3  tracking-wide text-gray-700">
            <PiCopyrightThin className="inline-block"/>2025, Vastra. All Rights Reversed
        </p>
      </div>
    </footer>
  );
};

export default Footer;
