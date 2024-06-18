import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Router from "./Routes/routes";
import Footer from "./components/footer";
import { Provider } from "react-redux";
import store from "./store/index";

function App() {
  return (
    <Provider store={store}>
      <div className="flex flex-col min-h-screen">
        <BrowserRouter>
          <Header />
          <main className="flex-grow">
            <Router />
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
