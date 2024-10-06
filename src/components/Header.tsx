const Header = () => {
    return ( 
        <header className="flex justify-between w-[90vw] mx-auto items-center py-6 bg-black text-white">
            <div className="text-2xl font-bold w-full">FLUX</div>
            <nav>
            <ul className="flex space-x-6">
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">About</a></li>
                <li><a href="#" className="hover:underline">Services</a></li>
                <li><a href="#" className="hover:underline">Portfolio</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
            </nav>
            <div className="w-full flex justify-end">
                <button className="px-9 py-2  border border-orange-500 hover:bg-orange-600 text-white rounded-full">Schedule a meet</button>
            </div>
        </header>
     );
}
 
export default Header;