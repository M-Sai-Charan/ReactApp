import React from "react";
import "./App.css";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Gallery from "./Gallery";
import ClientTemplate from "./ClientTemplate";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
const App: React.FC = () => {
  return (
    <div className="App scroll-container">
      <section className="scroll-section"><Home /></section>
      <section className="scroll-section"><AboutUs /></section>
      <section className="scroll-section"><Services /></section>
      <section className="scroll-section"><Gallery /></section>
      {/* <section className="scroll-section"><ClientTemplate /></section> */}
      <section className="scroll-section"><Testimonials /></section>
      <section className="scroll-section"><Footer /></section>
    </div>
  );
};

export default App;
