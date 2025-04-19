import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const socials = [
    { icon: <FaGithub />, path: 'https://github.com' },
    { icon: <FaLinkedin />, path: 'https://linkedin.com' },
    { icon: <FaTwitter />, path: 'https://twitter.com' },
    { icon: <FaFacebook />, path: 'https://facebook.com' }
];

const Social = ({ containerStyles, iconStyles }) => {
  return ( 
    <div className={containerStyles}>
      {socials.map((Item, index) => (
        <Link key={index} href={Item.path} className={iconStyles}>
            {Item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
