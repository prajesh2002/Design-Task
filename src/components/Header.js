import React, { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerStyle = {
    backgroundColor: scrollPosition > 0 ? "white" : "transparent",
    zIndex: 1000,
  };

  return (
    <div
      className="flex flex-col md:flex-row md:justify-around md:mb-4 w-full pl-5 fixed top-0 py-2"
      style={headerStyle}
    >
      <div className="font-medium mb-4 md:text-xl md:mb-0">Stimulus</div>
      <div className="md:space-x-6 space-x-2 hidden md:flex">
        <a href="/">HOME</a>
        <a href="/">ABOUT ME</a>
        <a href="/">EXPERIENCE</a>
        <a href="/">TESTIMONIAL</a>
        <a href="/">CONTACT</a>
      </div>
      <div className="md:hidden flex flex-col items-end absolute top-2 right-4">
        <button onClick={toggleMenu}>
        <i class="fa-solid fa-bars fa-xl"></i>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
        </button>
        {isMenuOpen && (
          <div className="flex flex-col space-y-2 mt-2 bg-gray-100 px-10">
            <a href="/">HOME</a>
            <a href="/">ABOUT ME</a>
            <a href="/">EXPERIENCE</a>
            <a href="/">TESTIMONIAL</a>
            <a href="/">CONTACT</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
