import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

import { CartContext } from "../context/CartContext";

import { getSingleProduct } from "../services/productService";

const ProductDetails = () => {

  const { addToCart } = useContext(CartContext);
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    const data = await getSingleProduct(id);
    setProduct(data);
  };

  if(!product) {
    return (
      <h1 className="text-center mt-10 text-2xl">Loading...</h1>
    )
  };


  return (
    <div className="max-w-6xl p-6 mx-auto">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="border rounded-lg shadow-md p-6">
          <img src={product.image} alt={product.title} className="h-96 mx-auto object-contain"/>
        </div>

        <div>
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-green-600 text-2xl font-bold mt-4">₹{product.price}</p>
          <p className="mt-6 text-gray-600 leading-7">{product.description}</p>
          <p className="mt-4">
            <span className="font-bold">Category:</span>{" "}{product.category}
          </p>
          <button onClick={() => addToCart(product)} className="bg-black text-white px-6 py-3 rounded mt-8 hover:bg-gray-800">Add To Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails