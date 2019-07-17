import React, { Component } from 'react';
import Slider from "react-slick";
import './Slider.css';

import Slide_1 from '../img/slide-1.jpg';
import Slide_2 from '../img/slide-2.jpg';
import Slide_3 from '../img/slide-3.jpg';
import Slide_4 from '../img/slide-4.jpg';
import Slide_5 from '../img/slide-5.jpg';
import Slide_6 from '../img/slide-6.jpg';

class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: true
    };
    return (
      <Slider {...settings}>
        <div>
          <img src={`${Slide_1}`} alt="slide"></img>
        </div>
        <div>
          <img src={`${Slide_2}`} alt="slide"></img>
        </div>
        <div>
          <img src={`${Slide_3}`} alt="slide"></img>
        </div>
        <div>
          <img src={`${Slide_4}`} alt="slide"></img>
        </div>
        <div>
          <img src={`${Slide_5}`} alt="slide"></img>
        </div>
        <div>
          <img src={`${Slide_6}`} alt="slide"></img>
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider