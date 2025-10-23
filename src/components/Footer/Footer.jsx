import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap -mx-6">
          {/* Logo & Copyright */}
          <div className="w-full md:w-1/3 px-6 mb-8 md:mb-0 flex flex-col justify-between">
            <Logo width="120px" />
            <p className="mt-4 text-sm text-gray-500">
              &copy; 2023 DevUI. All rights reserved.
            </p>
          </div>

          {/* Company Links */}
          <div className="w-1/2 sm:w-1/3 md:w-1/6 px-6 mb-8 sm:mb-0">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {["Features", "Pricing", "Affiliate Program", "Press Kit"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to="/"
                      className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors duration-200"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Support Links */}
          <div className="w-1/2 sm:w-1/3 md:w-1/6 px-6 mb-8 sm:mb-0">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              {["Account", "Help", "Contact Us", "Customer Support"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to="/"
                      className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors duration-200"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="w-full sm:w-1/2 md:w-1/4 px-6">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">
              Legals
            </h3>
            <ul className="space-y-3">
              {["Terms & Conditions", "Privacy Policy", "Licensing"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to="/"
                      className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors duration-200"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
