import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Sidenav from "./components/Nav/Sidenav";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import RecentOrders from "./components/RecentOrders/RecentOrders";
import OrderDetails from "./components/OrderDetails/OrderDetails";
import SelectView from "./components/SelectView/SelectView";
import PhoneBackground from "./components/PhoneBackground";
import OrdersToast from "./components/RecentOrders/OrdersToast";
import MenuToast from "./components/Menu/MenuToast";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <Router>
        <Nav open={open} setOpen={setOpen} />
        <Sidenav open={open} setOpen={setOpen} />
        <Switch>
          <Route exact path="/" component={Menu} />
          <Route exact path="/pedidos-recientes" component={RecentOrders} />
          <Route exact path="/detalles-pedido" component={OrderDetails} />
          <Route exact path="/seleccionar-vista" component={SelectView} />
          <Route exact path="/phone-background" component={PhoneBackground} />
          <Route exact path="/ordenes-toast" component={OrdersToast} />
          <Route exact path="/menu-toast" component={MenuToast} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
