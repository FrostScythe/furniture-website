import { RectangleEllipsis, Search, UserRound, ShoppingCart } from 'lucide-react';

function Nav() {
  return (
    <nav className="flex items-center justify-between p-10 shadow-md bg-white my-6">
      {/* Left: Logo + Company Name */}
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
          <RectangleEllipsis className="w-5 h-5 text-gray-700" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">Cozy Home</h3>
      </div>

      {/* Right: Navigation + Icons */}
      <div className="flex items-center gap-12">
        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 text-gray-600 font-medium">
          <a href="#" className="hover:text-black transition">New Arrivals</a>
          <a href="#" className="hover:text-black transition">Living Room</a>
          <a href="#" className="hover:text-black transition">Bedroom</a>
          <a href="#" className="hover:text-black transition">Dining Room</a>
          <a href="#" className="hover:text-black transition">Office</a>
          <a href="#" className="hover:text-black transition">Decor</a>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-8 text-gray-600">
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
