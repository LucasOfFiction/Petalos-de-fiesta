import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import '@fortawesome/fontawesome-free/css/all.css';
import '../styles/footer.css';



export default function Footer2() {
  return (
    <MDBFooter bgColor='none' className='text-center text-lg-start text-muted' id='footer'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Buscanos en:</span>
        </div>

        <div className='redes'>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className='links'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="tree" className="me-3" />
                Petalos de Fiesta
              </h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias quasi consequuntur quo, sunt nulla eveniet hic ipsam eaque ea illo!
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Secciones</h6>
              <p>
                <a href='#!' className='text-reset'>
                Inicio
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Carrito
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  AboutUs
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Carrousel
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Proveedores</h6>
              <p>
                <a href='#!' className='text-reset'>
                 El campo de Jorge
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                 Flores de la Patagoni
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                 El sol
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                 Eden
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contacto</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Bariloche
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                petalosf@ejemplo.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 2994 123 123
              </p>
              <p>
                <MDBIcon icon="map" className="me-3" /> 
                <a href='#!' className='text-reset'>Google Maps </a>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='derechos'>
        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.15)' }}>
            © 2023 Copyright:
            <a className='text-reset fw-bold' href=''>
            LosDelFondo.com
            </a>
        </div>
      </div>
    </MDBFooter>
  );
}