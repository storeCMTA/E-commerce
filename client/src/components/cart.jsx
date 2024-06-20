import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
  const totalAmount = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((product) => (
            <div key={product._id} className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <img src={product.image} alt={product.name} className="w-16 h-16 object-cover mr-4" />
                <div>
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="text-gray-600">${product.price}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(product._id)}
                className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="text-right font-bold text-xl">
            Total: ${totalAmount.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
