import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import LoginForm from "./components/login/LoginForm";
import "./app.css";
import React, { useState } from "react";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import CategoryList from "./pages/categoryList/CategoryList";
import NewCategory from "./pages/newCategory/NewCategory";
import Category from "./pages/category/Category";
import OrderList from "./pages/orderList/OrderList";
import ReviewList from "./pages/reviewList/ReviewList";

function App() {
  const admin = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (details.email == admin.email && details.password == admin.password) {
      setUser({
        email: details.email,
      });
    } else {
      setError("Wrong email or password");
    }
  };

  const Logout = () => {
    setUser({
      email: "",
    });
  };

  return (
    <div className="App">
      {user.email != "" ? (
        <Router>
          <Topbar />
          <div className="container">
            <Sidebar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:userId">
                <User />
              </Route>
              <Route path="/newUser">
                <NewUser />
              </Route>
              <Route path="/products">
                <ProductList />
              </Route>
              <Route path="/product/:productId">
                <Product />
              </Route>
              <Route path="/newproduct">
                <NewProduct />
              </Route>
              <Route path="/categories">
                <CategoryList />
              </Route>
              <Route path="/category/:categoryId">
                <Category />
              </Route>
              <Route path="/newcategory">
                <NewCategory />
              </Route>
              <Route path="/order">
                <OrderList />
              </Route>
              <Route path="/review">
                <ReviewList />
              </Route>
            </Switch>
          </div>
        </Router>
      ) : (
        <div className="wrapper">
          <LoginForm Login={Login} error={error} />
        </div>
      )}
    </div>
  );
}

export default App;
