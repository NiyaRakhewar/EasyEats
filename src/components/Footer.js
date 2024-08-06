// Footer.js
import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; 2024 Foody. All rights reserved.</p>
        <div className="mt-2">
          <a href="/about" className="text-gray-400 hover:text-white mx-2">About</a>
          <a href="/contact" className="text-gray-400 hover:text-white mx-2">Contact</a>
          <a href="/privacy" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};


