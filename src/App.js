import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Compaigns from "./Pages/Compaigns";
import Controller from "./Pages/Controller";
import Customers from "./Pages/Customers";
import Home from "./Pages/Home";
import Stages from "./Pages/Stages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Controller />}>
          <Route path="" element={<Home />} />
          <Route path="customers" element={<Customers />} />
          <Route path="stages" element={<Stages />} />
          <Route path="compaigns" element={<Compaigns />} />
        </Route>
        <Route path="accounts/sign-in" element={<Login />} />
        <Route path="accounts/sign-up" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
