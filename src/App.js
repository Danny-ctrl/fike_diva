import React from "react";
import "./App.css";
import Header from "./components/Header";
import Carousel from "./components/carousel";
import Footer from "./components/Footer";


const App = () => (
    <div className="App">
        <Header />
        <main>
            <Carousel />
        </main>
        <Footer />
    </div>
);

export default App;
