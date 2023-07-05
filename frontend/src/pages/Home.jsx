import Navbar from "../UI/Navbar";
import Hero from "../components/Hero/Hero";
import { Category } from "../components/Category/Category";
import { Speaker } from "../components/Speaker/Speaker";
import Speaker2 from "../components/speaker2/Speaker2";
import Earphone from "../components/Earphone/Earphone";
import Best from "../components/Best/Best";
import Footer from "../UI/Footer";
function Home() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Category />
      <Speaker />
      <Speaker2 />
      <Earphone />
      <Best />
      <Footer />
    </div>
  );
}

export default Home;
