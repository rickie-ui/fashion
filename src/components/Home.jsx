import Hero from "@/assets/hero.png";
import Mark from "@/assets/mark.png";
import Star from "@/assets/star.png";
const Home = () => {
  return (
    <div className=" relative mx-auto flex h-[575px] items-center justify-between gap-x-10 bg-secondary px-8 md:w-10/12 md:rounded-3xl md:px-14">
      <div className=" w-3/4 md:w-2/5">
        <h1 className="text-5xl font-extrabold md:text-7xl">
          <span className=" my-1 inline-block -rotate-2 bg-white py-1 pl-2 pr-32">
            LET’S
          </span>
          EXPLORE
          <span className=" my-1 inline-block -rotate-2 bg-primary py-1 pl-2 pr-14">
            UNIQUE
          </span>
          CLOTHES.
        </h1>
        <p className="my-4">Live for Influential and Innovative fashion!</p>

        <div className="mt-10 flex items-center gap-x-8">
          <img src={Mark} alt="marker" className="hidden w-32 md:block" />
          <a
            href="#"
            className="rounded-md bg-black px-6 py-2 capitalize tracking-widest text-white outline-none duration-200 hover:bg-black/60"
          >
            Shop Now
          </a>
        </div>
      </div>
      <img
        src={Hero}
        alt="hero"
        className=" hidden h-full w-3/4 object-scale-down pt-16 md:block"
      />

      <img
        src={Star}
        alt="star"
        className=" absolute right-1/2 top-10 h-8 w-8"
      />
      <img
        src={Star}
        alt="star"
        className=" absolute bottom-8 right-1/2 h-8 w-8"
      />
      <img
        src={Star}
        alt="star"
        className=" absolute right-[250px] top-24 h-8 w-8"
      />
      <img
        src={Star}
        alt="star"
        className=" absolute bottom-16 right-[160px] h-8 w-8"
      />
    </div>
  );
};

export default Home;
