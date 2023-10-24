import { useNavigate } from "react-router-dom";
import { pagesData } from "../Pages/pagesData";

export function useNavigation() {

  const routesTitles = {
    HOMEPAGE: "HomePage",
    LOGIN: "Login",
    REGISTER: "Register",
    TIENDA: "Tienda",
    PANELADMIN: "Panel de administrador",
    PRODUCTO: "Producto",
    MISPRODUCTOS: "Mis Productos",
  };


  const navigate = useNavigate();

  const nav = (title) => {
    pagesData.map((t) => {
      if (t.title === title) {
        return navigate(t.path);
      }
    });
    return null;
  };

  return { nav, routesTitles };
}
