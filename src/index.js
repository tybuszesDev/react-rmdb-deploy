import React from "react";
import ReactDOM from "react-dom";
import App from "./layouts/App";
import "./styles/index.css";

App.listen(process.env.PORT || 3000, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    App.settings.env
  );
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
