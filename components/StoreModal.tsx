
import React, { Fragment } from 'react';
import { STORE_LINKS } from '../constants';

interface StoreModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CloseIcon: React.FC<{ className?: string }> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const StoreModal: React.FC<StoreModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 transition-opacity duration-300"
      aria-labelledby="store-modal-title"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6 relative transition-transform transform duration-300 scale-95 opacity-0 animate-fade-in-scale"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'fade-in-scale 0.3s forwards' }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors"
          aria-label="Close modal"
        >
          <CloseIcon className="w-6 h-6" />
        </button>

        <div className="flex flex-col space-y-4 pt-8">
            {STORE_LINKS.map((link) => (
                <div key={link.id} className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gray-200 rounded-full"></div>
                    <div className="flex-grow">
                        <p className="font-semibold text-brand-text">{link.platform}</p>
                        {link.handle && <p className="text-sm text-brand-text-light">{link.handle}</p>}
                    </div>
                    <a 
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 bg-brand-dark text-white rounded-lg text-sm font-medium transition-transform duration-200 hover:scale-105"
                    >
                        {link.buttonText}
                    </a>
                </div>
            ))}
        </div>
      </div>
      <style>{`
        @keyframes fade-in-scale {
            to {
                transform: scale(1);
                opacity: 1;
            }
        }
        .animate-fade-in-scale {
            animation: fade-in-scale 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default StoreModal;
