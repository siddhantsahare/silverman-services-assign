import React from 'react';

const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <div className="center col-pricing col l12 m12 s12">
          <h3>Services</h3>
        </div>
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col l3 m12 s12">
            <div className="card z-depth-2 hoverable center card-secondary">
              <img
                src="images/timeismoney.png"
                alt=""
                className="img-service"
              />
              <div className="card-title service-text-primary">
                Business Day
              </div>
              <div className="card-content service-text-secondary">
                8 AM – 5 PM US TIME ZONES Call, answer, and support services
                provided from our Jersey City, NJ offices
              </div>
            </div>
          </div>

          <div className="col l6 m12 s12">
            <div className="card z-depth-3 hoverable center card-main">
              <img src="images/24.png" alt="" className="img-service" />
              <div className="card-title service-text-m">24X7 Support</div>
              <div className="card-content service-text-s">
                24×7 all you can eat buffet of full support. US based business
                day support and after hours support from our NOC{' '}
              </div>
            </div>
          </div>

          <div className="col l3 m12 s12">
            <div className="card z-depth-2 hoverable center card-secondary">
              <img src="images/chat.png" alt="" className="img-service" />
              <div className="card-title service-text-primary">
                Call answering
              </div>
              <div className="card-content service-text-secondary">
                24×7 Call Answering services only. POC will be notified when a
                call or request is made
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};
export default Services;
