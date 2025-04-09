import { RiDeleteBin3Line } from "react-icons/ri";

const CardItems = () => {
  const cartProducts = [
    {
      productId: 1,
      name: "T-Shirt from Roadster",
      size: "M",
      color: "Red",
      Quantity: 2,
      price: 15,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 20,
      name: "Shirt - Highlander",
      size: "S",
      color: "Yellow",
      Quantity: 1,
      price: 20,
      image: "https://picsum.photos/200?random=10",
    },
    {
        productId: 21,
        name: "Shirt - Highlander",
        size: "S",
        color: "Yellow",
        Quantity: 1,
        price: 20,
        image: "https://picsum.photos/200?random=13",
      },{
        productId: 202,
        name: "Shirt - Highlander",
        size: "S",
        color: "Yellow",
        Quantity: 1,
        price: 20,
        image: "https://picsum.photos/200?random=14",
      },{
        productId: 203,
        name: "Shirt - Highlander",
        size: "S",
        color: "Yellow",
        Quantity: 1,
        price: 20,
        image: "https://picsum.photos/200?random=18",
      },{
        productId: 204,
        name: "Shirt - Highlander",
        size: "S",
        color: "Yellow",
        Quantity: 1,
        price: 20,
        image: "https://picsum.photos/200?random=17",
      },{
        productId: 205,
        name: "Shirt - Highlander",
        size: "S",
        color: "Yellow",
        Quantity: 1,
        price: 20,
        image: "https://picsum.photos/200?random=16",
      },{
        productId: 206,
        name: "Shirt - Highlander",
        size: "S",
        color: "Yellow",
        Quantity: 1,
        price: 20000,
        image: "https://picsum.photos/200?random=100",
      },
  ];
  return (
    <div>
      {cartProducts.map((product, index) => (
        <div
          key={index}
          className="flex items-start justify-between py-4 border-b border-gray-500"
        >
          <div className="flex items-center font-primary">
            <img
              src={product.image}
              alt={product.name}
              className="h-24 w-20 object-cover mr-4 rounded"
            />
            <div className="">
              <h3 className=" text-black font-bold ">{product.name}</h3>
              <p className="text-sm text-gray-600 font-bold">
                size: {product.size} | color: {product.color}
              </p>

              <div className="flex items-center space-x-2 mt-2">
                <button className="border rounded h-7 w-7 px-2 pr-5 text-xl font-medium hover:bg-gray-700 hover:text-gray-200">
                  +
                </button>
                <span className="mx-4 pr-2">{product.Quantity}</span>
                <button className="border rounded h-7 w-7 px-2  text-xl font-medium  hover:bg-gray-700 hover:text-gray-200">
                  -
                </button>
              </div>
            </div>
          </div>
          <div className="mx-4 flex flex-col items-end  ">
            <p className="text-gray-600 font-bold mb-6 mt-2">${product.price.toLocaleString()}</p>
            <button>
                <RiDeleteBin3Line className="h-6 w-6 text-rabbit-red mt-2"/>
            </button>
          </div>
        </div>
        
      ))}
    </div>
  );
};

export default CardItems;
