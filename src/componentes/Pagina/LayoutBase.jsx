import { Col, Container, Row } from "react-grid-system";
import { Cabecalho } from "../Cabecalho/Cabecalho";
import { FreelandoLogo } from "../Icones/FreelandoLogo";
import { Link } from "../Link";
import { Rodape } from "../Rodape/Rodape";
import { Tipografia } from "../Tipografia.jsx/Tipografia";
import { ListaInline } from "../Lista/ListaInline";
import { ItemListaInline } from "../Lista/ItemListaInline";
import { IconeWhatsApp } from "../Icones/IconeWhatsApp";
import { IconeTwitch } from "../Icones/IconeTwitch";
import { IconeInstagram } from "../Icones/IconeInstagram";
import { IconeTwitter } from "../Icones/IconeTwitter";
import { Outlet } from "react-router-dom";

const LayoutBase = () => {
  return (
    <>
      <Cabecalho>
        <Container>
          <Row align="center">
            <Col>
              <FreelandoLogo />
            </Col>
            <Col style={{ textAlign: "right" }}>
              <Link>Login</Link>
            </Col>
          </Row>
        </Container>
      </Cabecalho>
      <Outlet />
      <Rodape>
        <Container>
          <Row align="center">
            <Col>
              <FreelandoLogo height={40} width={176} />
              <Tipografia variante="legenda" componente="legenda">
                Desenvolvido por Alura. Projeto fictício sem fins comerciais.
              </Tipografia>
            </Col>
            <Col style={{ textAlign: "right" }}>
              <Tipografia variante="legenda" componente="legenda">
                Acesse nossas redes:
              </Tipografia>
              <ListaInline>
                <ItemListaInline>
                  <a href="/" aria-label="Link para o WhatsApp">
                    <IconeWhatsApp />
                  </a>
                </ItemListaInline>
                <ItemListaInline>
                  <a href="/" aria-label="Link para a Twitch">
                    <IconeTwitch />
                  </a>
                </ItemListaInline>
                <ItemListaInline>
                  <a href="/" aria-label="Link para a Instagram">
                    <IconeInstagram />
                  </a>
                </ItemListaInline>
                <ItemListaInline>
                  <a href="/" aria-label="Link para a Twitter">
                    <IconeTwitter />
                  </a>
                </ItemListaInline>
              </ListaInline>
            </Col>
          </Row>
        </Container>
      </Rodape>
    </>
  );
};

export default LayoutBase;
