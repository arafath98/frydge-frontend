import React from "react";

const Landing = () => {
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <h1 className="display-5">Welcome to Frydge!</h1>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <hr />
            <p className="display-6 lead">
              Frydge is your personal online fridge. <br />
              Keeping track of your perishable items. Get notified when they are
              close to their expiry. Be part of the global effort to reduce food
              waste.
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-7 col-sm-6 col-md-5 col-lg-4 col-xl-3">
            <img src="./images/123.png" style={{ width: '100%' }} alt="Foodwastage" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
