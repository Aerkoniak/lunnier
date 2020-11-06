import React from 'react';
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <>
            <div className="contentPage center">
                <h3 className="">Spis treści:</h3>
                <ul className="menu">
                    <li><Link to="/bio">Biografia - 1</Link></li>
                    <li><Link to="/skills">Umiejętności - 2</Link></li>
                    <li><Link to="/offer">Oferta - 3</Link></li>
                    <li><Link to="/hobby">Zainteresowania - 4</Link></li>
                    <li><Link to="/contact">Kontakt - 5</Link></li>
                    {/* <li><Link></Link></li> */}
                </ul>
            </div>
        </>
    );
}

export default Menu;