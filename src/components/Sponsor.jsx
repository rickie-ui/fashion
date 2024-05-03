import Sponsor_one from "@/assets/sponsor_1.png";
import Sponsor_two from "@/assets/sponsor_2.png";
import Sponsor_three from "@/assets/sponsor_3.png";
import Sponsor_four from "@/assets/sponsor_4.png";
import Sponsor_five from "@/assets/sponsor_5.png";
import Sponsor_six from "@/assets/sponsor_6.png";

const Sponsor = () => {
  return (
    <div className=" my-10 flex h-24 w-full items-center justify-between space-x-4 overflow-x-auto bg-primary md:space-x-0 md:px-36">
      <img src={Sponsor_one} alt="sponsors" className="h-8 w-24 object-cover" />
      <img src={Sponsor_two} alt="sponsors" className="h-8 w-24 object-cover" />
      <img
        src={Sponsor_three}
        alt="sponsors"
        className="h-8 w-24 object-cover"
      />
      <img
        src={Sponsor_four}
        alt="sponsors"
        className="h-8 w-24 object-cover"
      />
      <img
        src={Sponsor_five}
        alt="sponsors"
        className="h-8 w-24 object-cover"
      />
      <img src={Sponsor_six} alt="sponsors" className="h-8 w-24 object-cover" />
    </div>
  );
};

export default Sponsor;
