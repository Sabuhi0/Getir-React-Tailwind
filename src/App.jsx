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
      <section id="responsive-campaigns">
        {windowWidth <= 768 && <Campaigns />}
      </section>
      <section id="hero">
        <HeroSection/>
      </section>
      <section id="categories">
        <Categories/>
      </section>
      <section id="campaigns">
        {windowWidth >= 768 && <Campaigns />}
      </section>
      <section id="favorites">
        <Favorites/>
      </section>
      <section id="mobile-app">
        <MobileApp/>
      </section>
      <section id="cards">
        <Cards/>
      </section>
      <Footer/>
    </>
  )
}

export default App;