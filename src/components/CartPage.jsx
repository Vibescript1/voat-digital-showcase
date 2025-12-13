import React from 'react';

const CartPage = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="cart-sidebar-overlay" onClick={onClose}>
            <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
                <div className="cart-header">
                    <h2>Shopping Cart</h2>
                    <button onClick={onClose} className="cart-close-btn">×</button>
                </div>
                <div className="cart-content">
                    <p>Your cart is empty</p>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
