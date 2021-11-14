import Header from "./components/Header";
import Introduction from "./components/Introduction";
import About from "./components/About";
function App() {
  return (
    <>
      <Header />
      <div className = "content">
        <Introduction/>
        <About/>
      </div>
    </>
  );
}

export default App;
