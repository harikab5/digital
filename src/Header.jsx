import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // ...existing code...
  const [isAvatarDropdownOpen, setIsAvatarDropdownOpen] = useState(false);
  // Get logged-in user initials
  let initials = "?";
  const loggedInEmail = localStorage.getItem("loggedInUser");
  if (loggedInEmail) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.email === loggedInEmail);
    if (user) {
      const first = user.firstName && user.firstName.trim().length > 0 ? user.firstName.trim()[0] : "";
      const last = user.lastName && user.lastName.trim().length > 0 ? user.lastName.trim()[0] : "";
      if (first || last) {
        initials = `${first}${last}`.toUpperCase();
      }
    }
  }
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleHomeDropdown = () => {
    setIsHomeDropdownOpen(!isHomeDropdownOpen);
    setIsServicesDropdownOpen(false);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
    setIsHomeDropdownOpen(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="STACKLY" className="h-8 w-auto" />
            </Link>
          </div>

          {/* Navigation and Icons */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Home Dropdown */}
            <div className="relative">
              <button
                onClick={toggleHomeDropdown}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                <span>Home</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isHomeDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              {isHomeDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                  <div className="py-1">
                    <Link
                      to="/home1"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsHomeDropdownOpen(false)}
                    >
                      Home1
                    </Link>
                    <Link
                      to="/home2"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsHomeDropdownOpen(false)}
                    >
                      Home2
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              About Us
            </Link>

            {/* Services Dropdown with main link */}
            <div className="relative flex items-center">
              <Link
                to="/services"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 pr-1"
                style={{ display: 'flex', alignItems: 'center' }}
                onClick={() => setIsServicesDropdownOpen(false)}
              >
                Services
              </Link>
              <button
                onClick={toggleServicesDropdown}
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200"
                style={{ paddingLeft: 2 }}
                aria-label="Toggle Services Dropdown"
              >
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isServicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                  <div className="py-1">
                    <Link
                      to="/services/seo"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsServicesDropdownOpen(false)}
                    >
                      Search Engine Optimization (SEO)
                    </Link>
                    <Link
                      to="/services/smm"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsServicesDropdownOpen(false)}
                    >
                      Social Media Marketing (SMM)
                    </Link>
                    <Link
                      to="/services/ppc"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsServicesDropdownOpen(false)}
                    >
                      Pay-Per-Click Advertising (PPC)
                    </Link>
                    <Link
                      to="/services/content"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsServicesDropdownOpen(false)}
                    >
                      Content Marketing
                    </Link>
                    <Link
                      to="/services/email"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsServicesDropdownOpen(false)}
                    >
                      Email Marketing & Automation
                    </Link>
                    <Link
                      to="/services/web"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsServicesDropdownOpen(false)}
                    >
                      Website Design & Development
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/blog"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Blog
            </Link>

            <Link
              to="/contactus"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Contact Us
            </Link>

            {/* Icons */}
            <div className="flex items-center space-x-4 ml-4">
              {/* Dark mode toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </button>

              {/* Profile button */}
              <div className="relative">
                {(() => {
                  let initials = '';
                  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || 'null');
                  if (loggedInUser) {
                    const first = loggedInUser.firstName ? loggedInUser.firstName.trim()[0] : '';
                    const last = loggedInUser.lastName ? loggedInUser.lastName.trim()[0] : '';
                    initials = `${first}${last}`.toUpperCase();
                  }
                  return (
                    <>
                      <button
                        className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-200"
                        onClick={() => setIsAvatarDropdownOpen((v) => !v)}
                      >
                        {initials}
                      </button>
                      {isAvatarDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                          <button
                            className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-orange-100"
                            onClick={() => { setIsAvatarDropdownOpen(false); window.location.href = '/'; }}
                          >
                            Logout
                          </button>
                        </div>
                      )}
                    </>
                  );
                })()}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden relative">
        <button
          className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          aria-label="Open mobile menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {isMobileMenuOpen && (
          <div className="fixed top-0 left-0 w-full bg-white rounded-b-md shadow-lg border-b border-gray-200 z-50">
            <nav className="flex flex-col py-2">
              <Link to="/" className="px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <Link to="/home1" className="px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setIsMobileMenuOpen(false)}>Home1</Link>
              <Link to="/home2" className="px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setIsMobileMenuOpen(false)}>Home2</Link>
              <Link to="/about" className="px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
              <details>
                <summary className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">Services</summary>
                <div className="flex flex-col ml-4">
                  <Link to="/services/seo" className="px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setIsMobileMenuOpen(false)}>Search Engine Optimization (SEO)</Link>
                  <Link to="/services/smm" className="px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setIsMobileMenuOpen(false)}>Social Media Marketing (SMM)</Link>
                  <Link to="/services/ppc" className="px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setIsMobileMenuOpen(false)}>Pay-Per-Click Advertising (PPC)</Link>
                  <Link to="/services/content" className="px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setIsMobileMenuOpen(false)}>Content Marketing</Link>
                  <Link to="/services/email" className="px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setIsMobileMenuOpen(false)}>Email Marketing & Automation</Link>
                  <Link to="/services/web" className="px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setIsMobileMenuOpen(false)}>Website Design & Development</Link>
                </div>
              </details>
              <Link to="/blog" className="px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
              <Link to="/contactus" className="px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
              <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 text-left" onClick={() => { localStorage.removeItem("loggedInUser"); setIsMobileMenuOpen(false); window.location.href = "/login"; }}>Logout</button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 