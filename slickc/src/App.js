  import React from 'react'
  import './App.css'; 
  import {dataLacasadePapel} from "./data"
  import "slick-carousel/slick/slick.css";    
  import "slick-carousel/slick/slick-theme.css";  
  import Slider from "react-slick";  

  
 
  const App = () => {      
    var settings = { 
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4, 
      initialSlide: 0, 
      responsive: [ 
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        }, 
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        } 
      ] 
    };  
 
    return (        
      <div className='App'>
        <Slider {...settings}>  
        { 
          dataLacasadePapel.map(item =>(
          <div className='Card'>   
            <div className='Card-top'>
            <img src={item.image}/> 
            <h1>{item.title}</h1>     
              </div>  
            <div className='Card-bottom'>
              <h3>{item.id}</h3>
            </div>
          </div>          
          ))}
       </Slider>
       
      </div>
    )  
  } 

  export default App