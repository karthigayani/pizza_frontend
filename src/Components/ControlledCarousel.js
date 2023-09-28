import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carousel-container">
      <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
        style={{width:"100%", height:"600px", objectFit:"cover"}}
          className="d-block w-100"
          src="https://i.etsystatic.com/32434499/r/il/76ac45/3860443665/il_fullxfull.3860443665_gtbm.jpg"
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
         style={{width:"100%", height:"600px", objectFit:"cover"}}
          className="d-block w-100"
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/pizza-cover-design-template-1e1da5ae6c9845553b8adad118df06ad_screen.jpg?ts=1621932720"
          alt="Second slide"
        />


      </Carousel.Item>
      <Carousel.Item>
        <img
         style={{width:"100%", height:"600px", objectFit:"cover"}}
          className="d-block w-100"
          src="https://img.freepik.com/psd-gratuit/menu-nourriture-modele-banniere-web-delicieuses-pizzas_106176-421.jpg?w=2000"
          alt="Third slide"
        />

        {/* https://www.pizzaah.com/images/slider-3.jpg */}
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default ControlledCarousel;