import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Clients = () => {
  return (
    <div className="clients">
      <div className="container">
        <div className="center col-pricing col l12 m12 s12">
          <h3>Starter</h3>
        </div>
        <br />
        <br />
        <OwlCarousel
          className="owl-theme"
          loop={true}
          items={6}
          autoplay={true}
          autoplayTimeout={1500}
          animateIn={true}
          animateOut={true}
        >
          <div class="item">
            <img src="images/client-1.png" alt="" className="img-client" />
          </div>
          <div class="item">
            <img src="images/client-2.png" alt="" className="img-client" />
          </div>
          <div class="item">
            <img src="images/client-3.png" alt="" className="img-client" />
          </div>
          <div class="item">
            <img src="images/client-4.png" alt="" className="img-client" />
          </div>
          <div class="item">
            <img src="images/client-5.png" alt="" className="img-client" />
          </div>
          <div class="item">
            <img src="images/client-6.png" alt="" className="img-client" />
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Clients;
