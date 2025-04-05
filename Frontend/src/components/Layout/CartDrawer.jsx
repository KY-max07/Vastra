import { IoMdClose } from "react-icons/io";
import CardItems from "../Cart/CardItems";

const CardDrawer = ({drawerOpen, toggleCardDrawer}) => {

  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-2/3 md:w-[28rem] h-full bg-gray-100 shadow-lg transform transition-transform duration-300 flex flex-col z-50 border-l border-gray-200 ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
        <div className="flex justify-end p-4">
            <button onClick={toggleCardDrawer}>
                <IoMdClose className="h-6 w-6 text-gray-500 hover:text-gray-950"/>
            </button>
        </div>

        <div className="flex-grow p-4 overflow-y-auto"> 
          <h2 className="text-2xl  font-semibold font-secondary mb-4">Your cart</h2>
            
            {/* cart items */}
            <CardItems/>
            <h2 className="font-bold font-primary text-gray-500 text-center pt-1.5">No more items!</h2>
        </div>
        <div className="sticky bottom-0 container mx-auto p-3 bg-gray-300 rounded-lg">
            <button className="font-secondary w-full  rounded-lg font-semibold text-2xl mb-2 bg-black hover:bg-gray-800 text-white transition">Checkout</button>
            <p className="text-xs font-primary text-center text-gray-600">Shipping, taxes, and discount codes calculated at checkout</p>
        </div>
    </div>
  );
};

export default CardDrawer;
