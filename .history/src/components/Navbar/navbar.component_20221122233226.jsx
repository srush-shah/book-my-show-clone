import React from "react";

const NavSm = () => {
  return (
    <>
      <div>
        <div>
          <h3></h3>
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
        <div className="md:hidden">{/* Mobile Screen */}</div>
        <div className="hidden md:flex lg:hidden">
          {/* Medium/Tab Screen */}
        </div>
        <div className="hidden lg:flex">{/* Large Screen */}</div>
      </nav>
    </>
  );
};

export default Navbar;
