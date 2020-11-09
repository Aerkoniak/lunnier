import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import triquetra from '../../../css/triquetra.png';
import portret from '../../../css/mojezdjecie.jpg'

const Bio = () => {
    return (
        <div className="contentPage">
            <p className="return"><Link to="/">wróć do spisu treści</Link></p>
            <p className="pageNumber">1</p>
            <h3>Trochę o mnie</h3>
            <p className="par">Jestem trzydziestolatkiem, który w końcu zaczął zajmować się tym, co sprawia mu przyjemność. Liceum z profilem biologiczno-chemicznym, później niezwiązane z biologią ani chemią studia, trzy różne kierunki, każdy porzucony. Blisko dziesięć różnych zawodów w przeciągu pięciu lat i wszystko to po to by ostatecznie zdecydować się na emigrację, w poszukiwaniu jeszcze czegoś innego. Typowy millenials.</p>
            <div className="float">
                <img src={triquetra} alt="triquetra" className="floatedImg" />
                <p className="par">Wyjazd za granicę i życie za nią przez cztery lata nauczyło mnie pokory oraz solidnie przygotowało grunt pod późniejsze zmiany zarówno charakteru jak i poglądowe. Celtycka triquetra w jednym ze swych znaczeń symbolizuje to, iż wszystko co robimy w życiu powraca do nas później trzykrotnie silniej. Dojrzałem do tego poglądu. </p>
            </div>
            <p className="par">Obecnie od blisko półtora roku zajmuje się projektowaniem i programowaniem stron, i wszystkiego innego, co można znaleźć w internecie. Naukę i kursy rozpocząłem jeszcze w Niderlandach, na ten moment jednak wróciłem z powrotem do kraju, postanawiając iż zarówno on jak i ja zasługujemy na jeszcze jedną próbę.</p>
            <img src={portret} alt="portret własciciela" className="photo" />

        </div>
    );
}

export default Bio;