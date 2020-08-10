import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import "../assets/styles/App.scss";
import Footer from "../components/Footer";

const API = "http://localhost:3000/initialState"

const App = () => {
    const [videos, setVideos] = useState([]);
    
    useEffect(()=>{
        fetch(API)
        .then(response=> response.json())
        .then(data=> setVideos(data))
    }, []);

    console.log(videos);

  return (
    <div className="App">
      <Header />
      <Search />
      <Categories title="Lo más popular">
        <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>

      <Categories title="Tendencias">
        <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>

      <Categories title="Novedades">
        <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
};

export default App;
