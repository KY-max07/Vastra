import { NavLink } from "react-router-dom";
import mensColImg from "../../assets/mens-coll.webp";
import womensColImg from "../../assets/womens-coll.webp";

const GenderCollection = () => {
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col md:flex-row gap-8 justify-around">
        <div className="relative flex-1">
          <img
            src={mensColImg}
            alt="mensCollection"
            className="w-full h-[400px] md:h-[700px] object-cover rounded-sm"
          />
          <div className="absolute bottom-6 left-4 md:left-10 text-white bg-black/30 py-1 px-7 rounded-xl backdrop-blur-sm flex flex-col items-center">
            <h2 className="font-primary text-md">Men's Collection</h2>
            <NavLink
              to="/collections/all?gender=Men"
              className="bg-white text-gray-700 hover:bg-gray-200 font-bold text-xs mt-1 mb-1 font-secondary px-4 py-2 rounded-sm tracking-widest"
            >
              Shop Now
            </NavLink>
          </div>
        </div>
        <div className="relative flex-1">
          <img
            src={womensColImg}
            alt="mensCollection"
            className="w-full h-[400px] md:h-[700px] object-cover rounded-sm"
          />
          <div className="absolute bottom-6 left-4 md:left-10 text-white bg-black/30 py-1 px-3  rounded-xl backdrop-blur-sm flex flex-col items-center">
            <h2 className="font-primary text-md">Women's Collection</h2>
            <NavLink
              to="/collections/all?gender=Women"
              className="bg-white text-gray-700 hover:bg-gray-200 font-bold text-xs mt-1 mb-1 font-secondary px-4 py-2 rounded-sm tracking-widest"
            >
              Shop Now
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenderCollection;
