import { useMediaQuery } from "@uidotdev/usehooks";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { LiaTimesSolid } from "react-icons/lia";

import Logo from "@/assets/logo.png";

const Header = () => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  return (
    <>
      {!isSmallDevice ? (
        <nav className="mx-auto my-8 flex w-10/12 items-center justify-between uppercase">
          <div className="flex h-10 items-center gap-2">
            <img src={Logo} alt="logo" className=" h-6" />
            <h2 className=" font-primary text-2xl font-extrabold">Fashion</h2>
          </div>

          <div className="flex gap-x-12 font-medium">
            <a
              href="#"
              className="px-6 py-2 tracking-widest outline-none duration-150 hover:text-black/50"
            >
              Catalogue
            </a>
            <a
              href="#"
              className="px-6 py-2 tracking-widest outline-none duration-150 hover:text-black/50"
            >
              Fashion
            </a>
            <a
              href="#"
              className="px-6 py-2 tracking-widest outline-none duration-150 hover:text-black/50"
            >
              Favorite
            </a>
            <a
              href="#"
              className="px-6 py-2 tracking-widest outline-none duration-150 hover:text-black/50"
            >
              Lifestyle
            </a>

            <a
              href="#"
              className="rounded-md bg-black px-6 py-2 tracking-widest text-white outline-none duration-200 hover:bg-black/60"
            >
              Sign Up
            </a>
          </div>
        </nav>
      ) : (
        <div className="flex items-center justify-between  px-2">
          <div className="flex h-8 items-center gap-2">
            <img src={Logo} alt="logo" className=" h-6" />
            <h2 className=" font-primary text-2xl font-extrabold">Fashion</h2>
          </div>
          <button
            className=" right-4 rounded-md p-4"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <FaBars className="text-2xl" />
          </button>
        </div>
      )}

      {/* mobile menu */}
      {isSmallDevice && isMenuToggled && (
        <div className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-black/70 drop-shadow-xl">
          {/* close Icon */}
          <div className=" flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <LiaTimesSolid className="h-6 w-6 text-gray-300" />
            </button>
          </div>
          {/* menu items */}

          <div className="flex flex-col items-center justify-center gap-5 text-lg text-gray-300">
            <a
              href="#"
              className="w-full py-2 text-center hover:text-white/50"
              onClick={() => setIsMenuToggled(false)}
            >
              Catalogue
            </a>
            <a
              href="#"
              className="w-full py-2 text-center hover:text-white/50"
              onClick={() => setIsMenuToggled(false)}
            >
              Fashion
            </a>
            <a
              href="#"
              className="w-full py-2 text-center hover:text-white/50"
              onClick={() => setIsMenuToggled(false)}
            >
              Favorite
            </a>
            <a
              href="#"
              className="w-full py-2 text-center hover:text-white/50"
              onClick={() => setIsMenuToggled(false)}
            >
              Lifestyle
            </a>

            <a
              href="#"
              className="mx-auto w-9/12 bg-primary py-2 text-center tracking-widest text-white outline-none  hover:bg-primary/60"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}

      <nav className=""></nav>
    </>
  );
};

export default Header;
