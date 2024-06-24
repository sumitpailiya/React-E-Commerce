import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Shop from "./Shop";
import ProductDetail from "./productDetail";
import NewStore from "./NewStore";
import ShowList from './showList'
import Customer from './customer';
import CustomerDetails from "./customerDetails";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Blogs from "./Blogs";
import Cart from "./cart";
import SearchBar from "./search";
import Checkout from "./Checkout";
import BlogPage from "./BlogPage";
import NotFound from "./404page";
import ContactUs from "./ContactUs";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Shop" element={<Shop />} />
          <Route path="productdetail/:id" element={<ProductDetail />} />
           <Route path="products/:slug" element={<NewStore />} />
          {/* <Route path="showList/:id" element={<ShowList />} /> */}
          <Route path="customer" element={<Customer />} /> 
          <Route path="customerDetails/:id" element={<CustomerDetails />} /> 
          <Route path="SignIn" element={<SignIn />} /> 
          <Route path="SignUp" element={<SignUp />} /> 
          <Route path="Blogs" element={<Blogs />} /> 
          <Route path="cart" element={<Cart />} /> 
          <Route path="search" element={<SearchBar />} /> 
          <Route path="checkout" element={<Checkout />} /> 
          <Route path="blogPage/:id" element={<BlogPage />} /> 
          <Route path="404Page" element={<NotFound />} /> 
          <Route path="contactUs" element={<ContactUs />} /> 








          {/* /* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
