import { NavBar } from "./components/NavBar/NavBar";
import { Banner } from "./components/Banner/Banner";
import { CV } from "./components/CV/CV";
import { Projects } from "./components/Projects/Projects";
// import { Contact } from "./components/Contact";
// import { Footer } from "./components/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Projects />
      <CV />
      {/*<Contact />
      <Footer />  */}
    </div>
  );
}

export default App;
