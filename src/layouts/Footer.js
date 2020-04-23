import React from "react";
import { Route, NavLink } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footerr">
      <Route
        path="/"
        exact
        render={(props) => (
          <p>
            Actually You are on <span> _Start_ </span> page
          </p>
        )}
      />

      <Route
        path="/:page"
        exact
        render={(props) => {
          return (
            <>
              <p>
                Actually You are on <span>_{props.match.params.page}_ </span>{" "}
                page
              </p>
              {/* <p>
                Jesteś na <span>{props.match.url}</span>
              </p>
              <p>
                Jesteś na <span>{props.match.path}</span>
              </p> */}
            </>
          );
        }}
      />
      <Route
        path="/:page/:idProduct"
        exact
        render={(props) => {
          // console.log(props);
          return (
            <>
              <p>
                Actually You are on
                <span>
                  _{props.match.params.page} >>> {props.match.params.idProduct}_
                </span>
                page
              </p>
              {/* <p>
                Jesteś na <span>{props.match.url}</span>
              </p>
              <p>
                Jesteś na <span>{props.match.path}</span>
              </p> */}
            </>
          );
        }}
      />

      <NavLink className="adminpanel" to="/admin">
        panel admina
      </NavLink>
    </div>
  );
};

export default Footer;
