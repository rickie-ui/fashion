import { BsArrowRight } from "react-icons/bs";
import Mark from "@/assets/mark.png";
import FavOne from "@/assets/favone.png";
import FavTwo from "@/assets/favtwo.png";

const Favorite = () => {
  return (
    <section className="mx-auto mb-10 w-10/12">
      <h2 className="text-3xl font-extrabold uppercase">Young's Favourite</h2>
      <div className="relative">
        <img
          src={Mark}
          alt="marker"
          className="absolute -top-4 left-52 -z-20 h-5 -rotate-3"
        />
      </div>

      <div className="my-12 grid h-[475px] grid-cols-2">
        <div className="">
          <img src={FavOne} alt="image" className=" h-[400px]" />
          <div className="mb-1 mt-4 flex w-[575px] items-center justify-between gap-8 font-medium opacity-75">
            <h2>Trending on instagram</h2>
            <BsArrowRight className=" text-2xl opacity-60" />
          </div>
          <a
            href=""
            className="inline-block text-sm font-semibold capitalize opacity-50 hover:underline"
          >
            Explore Now!
          </a>
        </div>
        <div className="">
          <img src={FavTwo} alt="image" className=" h-[400px]" />
          <div className="mb-1 mt-4 flex w-[575px] items-center justify-between gap-8 font-medium opacity-75">
            <h2>All under $40</h2>
            <BsArrowRight className=" text-2xl opacity-60" />
          </div>
          <a
            href=""
            className="inline-block text-sm font-semibold capitalize opacity-50 hover:underline"
          >
            Explore Now!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Favorite;
