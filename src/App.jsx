import Header from "@/shared/Header";
import Home from "@/components/Home";
import Sponsor from "@/components/Sponsor";
import Arrival from "@/components/Arrival";
import Advert from "@/components/Advert";
import Favorite from "@/components/Favorite";
import Community from "@/components/Community";
import Footer from "@/components/Footer";
import Voucher from "./components/Voucher";

const App = () => {
  return (
    <>
      <div className="flex h-8 w-full items-center justify-center bg-black text-xs font-medium text-white/70">
        Note: Not mobile responsive🤭
      </div>
      <Header />
      <Home />
      <Sponsor />
      <Arrival />
      <Advert />
      <Favorite />
      <Voucher />
      <Community />
      <Footer />
    </>
  );
};

export default App;
