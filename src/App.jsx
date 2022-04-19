import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Categories from "./components/Categories";
import Campaigns from "./components/Campaigns";
import Favorites from "./components/Favorites";
import MobileApp from "./components/MobileApp";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import { useWindowWidth } from '@react-hook/window-size';

const App = () => {
  const windowWidth = useWindowWidth() 

  return (
    <>
      <section id="header">
        <Header/>
      </section>
      {windowWidth <= 768 && <Campaigns />}
      <section id="hero">
        <HeroSection/>
      </section>
      <section id="categories">
        <Categories/>
      </section>
      {windowWidth >= 768 && <Campaigns />}
      <Favorites/>
      <MobileApp/>
      <Cards/>
      <Footer/>
    </>
  )
}

export default App;