import { useState } from 'react';
import ProductList from './components/productList';
import NavBar from './components/NavBar.jsx';


function App(){
    return( 
        <div>
            <NavBar />

            <h1>petalos</h1>
            <div>
            <ProductList />
            </div>

        </div>
    )

}


export default App