import React, { useState } from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
  };
  return (
    <footer className="bg-white border-t border-gray-200 pt-10 pb-4 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
        {/* Logo and Brand */}
        <div className="md:col-span-1 flex flex-col items-start">
          <img src="/src/assets/logo.png" alt="Logo" className="h-14 mb-4" />
          <span className="font-bold text-xl text-[#53295a]">Digital Marketing</span>
          <span className="text-[#7c5dc7] text-sm mt-1">Your Partner in Growth</span>
          <span className="text-[#a259c6] text-sm">Innovative Solutions for Your Brand</span>
        </div>
        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-[#7c5dc7] mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><a href="/home1" className="text-[#53295a] hover:text-[#a259c6]">Home</a></li>
            <li><a href="/about" className="text-[#53295a] hover:text-[#a259c6]">About Us</a></li>
            <li><a href="/blog" className="text-[#53295a] hover:text-[#a259c6]">Blog</a></li>
            <li><a href="/contactus" className="text-[#53295a] hover:text-[#a259c6]">Contact Us</a></li>
            <li><a href="/services" className="text-[#53295a] hover:text-[#a259c6]">Services</a></li>
          </ul>
        </div>
        {/* Explore Services */}
        <div>
          <h4 className="font-semibold text-[#7c5dc7] mb-2">Explore Services</h4>
          <ul className="space-y-1">
            <li><a href="/services/seo" className="text-[#53295a] hover:text-[#a259c6]">Search Engine Optimization (SEO)</a></li>
            <li><a href="/services/smm" className="text-[#53295a] hover:text-[#a259c6]">Social Media Marketing (SMM)</a></li>
            <li><a href="/services/ppc" className="text-[#53295a] hover:text-[#a259c6]">Pay-Per-Click Advertising (PPC)</a></li>
            <li><a href="/services/content" className="text-[#53295a] hover:text-[#a259c6]">Content Marketing</a></li>
            <li><a href="/services/email" className="text-[#53295a] hover:text-[#a259c6]">Email Marketing & Automation</a></li>
            <li><a href="/services/web" className="text-[#53295a] hover:text-[#a259c6]">Website Design & Development</a></li>
          </ul>
        </div>
        {/* Contact Us */}
        <div>
          <h4 className="font-semibold text-[#7c5dc7] mb-2">Contact Us</h4>
          <div className="text-[#53295a] text-sm mb-2">
            <div><span className="font-semibold">Address:</span> 123 Digital Ave, Marketing City</div>
            <div><span className="font-semibold">Phone:</span> (123) 456-7890</div>
            <div><span className="font-semibold">Email:</span> support@digital.com</div>
            <div><span className="font-semibold">Hours:</span> Mon–Fri, 9 AM – 6 PM</div>
          </div>
          <div className="mt-2">
            <span className="font-semibold text-[#7c5dc7]">Follow Us</span>
            <div className="flex space-x-5 mt-1 text-2xl">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#2d3748] hover:text-[#a259c6]" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#2d3748] hover:text-[#a259c6]" aria-label="Facebook"><FaFacebookF /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#2d3748] hover:text-[#a259c6]" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-[#2d3748] hover:text-[#a259c6]" aria-label="YouTube"><FaYoutube /></a>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="text-[#2d3748] hover:text-[#a259c6]" aria-label="WhatsApp"><FaWhatsapp /></a>
            </div>
          </div>
        </div>
        {/* Newsletter */}
        <div>
          <h4 className="font-semibold text-[#7c5dc7] mb-2">Newsletter</h4>
          <p className="text-[#53295a] text-sm mb-2">Get weekly marketing tips and updates in your inbox.</p>
          {subscribed ? (
            <div className="text-[#7c5dc7] font-semibold py-2">Thanks for subscribing!</div>
          ) : (
            <form className="flex flex-col gap-2 w-full max-w-xs" onSubmit={handleSubscribe}>
              <input type="email" placeholder="Your email" className="rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a259c6] text-[#53295a] bg-white h-11 px-4 text-base w-full" required />
              <button type="submit" className="rounded-md h-11 w-full bg-[#7c5dc7] text-white font-semibold hover:bg-[#a259c6] transition text-base">Subscribe</button>
            </form>
          )}
        </div>
      </div>
      <hr className="my-8 border-gray-200" />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-[#53295a] gap-2">
        <div className="flex space-x-4 mb-2 md:mb-0">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms & Conditions</a>
          <a href="#" className="hover:underline">Disclaimer</a>
        </div>
        <div>© 2025 Digital Marketing. All rights reserved.</div>
      </div>
    </footer>
  );
}
