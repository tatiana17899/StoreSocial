
import React from 'react';
import { View } from '../types';

interface HeaderProps {
  activeView: View;
  onViewChange: (view: View) => void;
  onLogoClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ activeView, onViewChange, onLogoClick }) => {
  const views: View[] = [View.Tienda, View.RedesSociales];

  return (
    <header className="flex flex-col items-center">
      <div 
        className="w-28 h-28 md:w-36 md:h-36 bg-brand-dark rounded-full flex items-center justify-center cursor-pointer group transition-transform duration-300 hover:scale-105"
        onClick={onLogoClick}
        aria-label="Open stores modal"
        role="button"
      >
        <span className="font-mono text-white text-lg md:text-xl transform -rotate-12 group-hover:rotate-0 transition-transform duration-300">{`<TATCODE._/>`}</span>
      </div>

      <div className="mt-8 p-1.5 bg-white border border-brand-gray rounded-full flex items-center space-x-2">
        {views.map((view) => (
          <button
            key={view}
            onClick={() => onViewChange(view)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-dark ${
              activeView === view
                ? 'bg-brand-dark text-white'
                : 'bg-white text-brand-text hover:bg-gray-100'
            }`}
          >
            {view}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;
