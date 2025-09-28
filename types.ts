
export enum View {
  Tienda = 'Tienda',
  RedesSociales = 'Redes Sociales',
}

export interface Product {
  id: number;
  imagePlaceholderColor: string;
  title: string;
  originalPrice: number;
  salePrice: number;
}

export interface SocialLink {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  text: string;
  url: string;
}

export interface StoreLink {
  id: string;
  platform: string;
  handle: string;
  buttonText: string;
  url: string;
}
