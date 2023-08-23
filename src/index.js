import React, { useEffect } from "react";
import { createRoot } from "react-dom/client"; // Importa createRoot da react-dom/client
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import reportWebVitals from "./reportWebVitals"; // Importa reportWebVitals

const rootElement = document.getElementById("root");
const root = createRoot(rootElement); // Utilizza createRoot

// Chiamata a reportWebVitals utilizzando useEffect
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
      <ReportWebVitalsListener />
    </React.StrictMode>
  </Provider>
);

function ReportWebVitalsListener() {
  useEffect(() => {
    reportWebVitals(console.log);
  }, []);

  return null;
}
