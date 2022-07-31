import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./components/About";
import AnimationProvider from "./animation/AnimationProvider";

function App() {
  return (
    <Router>
      <AnimationProvider>
        <Routes>
          <Route exact path={"/"} element={<Home />} />
        </Routes>
      </AnimationProvider>
    </Router>
  );
}

export default App;
