import React from "react";
import "./css/App.scss";
import Login from "./components/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserListTop from "./components/UserListTop";
import UserDetail from "./components/UserDetail";
import Home from "./Home";
import Error404 from "./404";
import Protected from "./components/Protected";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

function App() {
  let isLogin = JSON.parse(localStorage.getItem("isLogin"));
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        {isLogin ? (
          <>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            {/* <Route exact path="/home">
                <Protected comp={Home} />
              </Route> */}
            <Route exact path="/users">
              <Protected comp={UserListTop} />
            </Route>

            <Route exact path="/users/:userID">
              <UserDetail />
            </Route>
            <Route exact path="/404" component={Error404} />
          </>
        ) : (
          <>
            <Route exact default strict path="/" component={Login} />
            <Route exact default strict path="/login" component={Login} />
          </>
        )}
      </Switch>
      <Redirect to="/" />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
