import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-4 shadow-sm bg-white fixed right-0 left-0 mb-10 ">
      <h1 className="text-xl font-bold text-blue-600">🚍 Travel Nepal</h1>
      <ul className="flex gap-6 text-gray-700">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/our-services">Services</Link></li>
        <li><Link to="/booking">Booking</Link></li>
        <li><Link to="/track">Track</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-full">Sign Up</button>
    </nav>
  );
}
