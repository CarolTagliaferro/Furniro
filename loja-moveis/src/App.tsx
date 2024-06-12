import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Router from "./Routes/routes";
import Footer from "./components/footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Header />
        <main className="flex-grow">
          <Router />
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
