import React from "react";

const NavSm = () => {};
const NavMd = () => {};
const NavLg = () => {};

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="md:hidden">{/* Mobile Screen */}</div>
        <div className="hidden md:flex lg:hidden">{/* Meidum Screen */}</div>
        <div className="hidden lg:hidden">{/* Meidum Screen */}</div>
      </nav>
    </>
  );
};

export default Navbar;
