<<<<<<< Updated upstream
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { store } from "./app/store";
import { Provider } from "react-redux";
import "./index.css";
=======
import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import Form from './Form.jsx'
import './index.css'
>>>>>>> Stashed changes

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
<<<<<<< Updated upstream
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
=======
    {/*<App />*/}
    <Form/>
  </React.StrictMode>,
)
>>>>>>> Stashed changes
