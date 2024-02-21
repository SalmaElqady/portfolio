import Contact from './components/4-contact/Contact';
import Main from './components/3-main/Main';
import Hero from './components/2-hero/Hero'
import Header from './components/1-header/Header'
import Footer from './components/5-footer/Footer';
import { useEffect } from 'react';
import { useState } from 'react';
function App() {

  useEffect(() => {


    window.addEventListener("scroll", () => {
      if ( window.scrollY >300){
        setshowScrollBTN(true)

      }else{
        setshowScrollBTN(false)
      }


    });
  }, []);

  const [showScrollBTN, setshowScrollBTN] = useState(false);
  return (
    <div className="container">
      <Header />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />
      
      <a style={{ opacity: showScrollBTN ? 1:  0, transition: "1s"}} href="#">
          <button className='scroll2Top icon-keyboard_arrow_up'></button>
        </a>
      
    </div>
  );
}

export default App

