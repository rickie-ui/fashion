import { BsArrowRight } from "react-icons/bs";
import Mark from "@/assets/mark.png";
import FavOne from "@/assets/favone.png";
import FavTwo from "@/assets/favtwo.png";

const Favorite = () => {
  return (
    <section className="mx-auto mb-10 w-10/12">
      <h2 className="text-2xl font-extrabold uppercase md:text-3xl">
        Young's Favourite
      </h2>
      <div className="relative">
        <img
          src={Mark}
          alt="marker"
          className="absolute -top-4 left-36 -z-20 h-5 -rotate-3 md:left-52"
        />
      </div>

      <div className="my-12 grid h-auto grid-cols-1 space-y-8 md:h-[475px] md:grid-cols-2 md:space-y-0">
        <div>
          <img
            src={FavOne}
            alt="image"
            className="h-[400px] rounded-lg object-cover object-[24%] md:object-center"
          />
          <div className="mb-1 mt-4 flex w-full items-center justify-between gap-8 font-medium opacity-75 md:w-[575px]">
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
          <img
            src={FavTwo}
            alt="image"
            className=" h-[400px] rounded-lg object-cover object-center md:object-center"
          />
          <div className="mb-1 mt-4 flex w-full items-center justify-between gap-8 font-medium opacity-75 md:w-[575px]">
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
