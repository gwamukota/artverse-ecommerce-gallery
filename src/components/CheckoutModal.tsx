import React, { useState } from 'react';
import { PaymentMethod, PaymentDetails } from '../types';
import { X, CreditCard, Phone, Mail, Building2 } from 'lucide-react';

interface CheckoutModalProps {
  total: number;
  onClose: () => void;
  onCheckout: (paymentDetails: PaymentDetails) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  total,
  onClose,
  onCheckout,
}) => {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | null>(null);
  const [paymentDetails, setPaymentDetails] = useState<Partial<PaymentDetails>>({});

  const paymentMethods = [
    { id: 'mpesa' as PaymentMethod, label: 'M-Pesa', icon: Phone },
    { id: 'paypal' as PaymentMethod, label: 'PayPal', icon: CreditCard },
    { id: 'bank' as PaymentMethod, label: 'Bank Transfer', icon: Building2 },
    { id: 'payoneer' as PaymentMethod, label: 'Payoneer', icon: CreditCard },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedMethod) {
      onCheckout({ method: selectedMethod, ...paymentDetails });
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Checkout</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X size={20} />
          </button>
        </div>

        <div className="mb-6">
          <h3 className="font-medium mb-3">Select Payment Method</h3>
          <div className="grid grid-cols-2 gap-3">
            {paymentMethods.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setSelectedMethod(id)}
                className={`p-4 border rounded-lg flex flex-col items-center gap-2 transition-colors ${
                  selectedMethod === id
                    ? 'border-black bg-black text-white'
                    : 'hover:border-gray-400'
                }`}
              >
                <Icon size={24} />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>

        {selectedMethod && (
          <form onSubmit={handleSubmit} className="space-y-4">
            {selectedMethod === 'mpesa' && (
              <div>
                <label className="block text-sm font-medium mb-1">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Enter M-Pesa number"
                  className="w-full p-2 border rounded-lg"
                  onChange={e => setPaymentDetails({ ...paymentDetails, phone: e.target.value })}
                  required
                />
              </div>
            )}

            {(selectedMethod === 'paypal' || selectedMethod === 'payoneer') && (
              <div>
                <label className="block text-sm font-medium mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="w-full p-2 border rounded-lg"
                  onChange={e => setPaymentDetails({ ...paymentDetails, email: e.target.value })}
                  required
                />
              </div>
            )}

            {selectedMethod === 'bank' && (
              <div>
                <label className="block text-sm font-medium mb-1">Account Number</label>
                <input
                  type="text"
                  placeholder="Enter bank account number"
                  className="w-full p-2 border rounded-lg"
                  onChange={e => setPaymentDetails({ ...paymentDetails, accountNumber: e.target.value })}
                  required
                />
              </div>
            )}

            <div className="border-t pt-4 mt-4">
              <div className="flex justify-between mb-4">
                <span className="font-medium">Total Amount:</span>
                <span className="font-bold">${total.toFixed(2)}</span>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Pay Now
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};