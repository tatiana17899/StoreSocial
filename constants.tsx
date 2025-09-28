
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

const TikTokIcon: React.FC<{ className?: string }> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.86-.95-6.69-2.81-1.77-1.8-2.6-4.28-2.5-6.75s.76-4.67 2.48-6.41c1.57-1.57 3.64-2.42 5.73-2.41 1.29.01 2.58.01 3.86.02v3.96c-1.31-.01-2.61-.01-3.92.02-.33.2-.64.42-.93.66-.5.43-1.02.82-1.52 1.23-.42.33-.87.63-1.34.89-.49.28-.93.65-1.31 1.07-1.02 1.12-1.55 2.63-1.55 4.23s.59 3.19 1.73 4.33c1.13 1.13 2.65 1.74 4.23 1.71 1.73-.04 3.32-.73 4.45-1.95.4-.42.72-.89.96-1.41.24-.52.38-1.08.44-1.65.01-1.55.02-3.09.01-4.64h-4.02v-3.96z"/>
  </svg>
);

const PinterestIcon: React.FC<{ className?: string }> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 .992.371 1.938.833 2.455.081.092.094.184.069.288-.075.302-.246.992-.277 1.112-.033.128-.124.167-.258.105-1.181-.554-1.916-2.528-1.916-3.847 0-2.021 1.458-3.898 4.131-3.898 2.219 0 4.156 1.571 4.156 4.492 0 2.641-1.428 4.792-3.464 4.792-1.229 0-2.316-.94-2.096-2.054.24-.978.696-2.232.696-2.232s.161-.68.161-1.488c0-.702-.459-1.295-1.008-1.295-.812 0-1.386.864-1.386 1.953 0 .733.271 1.52.271 1.52l-1.011 4.243c-.453 1.886-1.786 4.358-2.921 5.492a11.943 11.943 0 003.55 1.189c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
  </svg>
);

const FigmaIcon: React.FC<{ className?: string }> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M15 0c-4.418 0-8 3.582-8 8v8h8V8h-4v4h4v4h-4v4h4v-4h4V8c0-4.418-3.582-8-8-8zm-4 4h4v4h-4V4zm-4 4c0-2.206 1.794-4 4-4v4H7zm0 4h4v4H7v-4zm4 4v4c-2.206 0-4-1.794-4-4h4z"/>
  </svg>
);

const ThreadsIcon: React.FC<{ className?: string }> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.012 1.62c-5.28 0-9.528 4.224-9.528 9.444s4.248 9.444 9.528 9.444c5.28 0 9.528-4.224 9.528-9.444S17.292 1.62 12.012 1.62zm-.108 14.82c-1.32 0-2.388-1.056-2.388-2.364 0-1.308 1.068-2.364 2.388-2.364s2.388 1.056 2.388 2.364c0 1.308-1.068 2.364-2.388 2.364zm-5.208-4.728c-1.02 0-1.848-.828-1.848-1.848s.828-1.848 1.848-1.848c1.02 0 1.848.828 1.848 1.848s-.828 1.848-1.848 1.848zm10.416 0c-1.02 0-1.848-.828-1.848-1.848s.828-1.848 1.848-1.848c1.02 0 1.848.828 1.848 1.848s-.828 1.848-1.848 1.848z"/>
  </svg>
);

const RedditIcon: React.FC<{ className?: string }> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.813 14.553c-.394.394-1.032.394-1.426 0-.394-.394-.394-1.032 0-1.426.394-.394 1.032-.394 1.426 0 .394.394.394 1.032 0 1.426zm3.321 2.227c-1.487 0-2.822-1.111-3.176-2.583h6.353c-.354 1.472-1.689 2.583-3.177 2.583zm-1.66-3.667c.394-.394 1.032-.394 1.426 0 .394.394.394 1.032 0 1.426-.394.394-1.032.394-1.426 0-.394-.394-.394-1.032 0-1.426zm7.265-1.56c0 1.016-.821 1.837-1.837 1.837s-1.837-.821-1.837-1.837c0-1.016.821-1.837 1.837-1.837s1.837.821 1.837 1.837zm-8.88-5.553c0-1.016.821-1.837 1.837-1.837s1.837.821 1.837 1.837c0 1.016-.821 1.837-1.837 1.837s-1.837-.821-1.837-1.837zm4.44-1.837c1.016 0 1.837.821 1.837 1.837s-.821 1.837-1.837 1.837-1.837-.821-1.837-1.837.821-1.837 1.837-1.837z"/>
  </svg>
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
    imagePlaceholderColor: 'bg-gray-300',
    title: 'Dashboard HTML CSS JS Bootstrap 5 Template',
    originalPrice: 8,
    salePrice: 5,
  },
  {
    id: 2,
    imagePlaceholderColor: 'bg-gray-300',
    title: 'YouTube UI Template - Figma- Dark pink theme',
    originalPrice: 5,
    salePrice: 5,
  },
  {
    id: 3,
    imagePlaceholderColor: 'bg-gray-300',
    title: '2 Canva Presentation Template A4 - Special Editable and Professional',
    originalPrice: 5,
    salePrice: 5,
  },
  {
    id: 4,
    imagePlaceholderColor: 'bg-gray-300',
    title: 'Task Tracker Digital To Do List Task Planner Google Sheets Template',
    originalPrice: 5,
    salePrice: 5,
  },
  {
    id: 5,
    imagePlaceholderColor: 'bg-gray-300',
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
