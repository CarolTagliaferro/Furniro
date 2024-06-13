import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/home";
import Shop from "../pages/Shop/shop";
import Contact from "../pages/Contact/contact";
import Cart from "../pages/Cart/cart";
import Login from "../pages/Login/login";
import ErrorPage from "../components/errorPage";

function Router() {
  return (
    <Routes>
      <Route path="/loja-moveis/src/pages/Home/home.tsx" element={<Home />} />
      <Route path="/loja-moveis/src/pages/Shop/shop.tsx" element={<Shop />} />

      <Route
        path="/loja-moveis/src/pages/Contact/contact.tsx"
        element={<Contact />}
      />
      <Route path="/loja-moveis/src/pages/Cart/cart.tsx" element={<Cart />} />
      <Route
        path="/loja-moveis/src/pages/Login/login.tsx"
        element={<Login />}
      />
      <Route
        path="/loja-moveis/src/components/errorPage.tsx"
        element={<ErrorPage />}
      />
    </Routes>
  );
}

export default Router;
