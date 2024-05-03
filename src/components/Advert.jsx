import ImageOne from "@/assets/advert.png";
import Star from "@/assets/star.png";

const Advert = () => {
  return (
    <section className="relative mb-10 flex h-[450px] items-center justify-center gap-x-16 bg-primary ">
      <img
        src={ImageOne}
        alt="image"
        className="hidden h-full object-contain md:block"
      />
      <img
        src={Star}
        alt="star"
        className=" absolute left-1/4 top-20 h-8 w-8 opacity-50"
      />
      <img
        src={Star}
        alt="star"
        className=" absolute bottom-48 left-[28%] h-8 w-8 opacity-80"
      />
      <img
        src={Star}
        alt="star"
        className=" absolute top-12 h-8 w-8 opacity-60"
      />
      <img
        src={Star}
        alt="star"
        className=" absolute bottom-28 h-8 w-8 opacity-70"
      />

      <div className="mx-auto w-10/12 p-2 md:mx-0 md:w-80">
        <p className="text-5xl font-extrabold  uppercase">
          <span className="my-3 inline-block -rotate-3 bg-white px-4">
            Payday
          </span>
          Sale Now
        </p>

        <p className="my-4 font-medium ">
          Spend minimal $100 get 30% off voucher code for your next purchase
        </p>

        <div className="flex flex-col">
          <h2 className="font-bold">12 February - 24 March 2024</h2>
          <p>*Terms & Conditions Apply</p>
        </div>

        <a
          href="#"
          className="my-4 inline-block rounded-md bg-black px-6 py-2 font-semibold uppercase tracking-widest text-white outline-none duration-200 hover:bg-black/60"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default Advert;
