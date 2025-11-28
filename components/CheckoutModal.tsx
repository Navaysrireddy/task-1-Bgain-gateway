import React, { useState } from 'react';
import { Product } from '../types';

interface CheckoutModalProps {
  product: Product;
  onClose: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ product, onClose }) => {
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setStep(3);
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-navy/90 backdrop-blur-md" onClick={onClose}></div>

      <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-2xl overflow-hidden animate-scale-up relative z-10 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-cream p-6 border-b border-gray-100 flex justify-between items-center shrink-0">
          <div>
            <h2 className="text-2xl font-black text-navy">Checkout</h2>
            <p className="text-slate-500 text-sm">{product.title}</p>
          </div>
          <button onClick={onClose} className="w-10 h-10 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center transition shadow-sm">
            <i className="fas fa-times text-slate-500"></i>
          </button>
        </div>

        <div className="p-8 overflow-y-auto custom-scrollbar">
          {/* Progress Steps */}
          <div className="flex items-center justify-between mb-10 px-4 relative">
             <div className="absolute left-0 top-1/2 w-full h-1 bg-gray-100 -z-10"></div>
             
             {/* Step 1 */}
             <div className={`flex flex-col items-center gap-2 bg-white px-2 ${step >= 1 ? 'text-brown' : 'text-gray-300'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-500 ${step >= 1 ? 'bg-brown text-white shadow-lg shadow-brown/30' : 'bg-gray-100'}`}>1</div>
                <span className="text-xs font-bold uppercase tracking-wider">Address</span>
             </div>

             {/* Step 2 */}
             <div className={`flex flex-col items-center gap-2 bg-white px-2 ${step >= 2 ? 'text-brown' : 'text-gray-300'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-500 ${step >= 2 ? 'bg-brown text-white shadow-lg shadow-brown/30' : 'bg-gray-100'}`}>2</div>
                <span className="text-xs font-bold uppercase tracking-wider">Payment</span>
             </div>

             {/* Step 3 */}
             <div className={`flex flex-col items-center gap-2 bg-white px-2 ${step >= 3 ? 'text-green-600' : 'text-gray-300'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-500 ${step >= 3 ? 'bg-green-600 text-white shadow-lg shadow-green-600/30' : 'bg-gray-100'}`}>3</div>
                <span className="text-xs font-bold uppercase tracking-wider">Done</span>
             </div>
          </div>

          <div className="min-h-[300px]">
            {step === 1 && (
              <div className="animate-fade-in space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-navy uppercase ml-1">First Name</label>
                    <input required type="text" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-brown focus:ring-2 focus:ring-brown/10 outline-none transition font-medium" placeholder="Jane" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-navy uppercase ml-1">Last Name</label>
                    <input required type="text" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-brown focus:ring-2 focus:ring-brown/10 outline-none transition font-medium" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-navy uppercase ml-1">Street Address</label>
                  <input required type="text" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-brown focus:ring-2 focus:ring-brown/10 outline-none transition font-medium" placeholder="123 Sneaker St, Apt 4B" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                   <div className="space-y-1">
                    <label className="text-xs font-bold text-navy uppercase ml-1">City</label>
                    <input required type="text" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-brown focus:ring-2 focus:ring-brown/10 outline-none transition font-medium" placeholder="New York" />
                  </div>
                   <div className="space-y-1">
                    <label className="text-xs font-bold text-navy uppercase ml-1">Postal Code</label>
                    <input required type="text" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-brown focus:ring-2 focus:ring-brown/10 outline-none transition font-medium" placeholder="10001" />
                  </div>
                </div>
                <div className="pt-4">
                    <button onClick={() => setStep(2)} className="w-full bg-navy text-white font-bold py-4 rounded-xl hover:bg-brown transition shadow-xl flex justify-center items-center gap-3">
                    Continue to Payment <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-fade-in space-y-8">
                {/* Order Summary Card */}
                <div className="bg-cream p-4 rounded-2xl flex items-center gap-4 border border-gold/20">
                    <div className="w-20 h-20 bg-white rounded-xl p-2 flex-shrink-0">
                        <img src={product.image} className="w-full h-full object-contain" alt={product.title} />
                    </div>
                    <div>
                        <h4 className="font-bold text-navy">{product.title}</h4>
                        <div className="text-xs text-slate-500">Size: US 10.5</div>
                        <div className="text-brown font-black text-lg">${product.price}</div>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="space-y-1">
                        <label className="text-xs font-bold text-navy uppercase ml-1">Card Number</label>
                        <div className="relative">
                            <i className="fas fa-credit-card absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                            <input required type="text" placeholder="0000 0000 0000 0000" className="w-full pl-12 p-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-brown focus:ring-2 focus:ring-brown/10 outline-none transition font-medium tracking-wider" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-navy uppercase ml-1">Expiry</label>
                            <input required type="text" placeholder="MM/YY" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-brown focus:ring-2 focus:ring-brown/10 outline-none transition font-medium text-center" />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-navy uppercase ml-1">CVC</label>
                            <input required type="text" placeholder="123" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-brown focus:ring-2 focus:ring-brown/10 outline-none transition font-medium text-center" />
                        </div>
                    </div>
                </div>

                <button onClick={handlePayment} disabled={isProcessing} className="w-full bg-brown text-white font-bold py-4 rounded-xl hover:bg-bronze transition shadow-xl flex justify-center items-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed mt-4">
                  {isProcessing ? <><i className="fas fa-spinner fa-spin"></i> Processing...</> : `Confirm Payment $${product.price}`}
                </button>
                <button onClick={() => setStep(1)} className="w-full text-slate-400 font-bold py-2 hover:text-navy transition text-sm">
                    Back to address
                </button>
              </div>
            )}

            {step === 3 && (
              <div className="text-center py-10 animate-fade-in flex flex-col items-center justify-center h-full">
                <div className="w-28 h-28 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6 text-5xl shadow-lg shadow-green-100 animate-bounce-slow">
                  <i className="fas fa-check"></i>
                </div>
                <h3 className="font-black text-3xl text-navy mb-2">Order Confirmed!</h3>
                <p className="text-slate-500 mb-8 max-w-xs mx-auto leading-relaxed">
                    Your new <strong>{product.title}</strong> are on their way. We've sent a receipt to your email.
                </p>
                <button onClick={onClose} className="bg-navy text-white px-10 py-4 rounded-xl font-bold hover:bg-brown transition w-full shadow-lg">
                  Continue Shopping
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;