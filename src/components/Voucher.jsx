import Apple from "@/assets/apple.png";
import Android from "@/assets/android.png";
import Preview from "@/assets/preview.png";

const Voucher = () => {
  return (
    <section className="mx-auto mb-10 flex h-[400px] w-full flex-col items-center justify-center gap-x-10 space-y-10 md:h-[550px] md:w-9/12  md:flex-row md:justify-between md:space-y-0 md:px-4">
      <div className="w-3/4 md:w-1/2">
        <h2 className="text-3xl font-extrabold uppercase">
          Download App & <br /> Get the Voucher!
        </h2>
        <p className="my-4">
          Get 30% off for first transaction using <br /> Rondovision mobile app
          for now.
        </p>

        <div className="flex h-10 items-center gap-x-2">
          <img src={Apple} alt="apple" className="h-full" />
          <img src={Android} alt="android" className="h-full" />
        </div>
      </div>

      <div className="relative hidden h-full w-1/2 items-center justify-center md:flex">
        <img
          src={Preview}
          alt=""
          className=" z-20  -ml-3.5 block h-full w-full object-cover"
        />
        <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 border-secondary"></div>
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 border-secondary"></div>
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 border-secondary"></div>

        {/* markers */}
        <div className="absolute bottom-16 left-14 h-5 w-5 rounded-full bg-primary"></div>
        <div className="absolute right-14  top-20 h-6 w-6 rounded-full bg-primary"></div>

        <div className="absolute left-20  top-20 h-3.5 w-3.5 rounded-full bg-black/55"></div>
        <div className="absolute bottom-28  right-20 h-2.5 w-2.5 rounded-full bg-black/55"></div>
      </div>
    </section>
  );
};

export default Voucher;
