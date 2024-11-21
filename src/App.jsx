import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Course from "./components/course/CoursePage";
import About from "./components/About/About";
import Advance from "./components/Advance/Advance";
import Footer from "./components/Footer/Footer";
import SignUp from "./components/SignUp/SignUp";
import Feespage from "./components/Feespage/Feespage";
import Certification from "./components/certification/certification";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Course />
        <Advance />
        <Feespage />
        <Certification />
        <About />

        <Routes>
          <Route path="/" element={<Course />} />

          <Route path="/SignUp" element={<SignUp />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
