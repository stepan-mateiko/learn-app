const RoutePaths = {
  HOME: "/",
  LOGIN: "/login",
  JOIN_US: "/join-us",
  REGISTRATION: "/registration",
  MY_ACCOUNT: "/my-account",
  EDIT_PROFILE: "/my-account/edit",
  CHANGE_PASSWORD: "/change-password",
  TRAINING: "/my-account/trainings",
  REGISTRATION_VERIFICATION: "/registration/verification",
  ADD_TRAINER: "/my-account/add-trainer",
  ADD_PASSED_TRAINING: "/my-account/trainings/add-passed-training",
  NOT_FOUND: "*",
  ABOUT_US: "/about-us",
  BLOG: "/blog",
  FEATURES: "/features",
};
export default RoutePaths;

export const pathsWithoutButtons = [
  RoutePaths.LOGIN,
  RoutePaths.JOIN_US,
  "/registration/trainer",
  "/registration/student",
];
