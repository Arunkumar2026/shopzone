import { Link } from "react-router-dom"

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg shadow p-4 hover:shadow-lg transition">
        <img src={product.image} alt={product.title} className="h-40 mx-auto object-contain"/>
        <h2 className="font-semibold mt-4 line-clamp">{product.title}</h2>
        <p className="text-green-600 font-bold mt-2">₹{product.price}</p>

        <Link to={`/product/${product.id}`}>
            <button className="bg-black text-white px-4 py-2 rounded mt-4 w-full">
                View Details
            </button>
        </Link>
    </div>
  )
}

export default ProductCard