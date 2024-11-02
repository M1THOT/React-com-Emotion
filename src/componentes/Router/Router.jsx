import { createBrowserRouter } from "react-router-dom";
import SelecaoCliente from "../Pagina/Cadastro/SelecaoCliente";
import LayoutBaseCadastro from "../Pagina/Cadastro/LayoutBaseCadastro";
import LayoutBase from "../Pagina/LayoutBase";

export const Router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutBase />,
      children: [{
        path: "cadastro",
        element: <LayoutBaseCadastro />,
        children: [{
          path:'',
          element: <SelecaoCliente />,
        },{
          path: "cliente",
          element: <h1>Interesses</h1>,
        },{
          path: "dados-pessoais",
          element: <h1>Dados pessoais</h1>,
        },{
          path: "concluido",
          element: <h1>Concluído</h1>,
        }]
      }],
    },
  ]);