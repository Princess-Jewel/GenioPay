import React from "react";
import "./Authlayout.css";
import { Route } from "react-router";


const Authlayout = ({ children }) => {
  return (
    <>
      <div className="authwrapper">
        <div className="main--section">
          <div className="">
            <img
              src="https://res.cloudinary.com/dpqxraalv/image/upload/v1632238705/Group_162463_2x_rmqvv3.png"
              alt="coffee img"
              className=""
            />
          </div>
        </div>

        <div>
          <main className="children-section">{children}</main>
        </div>
      </div>
    </>
  );
};

const MainAuthLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (
        <Authlayout>
          <Component {...props} />
        </Authlayout>
      )}
    />
  );
};

export default MainAuthLayout;
