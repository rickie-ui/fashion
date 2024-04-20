import React from "react";

const Community = () => {
  return (
    <section className="flex h-[450px]  flex-col items-center  justify-center bg-primary">
      <h2 className="text-center text-3xl font-extrabold uppercase text-white">
        JOIN SHOPPING COMMUNITY TO <br /> GET MONTHLY PROMO
      </h2>
      <p className="my-4 text-lg font-medium text-white">
        Type your email down below and be young wild generation
      </p>

      <div className="h-36 bg-white">
        <input type="text" placeholder="Add your email here" />
      </div>
    </section>
  );
};

export default Community;
