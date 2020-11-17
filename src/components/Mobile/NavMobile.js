import React, { useState } from 'react';

const NavMobile = () => {

    const [isNavShown, showNav] = useState(false)

    return (
        <nav className="mobileNav">
            <i className="fas fa-hamburger" onClick={() => showNav(!isNavShown)} ></i>
            <ul className={isNavShown ? "navigation shown" : "navigation"}>
                <li onClick={() => showNav(false)}><a href="#chapterOne" >krótkie bio</a></li>
                <li onClick={() => showNav(false)}><a href="#chapterTwo" >moje umiejętności</a></li>
                <li onClick={() => showNav(false)}><a href="#chapterThree" >oferta</a></li>
                <li onClick={() => showNav(false)}><a href="#kontakt" >drogi kontaktu</a></li>
            </ul>
        </nav>
    )
}

export default NavMobile;