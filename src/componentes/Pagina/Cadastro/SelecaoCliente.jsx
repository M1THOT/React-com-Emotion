import { Col, Row } from "react-grid-system";
import { Tipografia } from "../../Tipografia.jsx/Tipografia";
import cliente from "./Assets/cliente.png";
import freela from "./Assets/freela.png";
import { Link } from "../../Link";

const SelecaoCliente = () => {
  return (
    <>
      <Tipografia variante="h1" componente="h1">
        Crie seu cadastro
      </Tipografia>
      <Tipografia variante="h3" componente="h2">
        Como podemos te ajudar
      </Tipografia>
      <Row>
        <Col md={6} sm={12}>
          <img
            src={cliente}
            alt="Foto que representa a empresa que busca freelancers"
          />
          <Tipografia variante="body" componente="body">
            Sou cliente e preciso de um freela!
          </Tipografia>
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
      <div style={{textAlign: "center"}}>
        <Tipografia variante="body2" componente="body2">
          Já tem conta?
        </Tipografia>
        <p>
          <Link variante="secundaria">Faça login</Link>
        </p>
      </div>
    </>
  );
};

export default SelecaoCliente;
