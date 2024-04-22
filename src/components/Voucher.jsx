import Apple from "@/assets/apple.png";
import Android from "@/assets/android.png";
import Preview from "@/assets/preview.png";

const Voucher = () => {
  return (
    <section className="mx-auto mb-10 flex h-[550px] w-9/12  items-center justify-between gap-x-10 border border-red-500 px-4">
      <div className="w-1/2">
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

      <div className="w-1/2 border border-blue-500">
        <img src={Preview} alt="h-full" />
      </div>
    </section>
  );
};

export default Voucher;
