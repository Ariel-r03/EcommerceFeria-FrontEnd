import HomePage from "./HomePage/HomePage";
import LoginPage from "./LoginPage/LoginPage";
import RegisterPage from "./RegisterPage/RegisterPage";
import ShopPage from "./ShopPage/ShopPage";
import AdminPage from "./AdminPage/AdminPage";
import ProductViewPage from './ProductViewPage/ProductViewPage'
import ShoppingCartPage from './ShoppingCartPage/ShoppingCartPage'
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
  {
    path: "/tienda/product-view/:id",
    element: <ProductViewPage/>,
    title: "Producto",
    isProtected: false,
  },
  {
    path: "/misProductos",
    element: <ShoppingCartPage/>,
    title: "Mis Productos",
    isProtected: false,
  },
];
