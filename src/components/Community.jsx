import React from "react";

const Community = () => {
  return (
    <section className="flex h-[400px]  flex-col items-center  justify-center bg-primary">
      <h2 className="text-center text-3xl font-extrabold uppercase text-white">
        JOIN SHOPPING COMMUNITY TO <br /> GET MONTHLY PROMO
      </h2>
      <p className="my-4 text-center text-lg text-white">
        Type your email down below and be young wild generation
      </p>

      <div className="mx-auto flex h-12 w-11/12  items-center justify-between rounded-md bg-white md:w-1/4">
        <input
          type="text"
          placeholder="Add your email here"
          className="h-full w-full rounded-md px-4 outline-none"
        />
        <a
          href="#"
          className="m-1 inline-block rounded-md bg-black px-6 py-2 uppercase  tracking-widest text-white outline-none duration-200 hover:bg-black/60"
        >
          Send
        </a>
      </div>
    </section>
  );
};

export default Community;
