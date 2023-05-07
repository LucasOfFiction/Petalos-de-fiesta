import '../styles/dndlasflores.css';
import  React from 'react';
import flores from '../images/tulipanesreact.jpg'
const Dndlasflores = () => {
return (
    <div className="container">
        <div>
            <h2 className='titulo'>De donde sacamos las flores?</h2>
            <p className='texto'>hola buenas tardes</p>

        </div>
        <div className="image">
            <img src={flores}></img>

        </div>
    </div>



    );
};
export default Dndlasflores;