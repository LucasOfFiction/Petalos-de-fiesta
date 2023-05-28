import '../styles/dndlasflores.css';
import  React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import flor from '../assets/images/tulipan.jpg'
const Dndlasflores = () => {
return (
<div className="container">
    <Container>
        <h2 className='title'>De donde sacamos <div className='title2'>las flores</div></h2>
        <Row>
            <Col className='mobile-font-size'>
                
                <ul className='list'>
                    <li>Nuestra florería se abastece de una variedad de fuentes para garantizar la frescura y calidad de nuestras flores. </li>
                    <li>Trabajamos estrechamente con productores locales y proveedores de confianza que cultivan flores en diferentes regiones.</li>
                    <li>nuestros productores se dedican a cultivar flores de forma sostenible, utilizando prácticas respetuosas con el medio ambiente y sin el uso excesivo de pesticidas.</li>
                    <li>Además, nos esforzamos por seleccionar flores de temporada que reflejen la belleza y la diversidad de cada época del año. </li>
                </ul>
            </Col>
            <Col>
            <img src={flor} alt="tulipan" />
            </Col>
            </Row>
    </Container>
</div>



    );
};
export default Dndlasflores;