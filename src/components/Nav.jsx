import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex items-center justify-between">
        <div className="text-white text-2xl font-bold"> React</div>

        {/* Tofle Mene Button */}
        <div className="md:hidden">
          <button id="menu-toggle" className="text-white" onClick={toggleMenu}>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-6 h-6 border-2"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <ul className="hidden md:flex space-x-4">
          <li>
            <a className="text-white">Home</a>
          </li>

          <li>
            <a className="text-white">About</a>
          </li>

          <li>
            <a className="text-white">Services</a>
          </li>

          <li>
            <a className="text-white">Contect</a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {open ? (
        <ul className="flex flex-col md:hidden ">
          <li className="py-2">
            <a className="text-white">Home</a>
          </li>

          <li className="py-2">
            <a className="text-white">About</a>
          </li>

          <li className="py-2">
            <a className="text-white">Services</a>
          </li>

          <li className="py-2">
            <a className="text-white">Contect</a>
          </li>
        </ul>
      ) : null}
    </nav>
  );
}
