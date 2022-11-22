import React from "react";
import { BiChevronRight } from "react-icons/bi";

const NavSm = () => {
  return (
    <>
      <div>
        <div>
          <h3>It All Starts Here!</h3>
          <span>
            Ahmedabad <BiChevronRight />
          </span>
        </div>
      </div>
    </>
  );
};
const NavMd = () => {};
const NavLg = () => {};

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="md:hidden"></div>
        <div className="hidden md:flex lg:hidden">
          {/* Medium/Tab Screen */}
        </div>
        <div className="hidden lg:flex">{/* Large Screen */}</div>
      </nav>
    </>
  );
};

export default Navbar;
