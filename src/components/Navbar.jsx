import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ConnectWallet } from "./ConnectWallet";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  // const [showFirstNav, setShowFirstNav] = useState(true);
  const [showSecondNav, setShowSecondNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Second navbar behavior
      if (currentScrollY > 80) {
        setShowSecondNav(true);
      } else if (currentScrollY < 40) {
        setShowSecondNav(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    console.log(showSecondNav);
  }, [showSecondNav]);

  return (
    <>
      {/* First Navbar */}

      {/* Second Navbar */}
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300
         bg-gray-950/95 shadow-sm text-white
        ${showSecondNav ? "translate-y-0" : "-translate-y-full"}`}>
        <NavbarContent />
      </nav>
    </>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

// Shared Navbar Content Component
export const NavbarContent = ({ chilren }) => (
  <div className="w-full max-w-7xl mx-auto px-4">
    <div className="flex items-center justify-between h-16 gap-4">
      <Link to="/" className="flex items-center flex-shrink-0">
        <span className="font-semibold ml-2 hidden sm:inline-block">Events</span>
      </Link>
      <div>{chilren}</div>
      <div className="flex-1 max-w-xl px-4">
        <Link to="/search" className="w-full">
          <Input id="search" type="search" placeholder="Search" className="w-full" />
        </Link>
      </div>

      <div className="hidden md:flex items-center space-x-6">
        <Link to="/explore" className="text-sm font-medium hover:text-primary">
          Explore
        </Link>
        <Link to="/collections" className="text-sm font-medium hover:text-primary">
          Collections
        </Link>
        <Link to="/activity" className="text-sm font-medium hover:text-primary">
          Activity
        </Link>
      </div>

      <div className="flex items-center flex-shrink-0">
        <ConnectWallet />
      </div>
    </div>
  </div>
);

export default Navbar;
