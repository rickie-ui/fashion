import Header from "@/shared/Header";
import Home from "@/components/Home";
import Sponsor from "@/components/Sponsor";
import Arrival from "@/components/Arrival";
import Advert from "@/components/Advert";
import Favorite from "@/components/Favorite";
import Community from "./components/Community";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Sponsor />
      <Arrival />
      <Advert />
      <Favorite />
      <Community />
    </>
  );
};

export default App;
