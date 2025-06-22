import React from "react";
import Logo from "../../assets/llogo.png";

import { FaBars } from "react-icons/fa";

const Menu = [
  {
    id: 1,
    name: ["Kottu"],
    link: "#",
  },
  {
    id: 2,
    name: ["Chiken Rice"],
    link: "/#",
  },
  {
    id: 3,
    name: ["Biryani"],
    link: "/#",
  },
  {
    id: 4,
    name: ["Nasi goreng"],
    link: "/#",
  },
  {
    id: 5,
    name: ["Cheese Kottu"],
    link: "/#",
  },
  {
    id: 6,
    name: ["Dolphin Kottu"],
    link: "/#",
  },
];

const NavBar = () => {

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  }

  return (
    <>
      <div className="bg-white">
        <div className="container py-2">
          <div className="flex justify-between">
            {/* Logo section */}

            <div>
              <a href="# ">
                <img src={Logo} alt="logo" className="w-23 ml-5" />
              </a>
            </div>

            {/* Link section */}
            <div className="hidden lg:flex justify-between items-center gap-4 shadow-1">
              <ul className="hidden lg:flex justify-between items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a href={menu.link} className="inline-block text-xl p-4">
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/*Responsive part*/}
            <div className="lg:hidden">
              <button onClick={handleOpen}>
                <FaBars className="text-3xl mt-8" />
              </button>
              {/*DropDown menu*/}
              {open && <div>
                
                <ul className="bg-white space-y-3 p-4 rounded-md shadow-md absolute right-43 top-24 z-50 shadow-1">
                  {Menu.map((menu) => (
                    <li key={menu.id}>

                      <a href={menu.link} className="shadow-1 inline-block text-xl p-4 hover:bg-green-500 rounded-md hover:text-white w-full">
                        {menu.name}
                      </a>

                    </li>
                  ))}
                </ul>

                </div>}
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
