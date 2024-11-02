import { createBrowserRouter } from "react-router-dom";
import SelecaoCliente from "../Pagina/Cadastro/SelecaoCliente";
import LayoutBaseCadastro from "../Pagina/Cadastro/LayoutBaseCadastro";
import LayoutBase from "../Pagina/LayoutBase";
import Interesses from "../Pagina/Cadastro/Interesses";
import DadosPessoais from "../Pagina/Cadastro/dadosPessoais";
import Concluido from "../Pagina/Cadastro/concluido";

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
          path: "Interesses",
          element: <Interesses />,
        },{
          path: "dados-pessoais",
          element: <DadosPessoais />,
        },{
          path: "concluido",
          element: <Concluido />,
        }]
      }],
    },
  ]);