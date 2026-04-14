'use client';

import { FaGithub, FaGamepad, FaEnvelope, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Recalled9',
      icon: <FaGithub className="w-5 h-5" />
    },
    {
      name: 'Itch.io',
      url: 'https://itch.io/profile/reclone-studio',
      icon: <FaGamepad className="w-5 h-5" />
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/shaan-mansoori-1b6b0132a/',
      icon: <FaLinkedin className="w-5 h-5" />
    },
    {
      name: 'Email',
      url: 'https://mail.google.com/mail/?view=cm&fs=1&to=shaanmansoori239@gmail.com',
      icon: <FaEnvelope className="w-5 h-5" />
    }
  ];

  return (
    <footer className="relative z-10 bg-[rgb(var(--bg))] text-[rgb(var(--fg))]/60 py-8 border-t border-[rgb(var(--fg))]/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-6 mb-4 md:mb-0">
            {socialLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[rgb(var(--fg))] transition-colors"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <p className="text-xs">
            {currentYear} Shaan Mansoori. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}