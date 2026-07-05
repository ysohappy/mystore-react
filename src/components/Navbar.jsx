import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { totalItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-blue-600";

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-blue-600">
          MyStore
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 items-center">
          <NavLink to="/" className={linkStyle}>
            Home
          </NavLink>

          <NavLink to="/products" className={linkStyle}>
            Products
          </NavLink>

          <NavLink to="/about" className={linkStyle}>
            About
          </NavLink>

          <NavLink
            to="/cart"
            className={`${linkStyle({ isActive: false })} flex items-center gap-2`}
          >
            <FaShoppingCart />
            <span>{totalItems}</span>
          </NavLink>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col bg-white border-t">
          <NavLink
            to="/"
            className="p-4 hover:bg-gray-100"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className="p-4 hover:bg-gray-100"
            onClick={() => setMenuOpen(false)}
          >
            Products
          </NavLink>

          <NavLink
            to="/about"
            className="p-4 hover:bg-gray-100"
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>

          <NavLink
            to="/cart"
            className="p-4 hover:bg-gray-100"
            onClick={() => setMenuOpen(false)}
          >
            Cart ({totalItems})
          </NavLink>
        </nav>
      )}
    </header>
  );
}