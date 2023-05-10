import Aboutus from './components/AboutUs.jsx';
import Dedndlasflores from './components/Dondelasflores.jsx';
import React from "react";
import ReactDOM from "react-dom";
import Footer from "./components/footer"
import ProductList from './components/productList';
import Slider from './components/Slider';


function App(){
    const mockImagenes = [ //imagenes de prueba 
		'https://picsum.photos/id/1020/400',
		'https://picsum.photos/id/1025/400',
		'https://picsum.photos/id/1010/400',
        'https://picsum.photos/id/1011/400',
        'https://picsum.photos/id/1012/400',
	];

    return(

        <div>
            <h1>Pétalos de fiesta</h1>
            <ProductList />
            <Aboutus />
            <Dedndlasflores />
            <Slider imagenes={mockImagenes} />;
            <Footer/>

        </div>
        )
}
   


export default App