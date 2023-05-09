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
          <h4>lo4alizaciones por todo el pais</h4>
          <p>persona que se dedica a la imprenta desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto d</p>
        </Col>
        <Col>
          <TbPackages className="icon" />
          <h4>compras por mayor</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda minima aspernatur facere velit, vero quo commodi, deserunt dolor modi nisi autem dolorum, qui corrupti maiores sint quae architecto sunt illum.</p>
        </Col>
        <Col>
          <CgBee className="icon" />
          <h4>apoyamos a las abejas</h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque explicabo cupiditate reprehenderit eaque nesciunt, iusto veniam optio hic error officia cumque quibusdam ullam magni dicta, dolor quas delectus fuga ex!</p>
        </Col>
        <Col>
          <HiOutlineThumbUp className="icon" />
          <h4>calidad garantizada</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus maiores consectetur, nesciunt laudantium aspernatur commodi aliquam provident nemo, labore quam veritatis laboriosam inventore vel itaque dolorum, est magni accusantium quasi!</p>
        </Col>
        <Col>
          <GiChainedHeart className="icon" />
          <h4>apoyamos a nuestra comunidad</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aperiam, earum laboriosam, veniam sapiente officiis quo, eveniet esse animi commodi iste dignissimos enim dolorum rem numquam sit cum. Sequi, pariatur!</p>
        </Col>
      </Row>
    </Container>
          
        </div>            
      </div>
    );
  };
  
  export default Aboutus;