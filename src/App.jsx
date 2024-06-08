import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/home";
import Adminpage from "./components/adminpage/page";
import Contact from "./components/contact";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={''} />
          <Route index element={<HomePage />} />
          <Route path="about" element={''} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={''} />
          <Route path="login" element={''} />
          <Route path="rigistar" element={''} />
          <Route path="wp-admin" element={<Adminpage />} />
          <Route path="*" element={''} />
        </Routes>
      </BrowserRouter>

    </>
  )
}