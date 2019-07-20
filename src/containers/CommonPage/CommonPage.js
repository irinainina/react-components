import React from 'react';
import './CommonPage.css';
import Avatar from '../../components/Avatar/Avatar'
import Description from '../../components/Description/Description';
import data from '../../data/people';
import {Link} from 'react-router-dom';

function CommonPage() { 
  const onButtonClick = (event) => {
    console.log(event.target.id);
  }
  
  return (
    data.map((item, index) => {
      return (
        <div className="common-page"
             key={index}>
          <Avatar data={item}/>
          <div className="description-container">
            <Description data={item}/>
            <Link to="/personalpage"  
                  className="read-more-button"
                  id={index}
                  onClick = {onButtonClick}>
                  Узнать больше
            </Link>        
          </div>
        </div>
      );
    })
  )
}

export default CommonPage;