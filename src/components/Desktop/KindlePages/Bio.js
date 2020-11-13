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
            <p className="par">Jestem trzydziestolatkiem, który może pozwolić sobie na komfort przyznania, że wreszcie zaczął zajmować się tym, co naprawdę sprawia mu przyjemność. Ukończyłem liceum w klasie o profilu biologiczno-chemicznym, by później rozpocząć studia kolejno na trzech różnych kierunkach, przy czym żaden nie był związany z biologią lub chemią. Żadnego z nich nie skończyłem. Na swoim koncie mam blisko dziesięć różnych zawodów i to biorąc pod uwagę jedynie ostatnie pięć lat mojego życia. Ostatecznie, w poszukiwaniu jeszcze czegoś innego, zdecydowałem się na emigrację. Ot, pomyślicie pewnie, typowy millennials.</p>
            <div className="float">
                <img src={triquetra} alt="triquetra" className="floatedImg" />
                <p className="par">Niewykluczone. Wiem jednak, że – przeszło czteroletni – pobyt za granicą nauczył mnie pokory i przygotował solidny grunt pod późniejsze zmiany i to nie tylko te dotyczące charakteru, ale również poglądów. Celtycka triquetra jest symbolem, który w jednym z wielu swoich znaczeń, obrazuje zasadę mówiącą, że cokolwiek w życiu zrobimy, powróci do nas z potrójną siłą. Dojrzałem do tego poglądu.</p>
            </div>
            <p className="par">Obecnie, już od blisko półtora roku, zajmuję się projektowaniem i programowaniem stron oraz wszystkiego, co można znaleźć w internecie. Naukę i kursy rozpocząłem jeszcze w Niderlandach i kontynuuję je nadal, po powrocie do kraju. Uznałem, że zarówno on, jak i zasługujemy na jeszcze jedną próbę.</p>
            <img src={portret} alt="portret własciciela" className="photo" />
            <p className="return"><Link to="/">wróć do spisu treści</Link></p>

        </div>
    );
}

export default Bio;