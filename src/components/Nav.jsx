import { Bolt, Search, UserRound, ShoppingCart } from 'lucide-react';

function Nav() {
    return (
        <nav className="bg-white shadow-md px-6 py-4 h-[4rem]">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <div className=" text-stone-600">
                    <Bolt className="w-6 h-6" />
                    <span className="font-bold text-lg">Cozy Home</span>
                </div>

                {/* Navigation Links */}
                <div className="text-gray-700 font-medium">
                    <a href="#" className="hover:text-stone-600">New Arrivals</a>
                    <a href="#" className="hover:text-stone-600">Living Room</a>
                    <a href="#" className="hover:text-stone-600">Bedroom</a>
                    <a href="#" className="hover:text-stone-600">Dining Room</a>
                    <a href="#" className="hover:text-stone-600">Decor</a>
                    <a href="#" className="hover:text-stone-600">Sale</a>
                </div>

                {/* Icons */}
                <div className=" text-neutral-400">
                    <Search className="w-5 h-5 hover:text-stone-200 cursor-pointer bg-stone-300" style={{height: "auto", width: "auto", borderRadius: "100%"}}/>
                    <UserRound className="w-5 h-5 hover:text-stone-200 cursor-pointer bg-stone-300" style={{height: "auto", width: "auto", borderRadius: "100%"}} />
                    <ShoppingCart className="w-5 h-5 hover:text-stone-200 cursor-pointer bg-stone-300" style={{height: "auto", width: "auto", borderRadius: "100%"}} />
                </div>
            </div>
        </nav>
    );
}

export default Nav;
