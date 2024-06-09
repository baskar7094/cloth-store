import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/home";
import Adminpage from "./components/adminpage/page";
import Contact from "./components/contact";
import WomanPage from "./components/adminpage/view-page/woman";
import Boys from "./components/adminpage/view-page/boys";
import ErrPage from "./components/errpage";
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
          <Route path="prducts" element={''}/>
          <Route path="wp-admin" element={<Adminpage />} />


        <Route  path="view-woman-page" element={<WomanPage/>}/>
        <Route path="view-boys-page" element={<Boys/>}/>

          <Route path="*" element={<ErrPage/> } />
        </Routes>
      </BrowserRouter>

    </>
  )
}