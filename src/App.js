import { useState } from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Nav from "./components/NavBar/Nav";
import Projects from "./components/Projects/Projects";




function App() {
  const [open,setOpen] = useState("deactive")
  const navbar = document.querySelector('#navbar');
const header = document.querySelector('#welcome-section');
const forest = document.querySelector('.forest');
const silhouette = document.querySelector('.silhouette');
let forestInitPos = -300;
window.onscroll = () => {
  let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

  if (scrollPos <= window.innerHeight) {
    silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
    forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
  }

  if (scrollPos - 100 <= window.innerHeight)
    header.style.visibility = header.style.visibility === 'hidden' && 'visible';
  else header.style.visibility = 'hidden';

  if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');
  else navbar.classList.remove('bg-active');
};

function navSmoothScrolling() {
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  for (let i in internalLinks) {
    if (internalLinks.hasOwnProperty(i)) {
      internalLinks[i].addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(internalLinks[i].hash).scrollIntoView({
          block: 'start',
          behavior: 'smooth'
        });
      });
    }
  }
};
navSmoothScrolling()




  const toggleMenu = () => {
    open === "deactive" ? setOpen("active") : setOpen("deactive")
  }
  return (
    <>
        <Menu toggleMenu={toggleMenu} open={open} />
        <Nav toggleMenu={toggleMenu} open={open} />
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer/>
    </>
  );
}

export default App;
