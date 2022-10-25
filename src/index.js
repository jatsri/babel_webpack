import ReactDOM from "react-dom";
import React from "react";

import Form from "./js/components/Form.jsx";

const wrapper = document.getElementById("container");
console.log('wrapper', wrapper);
wrapper ? ReactDOM.render(<Form />, wrapper) : false;
