import { Col, Container, Row } from "react-grid-system";
import { Rodape } from "../Rodape/Rodape";
import { Tipografia } from "../Tipografia.jsx/Tipografia";
import { IconeWhatsApp } from "../Icones/IconeWhatsApp";
import { ItemListaInline } from "../Lista/ItemListaInline";
import { ListaInline } from "../Lista/ListaInline";
import { FreelandoLogo } from "../Icones/FreelandoLogo";
import { IconeTwitch } from "../Icones/IconeTwitch";
import { IconeInstagram } from "../Icones/IconeInstagram";
import { IconeTwitter } from "../Icones/IconeTwitter";
import { Botao } from "../Botao/Botao";
import { CampoTexto } from "../CampoTexto/CampoTexto";
import { ListaSupensa } from "../ListaSuspensa/ListaSuspensa";
import { Card } from "../Card/Card";
import { Link } from "../Link";
import { Cabecalho } from "../Cabecalho/Cabecalho";
import { Estilos } from "../EstilosGlobais/Estilos";
import { ProvedorTema } from "../ProvedorTema/ProvedorTema";

 const estadosBrasileiros = [
   { "text": "Acre", "value": "AC" },
   { "text": "Alagoas", "value": "AL" },
   { "text": "Amapá", "value": "AP" },
   { "text": "Amazonas", "value": "AM" },
   { "text": "Bahia", "value": "BA" },
   { "text": "Ceará", "value": "CE" },
   { "text": "Distrito Federal", "value": "DF" },
   { "text": "Espírito Santo", "value": "ES" },
   { "text": "Goiás", "value": "GO" },
   { "text": "Maranhão", "value": "MA" },
   { "text": "Mato Grosso", "value": "MT" },
   { "text": "Mato Grosso do Sul", "value": "MS" },
   { "text": "Minas Gerais", "value": "MG" },
   { "text": "Pará", "value": "PA" },
   { "text": "Paraíba", "value": "PB" },
   { "text": "Paraná", "value": "PR" },
   { "text": "Pernambuco", "value": "PE" },
   { "text": "Piauí", "value": "PI" },
   { "text": "Rio de Janeiro", "value": "RJ" },
   { "text": "Rio Grande do Norte", "value": "RN" },
   { "text": "Rio Grande do Sul", "value": "RS" },
   { "text": "Rondônia", "value": "RO" },
   { "text": "Roraima", "value": "RR" },
   { "text": "Santa Catarina", "value": "SC" },
   { "text": "São Paulo", "value": "SP" },
   { "text": "Sergipe", "value": "SE" },
   { "text": "Tocantins", "value": "TO" }
 ]

 const PaginaInicial = () => {
   return (
     <ProvedorTema>
       <Estilos />
       <Cabecalho>
         <Container>
           <Row align="center"> 
             <Col>
               <FreelandoLogo />
             </Col>
             <Col style={{ textAlign: 'right' }}>
               <Link>Login</Link>
             </Col>
           </Row>
         </Container>
       </Cabecalho>
       <Row justify="center">
         <Col xxx={6} xxl={6} xl={6} lg={6} md={8} sm={12} style={{ margin: '80px 0' }}>
           <Card>
             <Tipografia variante="h1" componente="h1">
               Freelando
             </Tipografia>
             <Tipografia variante="body" componente="body">
               Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho.
             </Tipografia>
             <Row>
               <Col>
                 <CampoTexto titulo="Nome Completo" />
               </Col>
             </Row>
             <Row>
               <Col lg={4} md={4} sm={4}>
                 <ListaSupensa titulo="Estado" opcoes={estadosBrasileiros} />
               </Col>
               <Col lg={8} md={8} sm={8}>
                 <CampoTexto titulo="Cidade" />
               </Col>
             </Row>
             <Row>
               <Col>
                 <CampoTexto titulo="E-mail" />
               </Col>
             </Row>
             <Row>
               <Col lg={6} md={6} sm={6}>
                 <CampoTexto titulo="Senha" />
               </Col>
               <Col lg={6} md={6} sm={6}>
                 <CampoTexto titulo="Repita a Senha" />
               </Col>
             </Row>
             <Row>
               <Col lg={6} md={6} sm={6}>
                 <Botao variante="secundaria">
                   Anterior
                 </Botao>
               </Col>
               <Col lg={6} md={6} sm={6}>
                 <div style={{ textAlign: 'right' }}>
                   <Botao>
                     Próxima
                   </Botao>
                 </div>
               </Col>
             </Row>
           </Card>
         </Col>
       </Row>
       <Rodape>
         <Container>
           <Row align="center">
             <Col>
               <FreelandoLogo height={40} width={176} />
               <Tipografia variante="legenda" componente="legenda">Desenvolvido por Alura. Projeto fictício sem fins comerciais.</Tipografia>
             </Col>
             <Col style={{ textAlign: 'right' }}>
               <Tipografia variante="legenda" componente="legenda">Acesse nossas redes:</Tipografia>
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
    </ProvedorTema>
  );
}

export default PaginaInicial;