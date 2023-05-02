import { useState } from 'react';
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

	return <Slider imagenes={mockImagenes} />;
}
   


export default App