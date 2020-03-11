import React from 'react';

const Home = () => {
  return (
    <div className="container home">
      <div className="row">
        <div className="col l6 m6 s6 header-text">
          <div className="header-text-primary">
            Helpdesk
            <div className="text-services">Services</div>
          </div>
          <br />
          <br />
          <br />
          <div className="header-text-secondary">
            By utilizing 24×7 LIVE helpdesk, you can relieve your team from
            working nights and weekends and prevent your high-value employees
            from working on low-value tasks.{' '}
          </div>
        </div>
        <div className="col l6 m6 s6">
          <img src="images/header-image.jpg" alt="" className="img-header" />
        </div>
      </div>
    </div>
  );
};

export default Home;
