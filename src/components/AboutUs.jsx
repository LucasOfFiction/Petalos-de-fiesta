import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../styles/whychoose.css';
import { BsGlobeAmericas } from 'react-icons/bs';
import { TbPackages } from 'react-icons/tb';
import { CgBee } from 'react-icons/cg';
import { HiOutlineThumbUp } from 'react-icons/hi';
import { GiChainedHeart } from 'react-icons/gi';


const Aboutus = () => {
    return (
      
      <div className="container">
        <div className="row">
        <Container>
          <h2 className="titulo">Why Choose <div className="titulo2"> hola buenas tardes</div></h2>
      <Row>
        <Col>
          <BsGlobeAmericas className="icon" />
          <h4>estamos en todo el pais</h4>
          <p>Bienvenidos a nuestra página web, donde encontrarás la florería más encantadora y diversa de todo el país. Nos enorgullece anunciar que contamos con sucursales estratégicamente ubicadas en diferentes ciudades, permitiéndonos llevar nuestra pasión por las flores a cada rincón de esta hermosa nación.</p>
        </Col>
        <Col>
          <TbPackages className="icon" />
          <h4>compras por mayor</h4>
          <p>brindamos increíbles ofertas al comprar al por mayor. Sabemos lo importante que es para muchos de nuestros clientes contar con flores frescas y de calidad para sus eventos especiales, decoración de espacios o simplemente para alegrar el día a día.</p>
        </Col>
        <Col>
          <CgBee className="icon" />
          <h4>apoyamos a las abejas</h4>
          <p>En nuestra florería, nos enorgullece no solo brindarte hermosas flores, sino también ser defensores de las abejas y su importante rol en nuestro ecosistema. Reconocemos la vital labor de estos polinizadores incansables y nos comprometemos a apoyar su bienestar. </p>
        </Col>
        <Col>
          <HiOutlineThumbUp className="icon" />
          <h4>calidad garantizada</h4>
          <p>En nuestra florería, nos esforzamos por ofrecerte productos de la más alta calidad. Nos enorgullece seleccionar cuidadosamente cada flor y planta que llega a nuestras manos, asegurándonos de que estén frescas, vibrantes y en su mejor estado.</p>
        </Col>
        <Col>
          <GiChainedHeart className="icon" />
          <h4>apoyamos a nuestra comunidad</h4>
          <p>En nuestra florería, no solo nos apasiona ofrecerte flores y arreglos excepcionales, sino que también buscamos formar una hermosa comunidad. Creemos que las flores tienen el poder de unir a las personas, inspirar emociones y transmitir mensajes de amor y aprecio.</p>
        </Col>
      </Row>
    </Container>
          
        </div>            
      </div>
    );
  };
  
  export default Aboutus;