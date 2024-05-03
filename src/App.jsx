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
