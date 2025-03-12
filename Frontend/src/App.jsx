import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Authentication/Login"
import Signup from "./pages/Authentication/Signup"
import ForgotPassword from "./pages/Authentication/ForgotPassword"
import Home from "./pages/Main/Home"
import Solutions from "./pages/Main/Solutions"
import Customers from "./pages/Main/Customers"
import Pricing from "./pages/Main/Pricing"
import Resources from "./pages/Main/Resources"
import Docs from "./pages/Main/Docs"
import RequestDemo from "./pages/Main/RequestDemo"
import PurchaseLicence from "./pages/Main/PurchaseLicence"

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Solutions" element={<Solutions />} />
          <Route path="/Customers" element={<Customers />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Resources" element={<Resources />} />
          <Route path="/Docs" element={<Docs />} />
          <Route path="/RequestDemo" element={<RequestDemo />} />
          <Route path="/PurchaseLicence" element={<PurchaseLicence />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
