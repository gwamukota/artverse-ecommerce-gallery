import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { CheckoutModal } from './CheckoutModal';
import { PaymentDetails } from '../types';

export const Cart: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const { state, dispatch } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  const handleCheckout = async (paymentDetails: PaymentDetails) => {
    try {
      // Here you would typically integrate with a payment API
      console.log('Processing payment:', {
        items: state.items,
        total: state.total,
        paymentDetails,
      });

      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Clear cart after successful payment
      dispatch({ type: 'CLEAR_CART' });
      setShowCheckout(false);
      onClose();

      // Show success message
      alert('Payment successful! Thank you for your purchase.');
    } catch (error) {
      alert('Payment failed. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50">
        <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-lg">
          <div className="p-4 flex justify-between items-center border-b">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <ShoppingBag /> Shopping Cart
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X />
            </button>
          </div>
          
          <div className="p-4 flex flex-col gap-4 h-[calc(100vh-200px)] overflow-auto">
            {state.items.length === 0 ? (
              <p className="text-center text-gray-500">Your cart is empty</p>
            ) : (
              state.items.map(item => (
                <div
                  key={item.id}
                  className="flex gap-4 border-b pb-4"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-gray-600 text-sm">${item.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() =>
                          dispatch({
                            type: 'UPDATE_QUANTITY',
                            payload: { id: item.id, quantity: Math.max(0, item.quantity - 1) },
                          })
                        }
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Minus size={16} />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          dispatch({
                            type: 'UPDATE_QUANTITY',
                            payload: { id: item.id, quantity: item.quantity + 1 },
                          })
                        }
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Plus size={16} />
                      </button>
                      <button
                        onClick={() =>
                          dispatch({ type: 'REMOVE_ITEM', payload: item.id })
                        }
                        className="ml-auto text-red-500 hover:text-red-600"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t">
            <div className="flex justify-between mb-4">
              <span className="font-semibold">Total:</span>
              <span className="font-bold">${state.total.toFixed(2)}</span>
            </div>
            <button
              onClick={() => setShowCheckout(true)}
              disabled={state.items.length === 0}
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>

      {showCheckout && (
        <CheckoutModal
          total={state.total}
          onClose={() => setShowCheckout(false)}
          onCheckout={handleCheckout}
        />
      )}
    </>
  );
};