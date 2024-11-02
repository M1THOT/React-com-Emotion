import { Col, Row } from "react-grid-system";
import { Tipografia } from "../../Tipografia.jsx/Tipografia";
import cliente from "./Assets/cliente.png";
import freela from "./Assets/freela.png";
import { Link } from "../../Link";
import { Link as LinkRouter } from "react-router-dom";
import { useCadastroUsuarioContext } from "../../../Contexto/CadastroUsuario";


const SelecaoCliente = () => {

  const { setPerfil } = useCadastroUsuarioContext()

  return (
    <div style={{textAlign: "center"}}>
      <Tipografia variante="h1" componente="h1">
        Crie seu cadastro
      </Tipografia>
      <Tipografia variante="h3" componente="h2">
        Como podemos te ajudar
      </Tipografia>
      <Row>
        <Col md={6} sm={12}>
        <LinkRouter to='interesses' onClick={() => setPerfil('cliente')}>
          <img src={cliente} alt="Foto que representa a empresa que busca freelancers"/>
          <Tipografia variante="body" componente="body">
            Sou cliente e preciso de um freela!
        </Tipografia>
        </LinkRouter>
        </Col>
        <Col md={6} sm={12}>
          <img
            src={freela}
            alt="Foto que representa o freelancer que busca clientes"
          />
          <Tipografia variante="body" componente="body">
            Sou um freela e preciso de cliente!
          </Tipografia>
        </Col>
      </Row>
      <div>
        <Tipografia variante="body2" componente="body2">
          Já tem conta?
        </Tipografia>
        <p>
          <Link variante="secundaria">Faça login</Link>
        </p>
      </div>
    </div>
  );
};

export default SelecaoCliente;
