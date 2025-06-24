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
    name: ["Naci Gureng"],
    link: "/#",
  },
];

const NavBar = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <style jsx>{`
        @keyframes shake3856 {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
          100% {
            transform: translate(0);
          }
        }
        .custom-button:hover {
          animation: shake3856 0.3s linear infinite both;
        }
      `}</style>

      <div className="bg-white">
        <div className="container py-2">
          <div className="flex justify-between">
            {/* Logo section */}
            <div data-aos="fade-down" data-aos-once="true" data-aos-delay="300">
              <a href="#">
                <img src={Logo} alt="logo" className="w-23 ml-5" />
              </a>
            </div>

            {/* Button section */}
            <div
              data-aos="fade-down"
              data-aos-once="true"
              className="hidden lg:flex justify-between items-center gap-4"
            >
              <ul className="hidden lg:flex justify-between items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <button
                      onClick={() => (window.location.href = menu.link)}
                      className="custom-button h-12 w-32 border-none rounded-full text-lg text-white font-medium hover:bg-black transition-colors"
                      style={{ background: "#16a34a" }}
                    >
                      {menu.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Responsive part */}
            <div className="lg:hidden">
              <button
                onClick={handleOpen}
                className="custom-button h-12 w-32 border-none rounded-full bg-green-600 text-lg text-white font-medium hover:bg-black transition-colors"
                style={{ background: "#16a34a" }}
              >
                <FaBars className="text-xl mx-auto" />
              </button>

              {/* DropDown menu */}
              {open && (
                <div>
                  <ul className="bg-white space-y-3 p-4 rounded-md shadow-md absolute right-43 top-24 z-50 shadow-1">
                    {Menu.map((menu) => (
                      <li key={menu.id}>
                        <a
                          href={menu.link}
                          className="shadow-1 inline-block text-xl p-4 hover:bg-green-600 rounded-md hover:text-white w-full"
                        >
                          {menu.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
