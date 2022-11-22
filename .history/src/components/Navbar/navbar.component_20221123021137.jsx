import React from "react";
import { BiChevronRight, BiSearch } from "react-icons/bi";

const NavSm = () => {
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">It All Starts Here!</h3>
          <span className="text-gray-400 text-xs flex items-center">
            Ahmedabad <BiChevronRight />
          </span>
        </div>
        <div className="w-8 h-8">
          <BiSearch className="w-full h-full" />
        </div>
      </div>
    </>
  );
};
const NavMd = () => {
  return (
    <div className="w-full flex items-center gap-3 bg-white py-2 px-3 rounded-md">
      <BiSearch />
      <input
        type="search"
        className="w-full bg-transparent border-none focus:outline-none"
        placeholder="Search for Movies, Events, Plays, Sports and Activities"
      />
    </div>
  );
};
const NavLg = () => {
  return (
    <>
      <div>
        <div>
          <div className="w-12 h-12">
            <img
              src="https://www.gogle.com/url?sa=i&url=https%3A%2F%2Ffavpng.com%2Fpng_view%2Fbook-store-bookmyshow-india-ticket-business-logo-png%2FqK36PR24&psig=AOvVaw1TcCvwKqHX_dD7StAnxvCJ&ust=1669235908690000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJDEkr3SwvsCFQAAAAAdAAAAABAJ"
              alt="logo"
            />
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <nav className="bg-bms-700 p-4">
        <div className="md:hidden">
          <NavSm />
        </div>
        <div className="hidden md:flex lg:hidden">
          <NavMd />
        </div>
        <div className="hidden lg:flex">
          <NavLg />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
