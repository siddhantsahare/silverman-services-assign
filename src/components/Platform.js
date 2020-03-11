import React from 'react';

const Platform = () => {
  return (
    <div className="platform">
      <br />
      <div className="center col-pricing col l12 m12 s12">
        <h3>All in one platform</h3>
        <br />
        <br />
      </div>
      <div className="container platform-container z-depth-3">
        <div className="row">
          {/* 1st row */}
          <div className="col l4 m6 s12 platform-child">
            <img src="images/icon-2.png" alt="" className="img-icon" />
            <div className="platform-text-primary">White labelled</div>
            <br />
            <div className="platform-strip"></div>
            <br />
            <br />
            <div className="platform-text-secondary">
              White labeled solution your clients see your brand
            </div>
          </div>
          <div className="col l4 m6 s12 platform-child">
            <img src="images/icon-1.png" alt="" className="img-icon" />

            <div className="platform-text-primary">Fast response</div>
            <br />
            <div className="platform-strip"></div>
            <br />
            <br />
            <div className="platform-text-secondary">
              Average response time of 15 minutes, allowing your team to work on
              the larger issues at hand
            </div>
          </div>
          <div className="col l4 m6 s12 platform-child">
            <img src="images/icon-2.png" alt="" className="img-icon" />
            <div className="platform-text-primary">Monitoring</div>
            <br />
            <div className="platform-strip"></div>
            <br />
            <br />
            <div className="platform-text-secondary">
              We deploy proactive technology management to monitor.
            </div>
          </div>
        </div>
        <br />

        <div className="row">
          {/* 2nd row */}
          <div className="col l4 m6 s12 platform-child">
            <img src="images/icon-1.png" alt="" className="img-icon" />
            <div className="platform-text-primary">Global Presence</div>
            <br />
            <div className="platform-strip"></div>
            <br />
            <br />
            <div className="platform-text-secondary">
              Your users can call from anywhere in the world and get immediate
              support
            </div>
          </div>
          <div className="col l4 m6 s12 platform-child">
            <img src="images/icon-2.png" alt="" className="img-icon" />
            <div className="platform-text-primary">100 % Transparency</div>
            <br />
            <div className="platform-strip"></div>
            <br />
            <br />
            <div className="platform-text-secondary">
              Flat per node rate allows you to effectively manage costs
            </div>
            <br />
            <br />
          </div>
          <div className="col l4 m6 s12 platform-child">
            <img src="images/icon-1.png" alt="" className="img-icon" />
            <div className="platform-text-primary">Transparent cost</div>
            <br />
            <div className="platform-strip"></div>
            <br />
            <br />
            <div className="platform-text-secondary">
              No hidden fees or blackouts. We provide all-inclusive, flat fees
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Platform;
