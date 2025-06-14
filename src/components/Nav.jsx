import {
  RectangleEllipsis,
  Search,
  UserRound,
  ShoppingCart,
} from "lucide-react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="flex items-center justify-between p-6 shadow-md bg-white my-6">
      {/* Left: Logo + Company Name */}
      <Link to="/" className="flex items-center gap-3 hover:text-black transition">
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
          <RectangleEllipsis className="w-5 h-5 text-gray-700" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">Cozy Home</h3>
      </Link>

      {/* Right: Navigation Links + Icons */}
      <div className="flex items-center gap-12">
        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 text-gray-600 font-medium">
          <Link to="/new-arrivals" className="hover:text-black transition">New Arrivals</Link>
          <Link to="/living-room" className="hover:text-black transition">Living Room</Link>
          <Link to="/bedroom" className="hover:text-black transition">Bedroom</Link>
          <Link to="/dining-room" className="hover:text-black transition">Dining Room</Link>
          <Link to="/office" className="hover:text-black transition">Office</Link>
          <Link to="/decor" className="hover:text-black transition">Decor</Link>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6 text-gray-600">
          <button className="hover:text-black transition">
            <Search className="w-5 h-5" />
          </button>
          <button className="hover:text-black transition">
            <UserRound className="w-5 h-5" />
          </button>
          <button className="hover:text-black transition">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
