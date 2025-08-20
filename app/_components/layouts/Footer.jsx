import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-whitey font-body text-heading py-4">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} अध्यात्म परिवार | 
          <a href="mailto:info@adhyatmparivar.com" className="ml-1 hover:text-secondary-color transition-colors">
            info@adhyatmparivar.com
          </a> | 
          <span className="ml-1">अध्यात्म परिवार के बारे में अधिक जानकारी हेतु - </span>
          <a href="tel:+918448444050" className="hover:text-secondary-color transition-colors">
            <span className='font-sans'>M.844 844 40 50</span>
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;