/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useContext } from "react";
import ShowProduct from "./components/product/ShowProduct.jsx";
import ProductDetail from "./components/product/ProductDetail.jsx";
import NavBar from "./components/NavBar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchProduct from "./components/product/SearchProduct.jsx";
import Register from "./components/user/Register.jsx";
import Login from "./components/user/Login.jsx";
import Profile from "./components/user/Profile.jsx";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout.jsx";
import Address from "./components/Address.jsx";
import OrderConfirmation from "./components/OrderConfirmation.jsx";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<ShowProduct />} />
          <Route path="/product/search/:term" element={<SearchProduct />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/shipping" element={<Address />}></Route>
          <Route path="/oderconfirmation" element={<OrderConfirmation />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
