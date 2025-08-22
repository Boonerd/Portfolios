import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">Your Name</div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-primary focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
        <div className={`md:flex ${isOpen ? 'block' : 'hidden'} md:items-center md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0`}>
          <NavLink to="/" className="nav-link block md:inline-block py-2">Home</NavLink>
          <NavLink to="/about" className="nav-link block md:inline-block py-2">About</NavLink>
          <NavLink to="/skills" className="nav-link block md:inline-block py-2">Skills</NavLink>
          <NavLink to="/projects" className="nav-link block md:inline-block py-2">Projects</NavLink>
          <NavLink to="/services" className="nav-link block md:inline-block py-2">Services</NavLink>
          <NavLink to="/contact" className="nav-link block md:inline-block py-2">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;