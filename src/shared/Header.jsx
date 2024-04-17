import Logo from "@/assets/logo.png";
const Header = () => {
  return (
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
  );
};

export default Header;
