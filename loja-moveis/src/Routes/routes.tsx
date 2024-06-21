import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/home";
import Shop from "../pages/Shop/shop";
import Contact from "../pages/Contact/contact";
import Cart from "../pages/Cart/cart";
import Login from "../pages/Login/login";
import ErrorPage from "../components/errorPage";
import Checkout from "../pages/Checkout/checkout";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConection";

function Router() {
  const [user, loading] = useAuthState(auth);

  if (loading) return null;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/errorPage" element={<ErrorPage />} />
      <Route path="/cart" element={<Cart />} />
      {user ? (
        <Route path="/checkout" element={<Checkout />} />
      ) : (
        <Route path="/checkout" element={<Navigate to={"/login"} />} />
      )}
    </Routes>
  );
}

export default Router;
