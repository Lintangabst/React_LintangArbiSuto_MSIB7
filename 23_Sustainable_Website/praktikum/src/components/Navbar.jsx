import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="p-4 bg-blue-500 text-white flex justify-between">
    <h1 className="text-lg font-bold">MOOD</h1>
    <div className="space-x-4">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  </nav>
);

export default Navbar;
