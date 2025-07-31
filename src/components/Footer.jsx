import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[#101119] text-white py-8">
      <div className="container mx-auto px-5 md:px-20">
        {/* Follow Us Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h2 className="text-lg font-bold mb-4 md:mb-0">Follow Us</h2>
          <div className="flex flex-wrap gap-6 text-sm font-medium">
            <a href="https://x.com/leanwithkumar" target='_blank' className="hover:underline">twitter</a>
            <a href="https://www.linkedin.com/in/abhay-kumar-443b981b6/" target='_blank' className="hover:underline">linkedin</a>
            <a href="https://www.instagram.com/leanwithkumar/" target='_blank' className="hover:underline">instagram</a>
            <a href="https://github.com/leanwithkumar" target='_blank' className="hover:underline">github</a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-500 my-4"></div>

        {/* Bottom Links */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between text-sm">
          <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
            <Link to="/about" className="hover:underline">about</Link>
            <a href="/privacy" className="hover:underline">privacy</a>
            <a href="/terms" className="hover:underline">terms</a>
            <a href="/help" className="hover:underline">help</a>
          </div>
          <div className="text-gray-400">© billboardx100 2025</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
