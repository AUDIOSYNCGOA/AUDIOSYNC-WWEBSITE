import { useEffect, useRef, useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav ref={navRef}>
      <div className="nav-brand">AUDIOSYNC</div>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#" onClick={closeMenu}>Home</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#gallery" onClick={closeMenu}>Gallery</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;