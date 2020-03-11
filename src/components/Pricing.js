import React from 'react';

const Pricing = () => {
  return (
    <div className="pricing">
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="center col-pricing col l12 m12 s12">
            <h3>Pricing Plan</h3>
          </div>

          <div className="center col-date col l12 m12 s12">
            <div className="btn pricing-text-btn btn-pricing-top-2">
              MONTHLY
            </div>
            <div className="btn pricing-text-btn btn-pricing-top-1">
              YEARLY - 2 MONTH FREE
            </div>
          </div>
          <div>
            {}
            <div className="col l4 m4 s12">
              <div className="card card-contents z-depth-3 hoverable center">
                <div className="card-title pricing-text-primary">Starter</div>
                <div className="card-title pricing-text-main">$10</div>
                <div className="card-content pricing-text-secondary">
                  Monitoring
                </div>
                <div className="card-content pricing-text-secondary">
                  Helpdesk
                </div>
                <div className="card-content pricing-text-secondary">
                  Asset configuration and management
                </div>
                <div className="card-content pricing-text-secondary">
                  Event management
                </div>
                <div className="btn btn-block btn-purchase">PURCHASE</div>
              </div>
            </div>

            <div className="col l4 m4 s12">
              <div className="card card-contents z-depth-3 hoverable center">
                <div className="card-title pricing-text-primary">
                  Professional
                </div>
                <div className="card-title pricing-text-main">$29</div>
                <div className="card-content pricing-text-secondary">
                  Monitoring
                </div>
                <div className="card-content pricing-text-secondary">
                  Helpdesk
                </div>
                <div className="card-content pricing-text-secondary">
                  Asset configuration and management
                </div>
                <div className="card-content pricing-text-secondary">
                  Event management
                </div>
                <div className="btn btn-block btn-purchase">PURCHASE</div>
              </div>
            </div>

            <div className="col l4 m4 s12">
              <div className="card card-contents z-depth-3 hoverable center">
                <div className="card-title pricing-text-primary">Business</div>
                <div className="card-title pricing-text-main">$49</div>
                <div className="card-content pricing-text-secondary">
                  Monitoring
                </div>
                <div className="card-content pricing-text-secondary">
                  Helpdesk
                </div>
                <div className="card-content pricing-text-secondary">
                  Asset configuration and management
                </div>
                <div className="card-content pricing-text-secondary">
                  Event management
                </div>
                <div className="btn btn-block btn-purchase">PURCHASE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
