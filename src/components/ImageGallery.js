import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import './image-gallery.css';

import Slide_1 from '../img/1.jpg';
import Slide_1t from '../img/1t.jpg';
import Slide_2 from '../img/2.jpg';
import Slide_2t from '../img/2t.jpg';
import Slide_3 from '../img/3.jpg';
import Slide_3t from '../img/3t.jpg';
import Slide_4 from '../img/1.jpg';
import Slide_4t from '../img/1t.jpg';
import Slide_5 from '../img/2.jpg';
import Slide_5t from '../img/2t.jpg';
import Slide_6 from '../img/3.jpg';
import Slide_6t from '../img/3t.jpg';
import Slide_7 from '../img/1.jpg';
import Slide_7t from '../img/1t.jpg';
import Slide_8 from '../img/2.jpg';
import Slide_8t from '../img/2t.jpg';
import Slide_9 from '../img/3.jpg';
import Slide_9t from '../img/3t.jpg';
import Slide_10 from '../img/1.jpg';
import Slide_10t from '../img/1t.jpg';
import Slide_11 from '../img/2.jpg';
import Slide_11t from '../img/2t.jpg';
import Slide_12 from '../img/3.jpg';
import Slide_12t from '../img/3t.jpg';

export default class MyComponent extends Component {
 
  render() {
 
    const images = [
      {
        original: Slide_1,
        thumbnail: Slide_1t,
      },
      {
        original: Slide_2,
        thumbnail: Slide_2t,
      },
      {
        original: Slide_3,
        thumbnail: Slide_3t,
      },
      {
        original: Slide_4,
        thumbnail: Slide_4t,
      },
      {
        original: Slide_5,
        thumbnail: Slide_5t,
      },
      {
        original: Slide_6,
        thumbnail: Slide_6t,
      },
      {
        original: Slide_7,
        thumbnail: Slide_7t,
      },
      {
        original: Slide_8,
        thumbnail: Slide_8t,
      },
      {
        original: Slide_9,
        thumbnail: Slide_9t,
      },
      {
        original: Slide_10,
        thumbnail: Slide_10t,
      },
      {
        original: Slide_11,
        thumbnail: Slide_11t,
      },
      {
        original: Slide_12,
        thumbnail: Slide_12t,
      }
    ]
 
    return (
      <ImageGallery items={images} />
    );
  }
 
}