import { Col, Row } from "react-grid-system";
import { Tipografia } from "../../Tipografia.jsx/Tipografia";
import { Link } from "react-router-dom";
import { Botao } from "../../Botao/Botao";
import clienteConcluido from "./Assets/cliente-concluido.png";
import styled from "@emotion/styled";

const ImagemEstilizada = styled.img`
    max-width: 100%;
    border-radius: 16px;
`

const Concluido = () => {
  return (<>
    <div style={{ textAlign: "center" }}>
      <Tipografia variante="h1" componente="h1">
        Seu perfil está completo!
      </Tipografia>
      <Tipografia variante="h3" componente="h2">
        Agora é só começar a se conectar com os melhores freelancers do mercado!
      </Tipografia>
    </div>

    <figure>
        <ImagemEstilizada src={clienteConcluido} alt="" />
    </figure>

      <Row>
        <Col>
          <Link to="/cadastro">
          <div style={{ textAlign: 'center' }}>
                   <Botao variante="secundaria">
                     Voltar para o home
                   </Botao>
                 </div>
          </Link>
        </Col>
      </Row>
  </>
  );
};

export default Concluido;
