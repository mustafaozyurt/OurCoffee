import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Screens
import HomeScreen from "./screens/HomeScreen";
import AboutUs from "./screens/AboutUs";
import Coffees from "./screens/Coffees";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/coffees" element={<Coffees />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
