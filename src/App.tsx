import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Registration from "./pages/Registration/Registration";
import Training from "./pages/Training/Training";
import JoinUs from "./pages/JoinUs/JoinUs";
import MyAccount from "./pages/MyAccount/MyAccount";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import RegistrationVerification from "./pages/RegistrationVerification/RegistrationVerification";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import ChangePasswordSuccess from "./pages/ChangePasswordSuccess/ChangePasswordSuccess";
import EditProfile from "./pages/EditProfile/EditProfile";
import AddTrainer from "./pages/AddTrainer/AddTrainer";
import AddPassedTraining from "./pages/AddPassedTraining/AddPassedTraining";
import AuthRoute from "./components/AuthRoute/AuthRoute";
import NonAuthRoute from "./components/NonAuthRoute/NonAuthRoute";
import StudentRoute from "./components/StudentRoute/StudentRoute";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<NonAuthRoute />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/join-us" element={<JoinUs />} />
            <Route path="/registration/:role" element={<Registration />} />
          </Route>

          <Route path="/" element={<AuthRoute />}>
            <Route path="/my-account" element={<MyAccount />} />
            <Route path="/my-account/edit" element={<EditProfile />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/my-account/trainings" element={<Training />} />
            <Route
              path="/change-password/success"
              element={<ChangePasswordSuccess />}
            />
            <Route
              path="/registration/verification"
              element={<RegistrationVerification />}
            />
            <Route path="/my-account" element={<StudentRoute />}>
              <Route path="/my-account/add-trainer" element={<AddTrainer />} />

              <Route
                path="/my-account/trainings/add-passed-training"
                element={<AddPassedTraining />}
              />
            </Route>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
