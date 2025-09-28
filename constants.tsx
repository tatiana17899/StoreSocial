
import React from 'react';
import { Product, SocialLink, StoreLink } from './types';

// Icons
const DollarIcon: React.FC<{ className?: string }> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const FacebookIcon: React.FC<{ className?: string }> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" />
  </svg>
);

const InstagramIcon: React.FC<{ className?: string }> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/>
  </svg>
);

const XIcon: React.FC<{ className?: string }> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.931ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
  </svg>
);

const TikTokIcon: React.FC<{ className?: string }> = ({ className }) => (
  <img
    src="https://i.postimg.cc/xdQDbf72/tik-tok-4.png"
    alt="TikTok Logo"
    className={className}
    width={24}
    height={24}
  />
);


const PinterestIcon: React.FC<{ className?: string }> = ({ className }) => (
  <img
    src="https://i.postimg.cc/Sx0HwQmP/pinterest.png"
    alt="Pinterest Logo"
    className={className}
    width={24}
    height={24}
  />
);


const FigmaIcon: React.FC<{ className?: string }> = ({ className }) => (
  <img
    src="https://i.postimg.cc/RFbDG4Ps/figma-6.png"
    alt="Figma Logo"
    className={className}
    width={24}
    height={24}
  />
);

const ThreadsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <img
    src="https://i.postimg.cc/0QFqjY1V/Threads-Logo.jpg"
    alt="Threads Logo"
    className={className}
    width={30}
    height={30}
  />
);

const RedditIcon: React.FC<{ className?: string }> = ({ className }) => (
  <img
    src="https://i.postimg.cc/nh2bBbtv/reddit-1.png"
    alt="Reddit Logo"
    className={className}
    width={24}
    height={24}
  />
);


const YoutubeIcon: React.FC<{ className?: string }> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
  </svg>
);

export const ICONS = {
    DollarIcon,
    FacebookIcon,
    InstagramIcon,
    XIcon,
    TikTokIcon,
    PinterestIcon,
    FigmaIcon,
    ThreadsIcon,
    RedditIcon,
    YoutubeIcon
};


// Data
export const PRODUCTS: Product[] = [
  {
    id: 1,
    imagePlaceholderColor: '/public/images/dashboard.gif',
    title: 'Dashboard HTML CSS JS Bootstrap 5 Template',
    originalPrice: 8,
    salePrice: 5,
  },
  {
    id: 2,
    imagePlaceholderColor: '/images/log.png',
    title: 'YouTube UI Template - Figma- Dark pink theme',
    originalPrice: 5,
    salePrice: 5,
  },
  {
    id: 3,
    imagePlaceholderColor: '/images/LOGO.png',
    title: '2 Canva Presentation Template A4 - Special Editable and Professional',
    originalPrice: 5,
    salePrice: 5,
  },
  {
    id: 4,
    imagePlaceholderColor: '/images/imagen2.png',
    title: 'Task Tracker Digital To Do List Task Planner Google Sheets Template',
    originalPrice: 5,
    salePrice: 5,
  },
  {
    id: 5,
    imagePlaceholderColor: '/images/asss.png',
    title: 'Notion Template for Personal Organization and Productivity',
    originalPrice: 8,
    salePrice: 5,
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
    { id: 'facebook', icon: FacebookIcon, text: 'Visitarme a Facebook', url: 'https://www.facebook.com/profile.php?id=61573094940968#' },
    { id: 'instagram', icon: InstagramIcon, text: 'Visitarme a Instagram', url: 'https://www.instagram.com/tatcode1700' },
    { id: 'x', icon: XIcon, text: 'Visitarme a X', url: 'https://x.com/tatcode17' },
    { id: 'tiktok', icon: TikTokIcon, text: 'Visitarme a TikTok', url: 'https://www.tiktok.com/@tatcode17' },
    { id: 'pinterest', icon: PinterestIcon, text: 'Visitarme a Pinterest', url: 'https://es.pinterest.com/tatcode1700/' },
    { id: 'figma', icon: FigmaIcon, text: 'Visitarme a Comunidad Figma', url: 'https://www.figma.com/@tatcode' },
    { id: 'threads', icon: ThreadsIcon, text: 'Visitarme a Threads', url: 'https://www.threads.com/@tatcode1700' },
    { id: 'reddit', icon: RedditIcon, text: 'Visitarme a Reddit', url: 'https://www.reddit.com/user/Aggravating_Visit23/' },
    { id: 'youtube', icon: YoutubeIcon, text: 'Visitarme a Youtube', url: 'https://www.youtube.com/@tatcode-o3f' },
];

export const STORE_LINKS: StoreLink[] = [
    { id: 'payhip', platform: 'Payhip', handle: '@tatcode', buttonText: 'Tienda', url: 'https://payhip.com/TatCode' },
    { id: 'kofi', platform: 'Ko-Fi', handle: '@tatcode', buttonText: 'Tienda', url: 'https://ko-fi.com/tatcode' },
    { id: 'gumroad', platform: 'Gumroad', handle: '@tatcode', buttonText: 'Tienda', url: 'https://tatcode.gumroad.com/' },
    { id: 'yape', platform: 'Si eres Perú a Yape', handle: '', buttonText: 'Mensaje', url: 'xd' },
];
