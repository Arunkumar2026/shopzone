import { useEffect, useState } from "react"
import { getProducts } from "../services/productService"

import ProductCard from "../components/ProductCard";


const Home = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };


  return (
    <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product}/>
        // <div key={product.id} className="border p-4 rounded-lg shadow">
        //   <img src={product.image} alt={product.title} className="h-40 mx-auto object-contain"/>
        //   <h2 className="font-bold mt-3">{product.title}</h2>
        //   <p className="text-green-600 font-semibold mt-2">{product.price}</p>
        // </div>
      ))}
    </div>
  )
}

export default Home