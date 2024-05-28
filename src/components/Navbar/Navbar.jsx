import React, { useState } from "react";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import ResponsiveMenu from "./ResponsiveMenu.jsx";
import { HiMenuAlt1 } from "react-icons/hi";

const NavLinks = [
  {
    id: "1",
    name: "HOME",
    link: "/#",
  },
  {
    id: "2",
    name: "CARS",
    link: "/#cars",
  },
  {
    id: "3",
    name: "ABOUT",
    link: "/#about",
  },
  {
    id: "4",
    name: "BOOKING",
    link: "/#booking",
  }
];

const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);

  const togglemenu = () => {
    setShowMenu(!showMenu);
  }
  return (
    <nav className="shadow-md bg-white dark:bg-dark dark:text-white duration-300 relative z-40">
      <div className="container py-2 md:py-0">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold font-serif">Car Rental</h1>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-8">
              {
                NavLinks.map((data) => (
                  <li className="py-4" key={data.id}>
                    <a className="py-2 hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-500 text-lg font-medium" href={data.link}>{data.name}</a>
                  </li>
                ))
              }
            </ul>
          </div>
          {/* Dark Mode Icons  */}
          <div>
            {
              theme === "dark" ? (<BiSolidSun onClick={() => setTheme("light")} className="text-2xl" />
              ) : (
                <BiSolidMoon onClick={() => setTheme("dark")} className="text-2xl" />)
            }

          </div>
          {/* Mobile Hamburger Menu  */}
          {
            showMenu ? (
              <HiMenuAlt1 />
            ) : (
              <HiMenuAlt3 onClick={togglemenu} />
            )
          }
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </nav>

  )
};

export default Navbar