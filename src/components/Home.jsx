import Hero from "@/assets/hero.png";
import Mark from "@/assets/mark.png";
import Star from "@/assets/star.png";
const Home = () => {
  return (
    <div className=" relative mx-auto flex h-[575px] w-10/12 items-center justify-between gap-x-10 rounded-3xl bg-secondary px-14">
      <div className="w-2/5">
        <h1 className="text-7xl font-extrabold">
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
          <img src={Mark} alt="marker" className=" w-32" />
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
        className=" h-full w-3/4 object-scale-down pt-16"
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
