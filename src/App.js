import Header from "./components/Header";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
function App() {
  return (
    <>
      <div id="home"></div>
      <div className = "content">
        <Introduction/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
      <Header />
    </>
  );
}

export default App;
