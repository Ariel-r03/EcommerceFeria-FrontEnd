import HomePage from "./HomePage/HomePage";
import LoginPage from "./LoginPage/LoginPage";
import RegisterPage from "./RegisterPage/RegisterPage";
import ShopPage from "./ShopPage/ShopPage";
import AdminPage from "./AdminPage/AdminPage";
export const pagesData = [
  {
    path: "/",
    element: <HomePage />,
    title: "HomePage",
    isProtected: false,
  },
  {
    path: "/login",
    element: <LoginPage />,
    title: "Login",
    isProtected: false,
  },
  {
    path: "/register",
    element: <RegisterPage />,
    title: "Register",
    isProtected: false,
  },
  {
    path: "/tienda",
    element: <ShopPage />,
    title: "Tienda",
    isProtected: false,
  },
  {
    path: "/admin",
    element: <AdminPage />,
    title: "Panel de administrador",
    isProtected: true,
  },
];
