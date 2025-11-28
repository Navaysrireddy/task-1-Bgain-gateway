import React, { useState } from 'react';
import { ContentCard } from '../types';

interface EventModalProps {
  event: ContentCard;
  onClose: () => void;
}

const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePurchase = () => {
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setIsSuccess(true);
      setIsProcessing(false);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-navy/90 backdrop-blur-md" onClick={onClose}></div>

      <div className="bg-cream rounded-[2rem] shadow-2xl w-full max-w-lg overflow-hidden relative z-10 animate-scale-up">
        {!isSuccess ? (
          <>
            <div className="relative h-48">
              <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-navy/20"></div>
              <button 
                onClick={onClose} 
                className="absolute top-4 right-4 w-8 h-8 bg-black/40 text-white rounded-full flex items-center justify-center hover:bg-white hover:text-navy transition backdrop-blur-sm"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <div className="p-8">
              <div className="flex justify-between items-start mb-2">
                 <h2 className="text-2xl font-black text-navy">{event.title}</h2>
                 <span className="bg-brown text-white font-bold px-3 py-1 rounded-lg text-sm">${event.price}</span>
              </div>
              
              <div className="flex flex-col gap-3 mb-6 text-sm text-slate-600">
                 <div className="flex items-center gap-2">
                    <i className="fas fa-calendar-alt text-brown w-5"></i>
                    <span>{event.date}</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <i className="fas fa-map-marker-alt text-brown w-5"></i>
                    <span>{event.location}</span>
                 </div>
              </div>

              <p className="text-slate-600 mb-8 leading-relaxed text-sm">
                {event.description} Join us for an unforgettable experience with fellow sneaker enthusiasts.
              </p>

              <div className="bg-white p-4 rounded-xl border border-gray-200 mb-8">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold text-navy">General Admission</span>
                    <span className="font-bold text-brown">1 x ${event.price}</span>
                </div>
                <div className="flex justify-between items-center text-xs text-slate-400 border-t border-gray-100 pt-2 mt-2">
                    <span>Processing Fee</span>
                    <span>$0.00</span>
                </div>
                <div className="flex justify-between items-center font-black text-navy text-lg mt-3">
                    <span>Total</span>
                    <span>${event.price}</span>
                </div>
              </div>

              <button 
                onClick={handlePurchase}
                disabled={isProcessing}
                className="w-full bg-navy text-white font-bold py-4 rounded-xl hover:bg-brown transition shadow-lg flex justify-center items-center gap-2 disabled:opacity-70"
              >
                {isProcessing ? <><i className="fas fa-spinner fa-spin"></i> Processing...</> : 'Confirm & Pay'}
              </button>
            </div>
          </>
        ) : (
          <div className="p-10 text-center flex flex-col items-center justify-center h-full min-h-[400px]">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mb-6 animate-bounce-slow">
               <i className="fas fa-ticket-alt"></i>
            </div>
            <h3 className="text-2xl font-black text-navy mb-2">You're going!</h3>
            <p className="text-slate-500 mb-8">
              Tickets for <strong>{event.title}</strong> have been sent to your email.
            </p>
            <button onClick={onClose} className="bg-navy text-white px-8 py-3 rounded-lg font-bold hover:bg-brown transition">
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventModal;