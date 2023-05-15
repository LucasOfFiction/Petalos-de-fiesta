import { useState } from 'react';
import React from "react";
import ReactDOM from "react-dom";
import Footer from "./components/footer"
import ProductList from './components/productList';
import Slider from './components/Slider';
import Footer2 from './components/footer2';


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
            <Slider imagenes={mockImagenes} />;
            <Footer2/>


        </div>
        )
}
   


export default App