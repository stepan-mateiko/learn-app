import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import RoutePaths from "./constants/routes";
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
          <Route path={RoutePaths.HOME} element={<HomePage />} />
          <Route
            path={RoutePaths.NOT_FOUND}
            element={<Navigate to={RoutePaths.HOME} />}
          />

          <Route path={RoutePaths.HOME} element={<NonAuthRoute />}>
            <Route path={RoutePaths.LOGIN} element={<LoginPage />} />
            <Route path={RoutePaths.JOIN_US} element={<JoinUs />} />
            <Route
              path={`${RoutePaths.REGISTRATION}/:role`}
              element={<Registration />}
            />
          </Route>

          <Route path={RoutePaths.HOME} element={<AuthRoute />}>
            <Route path={RoutePaths.MY_ACCOUNT} element={<MyAccount />} />
            <Route path={RoutePaths.EDIT_PROFILE} element={<EditProfile />} />
            <Route
              path={RoutePaths.CHANGE_PASSWORD}
              element={<ChangePassword />}
            />
            <Route path={RoutePaths.TRAINING} element={<Training />} />

            <Route
              path={RoutePaths.REGISTRATION_VERIFICATION}
              element={<RegistrationVerification />}
            />
            <Route path={RoutePaths.MY_ACCOUNT} element={<StudentRoute />}>
              <Route path={RoutePaths.ADD_TRAINER} element={<AddTrainer />} />

              <Route
                path={RoutePaths.ADD_PASSED_TRAINING}
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
