import {
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  REGINSTRATION_ROUTE,
  STAFF_ROUTE,
  USER_ROUTE
} from "./utils/consts";
import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import Staff from "./pages/Staff";
import User from "./pages/User";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin
  },
  {
    path: USER_ROUTE + "/:id",
    Component: User
  }
];

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Auth
  },
  {
    path: REGINSTRATION_ROUTE,
    Component: Auth
  },
  {
    path: STAFF_ROUTE,
    Component: Staff
  }
];

export const notFoundRoute = {
  path: "/*",
  Component: NotFound
};
