import { RouterProvider } from "react-router-dom"
import { Router } from "./componentes/Router/Router"
import { ProvedorTema } from "./componentes/ProvedorTema/ProvedorTema"
import { Estilos } from "./componentes/EstilosGlobais/Estilos"

function App () {
  return(<ProvedorTema>
    <Estilos />
    <RouterProvider router={Router} />
  </ProvedorTema>)
}

export default App
