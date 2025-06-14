import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className="w-full flex justify-between items-center px-5 py-5 sm:px-10">
      <nav className="flex w-full screen-max-width items-center justify-center">
        <img src={appleImg} alt="apple logo" height={18} width={18} />

        <div className="flex flex-1 max-sm:hidden justify-center">
          {navLists.map((nav) => (
            <div className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all" key={nav}>{nav}</div>
          ))}
        </div>

        <div className="flex max-sm:flex-1 max-sm:justify-end gap-7 cursor-pointer items-baseline">
          <img src={searchImg} alt="search" height={18} width={18} />
          <img src={bagImg} alt="bag" height={18} width={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
