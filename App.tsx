
import React, { useState } from 'react';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import SocialLinksList from './components/SocialLinksList';
import StoreModal from './components/StoreModal';
import { View } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<View>(View.Tienda);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen font-sans text-brand-text antialiased">
      <main className="container mx-auto max-w-4xl p-4 md:p-8">
        <Header 
          activeView={view} 
          onViewChange={setView} 
          onLogoClick={() => setIsModalOpen(true)}
        />

        <div className="mt-8">
          {view === View.Tienda ? <ProductGrid onProductClick={() => setIsModalOpen(true)} /> : <SocialLinksList />}
        </div>
      </main>
      
      <StoreModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <footer className="text-center p-8 text-brand-text-light text-sm">
        <p>&copy; {new Date().getFullYear()} tatcode. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
