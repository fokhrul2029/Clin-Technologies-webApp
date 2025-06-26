import About from "./sections/About";
import Action from "./sections/Action";
import Banefit from "./sections/Banefit";
import Banner from "./sections/Banner";
import CaseUse from "./sections/CaseUse";
import Feature from "./sections/Feature";
import Support from "./sections/Support";
import Tecnology from "./sections/Tecnology";

function Home() {
  return (
    <div>
      <Banner />
      <About />
      <Feature />
      {/* <Action /> */}
      <Tecnology />
      <Banefit />
      <CaseUse />
      <Support />
    </div>
  );
}

export default Home;
