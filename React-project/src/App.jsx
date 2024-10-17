import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Loading from "./components/Loading";
import { lazy } from "react";
import DisplayData from "./pages/DisplayData"


const Home = lazy(() => import("./pages/home"));
const Contact = lazy(() => import("./pages/contact"));
const About = lazy(() => import("./pages/about"));
const Form =lazy(()=>import("./pages/form"))

const App = () => {
  return (
    <Router>
      <NavBar  name="Sudipta"/>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About  />} />
          <Route path="/form" element={<Form/>}/>
          <Route   path="/display" element={<DisplayData/>}/>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
