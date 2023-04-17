import { useState } from "react";

import NavLink from "./NavLink";

const NavBar = () => {
  const [currentPage, setCurrentPage] = useState("About");

  return (
    <div className="">
      <ul className="nav ">
        <NavLink
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          linkTo="/my-portfolio"
          name="About"
        />
        <NavLink
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          linkTo="/portfolio"
          name="Portfolio"
        />
        <NavLink
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          linkTo="/resume"
          name="Resume"
        />
        <NavLink
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          linkTo="/contact"
          name="Contact"
        />
      </ul>
    </div>
  );
};

export default NavBar;
