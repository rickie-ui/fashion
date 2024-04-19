import ImageOne from "@/assets/advert.png";

const Advert = () => {
  return (
    <section className="mb-10 flex h-[450px] items-center justify-center gap-x-16 bg-primary ">
      {/* fix soon */}
      <img src={ImageOne} alt="image" className="h-full bg-cover" />

      <div className="w-80 p-2">
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
