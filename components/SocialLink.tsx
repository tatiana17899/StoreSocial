
import React from 'react';
import { SocialLink as SocialLinkType } from '../types';

interface SocialLinkProps {
    link: SocialLinkType;
}

const SocialLink: React.FC<SocialLinkProps> = ({ link }) => {
    return (
        <a 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-4 p-4 rounded-lg transition-colors duration-200 hover:bg-gray-200 group"
        >
            <link.icon className="w-6 h-6 text-brand-text group-hover:text-brand-dark" />
            <span className="font-medium text-brand-text group-hover:text-brand-dark">{link.text}</span>
        </a>
    );
};

export default SocialLink;
