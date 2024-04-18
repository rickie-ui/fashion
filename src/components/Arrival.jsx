import { BsArrowRight } from "react-icons/bs";
import Mark from "@/assets/mark.png";
import Arrival_one from "@/assets/arrival_one.png";
import Arrival_two from "@/assets/arrival_two.png";
import Arrival_three from "@/assets/arrival_three.png";
import Arrival_four from "@/assets/arrival_four.png";

const Arrival = () => {
  return (
    <section className="mx-auto mb-10 w-10/12">
      <h2 className="text-3xl font-extrabold uppercase">New Arrivals</h2>
      <div className="relative">
        <img
          src={Mark}
          alt="marker"
          className="absolute -top-4 left-32 -z-20 h-5 -rotate-6"
        />
      </div>

      <div className="my-16 grid h-[475px] grid-cols-4">
        <div className=" w-[275px]">
          <img src={Arrival_one} alt="image" className=" h-[400px]" />
          <div className="mb-1 mt-4 flex items-center justify-between gap-8 font-medium opacity-75">
            <h2>Hoodies & Sweetshirt</h2>
            <BsArrowRight className=" text-2xl opacity-60" />
          </div>
          <a
            href=""
            className="inline-block text-sm font-semibold capitalize opacity-50 hover:underline"
          >
            Explore Now!
          </a>
        </div>
        <div className=" w-[275px]">
          <img src={Arrival_two} alt="image" className=" h-[400px]" />
          <div className="mb-1 mt-4 flex items-center justify-between gap-8 font-medium opacity-75">
            <h2>Coats & Parkas</h2>
            <BsArrowRight className=" text-2xl opacity-60" />
          </div>
          <a
            href=""
            className="inline-block text-sm font-semibold capitalize opacity-50 hover:underline"
          >
            Explore Now!
          </a>
        </div>
        <div className=" w-[275px]">
          <img src={Arrival_three} alt="image" className=" h-[400px]" />
          <div className="mb-1 mt-4 flex items-center justify-between gap-8 font-medium opacity-75">
            <h2>Tees & T-Shirt</h2>
            <BsArrowRight className=" text-2xl opacity-60" />
          </div>
          <a
            href=""
            className="inline-block text-sm font-semibold capitalize opacity-50 hover:underline"
          >
            Explore Now!
          </a>
        </div>
        <div className=" w-[275px]">
          <img
            src={Arrival_four}
            alt="image"
            className=" h-[400px] rounded-2xl object-cover"
          />
          <div className="mb-1 mt-4 flex items-center justify-between gap-8 font-medium opacity-75">
            <h2>Maxi Dress</h2>
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

export default Arrival;
