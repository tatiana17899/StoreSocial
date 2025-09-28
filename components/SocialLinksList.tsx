
import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import SocialLink from './SocialLink';

const SocialLinksList: React.FC = () => {
    return (
        <div className="max-w-md mx-auto flex flex-col space-y-3">
            {SOCIAL_LINKS.map(link => (
                <SocialLink key={link.id} link={link} />
            ))}
        </div>
    );
};

export default SocialLinksList;
