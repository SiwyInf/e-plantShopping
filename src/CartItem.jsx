import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity, addItem, clearCart } from "./CartSlice";

const CartItem = ({ onContinueShopping }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    const calculateTotalAmount = () => {
        return cartItems.reduce((total, item) => total + item.cost * item.quantity, 0).toFixed(2);
    };

    const handleIncrement = (item) => {
        dispatch(addItem(item)); // Używamy addItem zamiast updateQuantity, aby działało poprawnie
    };

    const handleDecrement = (item) => {
        if (item.quantity > 1) {
            dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
        } else {
            dispatch(removeItem(item.name));
        }
    };

    const handleRemove = (item) => {
        dispatch(removeItem(item.name));
    };

    const handleCheckoutShopping = () => {
        alert("Functionality to be added for future reference");
    };

    return (
        <div className="cart-container">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.name} className="cart-item">
                            <img src={item.image} alt={item.name} style={{ width: "50px", height: "50px" }} />
                            <div className="cart-details">
                                <h3>{item.name}</h3>
                                <p>Price: ${item.cost.toFixed(2)}</p>
                                <p>Subtotal: ${(item.cost * item.quantity).toFixed(2)}</p>
                                <div className="quantity-controls">
                                    <button onClick={() => handleDecrement(item)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => handleIncrement(item)}>+</button>
                                </div>
                                <button className="remove-btn" onClick={() => handleRemove(item)}>Remove</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            <h3>Total: ${calculateTotalAmount()}</h3>
            <button onClick={onContinueShopping}>Continue Shopping</button>
            <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
            <button onClick={handleCheckoutShopping}>Checkout</button>
        </div>
    );
};

export default CartItem;
