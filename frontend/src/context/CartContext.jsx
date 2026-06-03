import { createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem("cartItems");

        return savedCart
        ? JSON.parse(savedCart) 
        : [];
    });

    useEffect(() => {
        localStorage.setItem(
            "cartItems",
            JSON.stringify(cartItems)
        );
    }, [cartItems]);

    const addToCart = (product) => {
        if (
            !product ||
            !product.id ||
            !product.image ||
            !product.price 
        ) {
            return;
        }
        const existingItems = cartItems.find(
            (item) => item.id === product.id
            
        );

        if(existingItems) {
            const updatedCart = cartItems.map((item) => 
                item.id === product.id ? { ...item, quantity: item.quantity + 1} : item 
            );

            setCartItems(updatedCart);
            toast.success("Quantity Updated");
        } else {
            setCartItems([
                ...cartItems, 
                { ...product, quantity : 1},
            ]);
            toast.success("Product Added to Cart")
        }
    };

    const removeFromCart = (id) => {
        const updatedCart = cartItems.filter(
            (item) => item.id !== id 
        );

        setCartItems(updatedCart);
        toast.error("item Removed")
    };

    const increaseQuantity = (id) => {

        const updatedCart = cartItems.map((item) => 
            item.id === id
                ? {
                    ...item,
                    quantity: item.quantity + 1, 
                }
            : item
        );
        setCartItems(updatedCart);
        toast.success("Quantity Increased");
    };

    const decreaseQuantity = (id) => {
        const updatedCart = cartItems.map((item) =>
            item.id === id 
                ? {
                    ...item, quantity: item.quantity - 1, 
                }
            : item
        )
        .filter((item) => item.quantity > 0);

        setCartItems(updatedCart);
        toast.error("Quantity Decreased");
    };

    return (
        <CartContext.Provider
        value={{
            cartItems,
            addToCart,
            removeFromCart,
            increaseQuantity,
            decreaseQuantity,
        }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;