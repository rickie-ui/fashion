import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section className="flex h-auto flex-col items-center justify-center space-y-10 bg-black  py-10 text-white/50 md:h-[250px] md:flex-row md:space-y-0 md:px-14 md:py-0">
      <div className="w-3/4 md:w-1/2">
        <h2 className="mb-4  text-2xl font-extrabold uppercase text-white">
          Fashion
        </h2>
        <p className="text-sm">
          Complete your style with awesome <br className="hidden md:block" />
          clothes from us.
        </p>
        <div className="my-4 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-black">
            <FaFacebookF />
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-black">
            <FaInstagram />
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-black">
            <FaTwitter />
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-black">
            <FaLinkedin />
          </div>
        </div>
      </div>

      <div className="flex w-3/4 flex-col justify-evenly space-y-8 md:w-1/2 md:flex-row md:space-y-0">
        <div>
          <h2 className="mb-4 text-lg font-medium capitalize text-white/70">
            Company
          </h2>
          <div className="flex flex-col gap-y-4 text-sm">
            <a href="#" className="duration-300 hover:text-white">
              About
            </a>
            <a href="#" className="duration-300 hover:text-white">
              Contact us
            </a>
            <a href="#" className="duration-300 hover:text-white">
              Support
            </a>
            <a href="#" className="duration-300 hover:text-white">
              Career
            </a>
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-lg font-medium capitalize text-white/70">
            Quick Link
          </h2>
          <div className="flex flex-col gap-y-4 text-sm">
            <a href="#" className="duration-300 hover:text-white">
              Share Location
            </a>
            <a href="#" className="duration-300 hover:text-white">
              Orders Tracking
            </a>
            <a href="#" className="duration-300 hover:text-white">
              Size Guide
            </a>
            <a href="#" className="duration-300 hover:text-white">
              FAQs
            </a>
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-lg font-medium capitalize text-white/70">
            Legal
          </h2>
          <div className="flex flex-col gap-y-4 text-sm">
            <a href="#" className="duration-300 hover:text-white">
              Terms & Conditions
            </a>
            <a href="#" className="duration-300 hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
