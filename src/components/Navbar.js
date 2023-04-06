const Navbar = () => {
  return (
    <nav className="bg-gray-800  ">
      <div className="mx-auto px-4 py-2 max-w-7xl  ">
        <ul className="flex justify-center items-center text-2xl">
          <li className="relative right-12">
            <a
              href="/countries"
              className="text-white hover:text-sky-400 transition-all"
            >
              Countries
            </a>
          </li>

          <a href="/" className="text-white ">
            <img
              src="./country-5.png"
              alt="Globe"
              className="w-12 h-12 relative right-5 invert  transition-all"
            />
          </a>

          <li className="relative left-3">
            <a
              href="/about"
              className="text-white hover:text-sky-400 transition-all "
            >
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
