import Aboutus from './components/AboutUs.jsx';
import Dedndlasflores from './components/Dondelasflores.jsx';
import React from "react";
import ReactDOM from "react-dom";
import Footer from "./components/footer"
import ProductList from './components/productList';
import Slider from './components/Slider';
import Fotos from '../public/images/azucena.jpg';
import Fotos2 from '../public/images/camelias.jpg';
import Fotos3 from '../public/images/rosa.jpg';
import Fotos4 from '../public/images/tulipan.jpg';
import Fotos5 from '../public/images/lirios.jpg';

import Navbar from './components/NavBar';



function App(){
    const mockImagenes = [  
		Fotos,
		Fotos2,
		Fotos3,
        Fotos4,
        Fotos5,
	];

    return(

        <div>
            <h1>Pétalos de fiesta</h1>
            <Navbar />
            <ProductList />
            <Aboutus />
            <Dedndlasflores />
            <Slider imagenes={mockImagenes} />;
            <Footer/>

        </div>
        )
}
   


export default App