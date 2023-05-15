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
            <Col>
                <p className='texto'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <ul className='list'>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</li>
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