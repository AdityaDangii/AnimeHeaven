import React, { Children } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Cart from "./pages/Cart";
import NoPage from "./pages/NoPage";
import MyState from "./context/data/myState";
import Signup from "./pages/registration/Signup";
import Login from "./pages/registration/Login";
import ProductInfo from "./pages/ProductInfo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Dashboard from "./pages/admin/dashboard/Dashboard";

import UpdateProduct from "./pages/admin/pages/UpdateProduct";
import AddProduct from "./pages/admin/pages/AddProduct";
import Allproducts from "./pages/AllProducts";

export default function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/order"
            element={
             
                <Order />
             
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/*" element={<NoPage />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/updateproduct" element={<UpdateProduct />} />
          <Route path="/allproducts" element={<Allproducts />} />
        </Routes>
        <ToastContainer />
      </Router>
    </MyState>
  );
}
// user
export const ProtectedRoute = ({ Children }) => {
  const user = localStorage.getItem("user");
  if (user) {
    return Children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

//admin

const ProtectedRouteForAdmin = ({ Children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));

  if (admin.user.email == "dangiaditya422@gmail.com") {
    return Children;
  } else return <Navigate to={"/login"} />;
};
