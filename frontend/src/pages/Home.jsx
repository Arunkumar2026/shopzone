import { useEffect, useState } from "react"
import { getProducts } from "../services/productService"

import ProductCard from "../components/ProductCard";
import { FaPassport } from "react-icons/fa";


const Home = ({ search, category, sortOptions }) => {

  const [products, setProducts] = useState([]);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase());

    const matchesCategory = category === "all" ? true : product.category === category;

  return matchesSearch && matchesCategory;
  }
    // product.title.toLowerCase().includes(
    //   search.toLowerCase()
    // )
  );

  useEffect(() => {
    fetchProducts();
  }, []);

  const sortedProducts = [...filteredProducts];

  if (sortOptions === "low-high") {
    sortedProducts.sort(
      (a,b) => a.price - b.price 
    );
  }

  if (sortOptions === "high-low") {
    sortedProducts.sort(
      (a,b) => b.price - a.price 
    );
  }

  if (sortOptions === "a-z"){
    sortedProducts.sort(
      (a,b) => a.title.localeCompare(b.title)
    );
  }

  if (sortOptions === "z-a") {
    sortedProducts.sort(
      (a,b) => b.title.localeCompare(a.title)
    )
  }

  const fetchProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };


  return (
    <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {sortedProducts.map((product) => (
        <ProductCard key={product.id} product={product}/>
      ))}
    </div>
  )
}

export default Home