import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import Training from "./components/Training/Training";
import JoinUs from "./components/JoinUs/JoinUs";
import MyAccount from "./components/MyAccount/MyAccount";
import ChangePassword from "./components/ChangePassword/ChangePassword";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/training" element={<Training />} />
          <Route path="/join-us" element={<JoinUs />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/change-password" element={<ChangePassword />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
