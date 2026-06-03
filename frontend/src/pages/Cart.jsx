import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {

  const {cartItems, removeFromCart, increaseQuantity, decreaseQuantity,} = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity, 0
  );

  if (cartItems.length === 0) {
    return (
      <h1 className="text-2xl text-center mt-10">Cart is Empty</h1>
    )
  }

  return (
    <div className="max-w-6xl mx-auto p-5">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid gap-6">
        {cartItems.map((item) => (
          <div key={item.id} className="flex flex-col md:flex-row items-center gap-6 border p-4 rounded-lg shadow">
            <img 
              src={item.image} alt={item.title} className="h-32 w-32 object-contain"
            />

            <div className="flex-1 text-center md:text-left">
              <h2 className="font-bold">{item.title}</h2>

              <p className="text-green-600 font-bold mt-2">₹{item.price}</p>

              {/* <p className="mt-1">Quantity: {item.quantity}</p> */}

              <div className="flex items-center gap-4 mt-3 justify-center md:justify-start">
                <button onClick={() => decreaseQuantity(item.id)} className="bg-gray-300 px-3 py-1 rounded">-</button>
                <span className="font-bold">{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)} className="bg-gray-300 px-3 py-1 rounded">+</button>
              </div>
            </div>

            <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white px-4 py-2 rounded">Remove</button>
          </div>
        ))}
      </div>

      <div className="mt-10 text-right">
        <h2 className="text-2xl font-bold">Total: ₹{totalPrice.toFixed(2)}</h2>
      </div>
    </div>
  )
}

export default Cart