import { CgProductHunt } from "react-icons/cg";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const NewArrivals = () => {
  const newArrival = [
    {
      _id: "11",
      name: "Highlander",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=1",
          altText: "highlander",
        },
      ],
    },
    {
      _id: "12",
      name: "Highlander",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=12",
          altText: "highlander",
        },
      ],
    },
    {
      _id: "13",
      name: "Highlander",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=13",
          altText: "highlander",
        },
      ],
    },
    {
      _id: "14",
      name: "Highlander",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=145",
          altText: "highlander",
        },
      ],
    },
    {
      _id: "15",
      name: "Highlander",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=1",
          altText: "highlander",
        },
      ],
    },
    {
      _id: "16",
      name: "Highlander",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=167",
          altText: "highlander",
        },
      ],
    },
    {
      _id: "17",
      name: "Highlander",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=17",
          altText: "highlander",
        },
      ],
    },
    {
      _id: "18",
      name: "Highlander",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=16",
          altText: "highlander",
        },
      ],
    },
    {
      _id: "19",
      name: "Highlander",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=18",
          altText: "highlander",
        },
      ],
    },
    {
      _id: "10",
      name: "Highlander",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=19",
          altText: "highlander",
        },
      ],
    },
    {
      _id: "112",
      name: "Highlander",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=10",
          altText: "highlander",
        },
      ],
    },
    {
      _id: "113",
      name: "Highlander",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=12345",
          altText: "highlander",
        },
      ],
    },
  ];
  return (
    <section>
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold font-secondary tracking-wide [word-spacing:0.5rem]">Explore  New-Arrivals</h2>
        <p className="font-primary tracking-wide mt-2 font-bold text-gray-600">Discover the latest styles off the runway, freshly added to keep your wardrobe on the cutting edge of fashion</p>


        {/* Scroll buttons */}
        <div className="absolute bottom-[-40px] right-5 flex space-x-6">
            <button className="p-2 rounded border border-black hover:bg-gray-100">
                <FiChevronLeft/>
            </button>
            <button className="p-2 rounded border border-black hover:bg-gray-100">
                <FiChevronRight/>
            </button>
        </div>
      </div>
      {/* Scrollable content */}
      <div className="container mx-auto overflow-x-auto flex justify-around space-x-10 mt-15 relative ">
        {newArrival.map((product)=>(
                <div key={product._id} className=" ml-2 min-w-[90%] sm:min-w-[50%] lg:min-w-[30%] relative ">
                    <img src={product.images[0]?.url}
                     alt={product.images[0]?.altText || product.name} className="rounded-md rounded-b-2xl"/>
                     <div className="absolute bg-black/30 border-2 border-t-white/60 border-dashed border-l-0 border-r-0 border-b-0 bottom-0 left-0 w-full backdrop-blur-2xl h-1/6 rounded-b-md">
                        <div className="pl-4 pt-3">
                        <h2 className="font-secondary text-white text-2xl">{product.name}</h2>
                        <p className="font-primary text-white text-md ">$ {product.price}</p>
                        </div>
                     </div>
                </div>
                
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
