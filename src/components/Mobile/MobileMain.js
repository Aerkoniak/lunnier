import React, { useEffect } from 'react';

import ParallaxMobile from '../Parallax/ParallaxMobile';
import ContactForm from '../Contact/ContactForm';

const MobileMain = () => {



    return (
        <section className="mainMobile container-fluid">
            <div className="chapter row" id="chapterOne">
                <h4 className="col-12 title">Trochę o mnie.</h4>
                <p className="col-12 col-sm-6">Jestem trzydziestolatkiem, który może pozwolić sobie na komfort przyznania, że wreszcie zaczął zajmować się tym, co naprawdę sprawia mu przyjemność. Ukończyłem liceum w klasie o profilu biologiczno-chemicznym, by później rozpocząć studia kolejno na trzech różnych kierunkach, przy czym żaden nie był związany z biologią lub chemią. Żadnego z nich nie skończyłem. Na swoim koncie mam blisko dziesięć różnych zawodów i to biorąc pod uwagę jedynie ostatnie pięć lat mojego życia. Ostatecznie, w poszukiwaniu jeszcze czegoś innego, zdecydowałem się na emigrację. Ot, pomyślicie pewnie, typowy millennials.</p>
                <p className="col-12 col-sm-6">
                    Niewykluczone. Wiem jednak, że – przeszło czteroletni – pobyt za granicą nauczył mnie pokory i przygotował solidny grunt pod późniejsze zmiany i to nie tylko te dotyczące charakteru, ale również poglądów. Celtycka triquetra jest symbolem, który w jednym z wielu swoich znaczeń, obrazuje zasadę mówiącą, że cokolwiek w życiu zrobimy, powróci do nas z potrójną siłą. Dojrzałem do tego poglądu.
                </p>
                <p className="col-12">Obecnie, już od blisko półtora roku, zajmuję się projektowaniem i programowaniem stron oraz wszystkiego, co można znaleźć w internecie. Naukę i kursy rozpocząłem jeszcze w Niderlandach i kontynuuję je nadal, po powrocie do kraju. Uznałem, że zarówno on, jak i zasługujemy na jeszcze jedną próbę. </p>
            </div>
            <div className="chapter row" id="chapterTwo">
                <h4 className="col-12 title">Trochę o moich umiejętnościach.</h4>
                <p className="col-12 col-sm-6">HTML, CSS oraz JavaScript to trzy filary, które pozwalają tworzyć nie tylko strony internetowe, ale także inne elementy internetu. W swojej nauce skupiłem się więc na przyswojeniu najnowszych standardów, obowiązujących w każdej z tych dziedzin.</p>
                <p className="col-12 col-sm-6">Ukończyłem siedem miesięcznych kursów, ukoronowaniem których był anglojęzyczny kurs na Uniwersytecie Pennsylwania, noszący wdzięczną nazwę „Programming for the Web with JavaScript”, zakończony zdanym egzaminem i uzyskanym certyfikatem. Obecnie pracuję zgodnie ze standardami HTM5, CSS3 oraz ES6 (lub ES2015) dla języka JavaScript, przy czym dla tego ostatniego skupiam się czynnie na przyswajaniu nowości wprowadzanych w późniejszych latach.</p>
                <p className="col-12 col-sm-6">W swojej pracy aktywnie wdrażam i wykorzystuję najnowsze oraz najpopularniejsze biblioteki, korzystam także z frameworka React.js, pozwalającego na znacznie szybsze i, co najważniejsze, skuteczniejsze działania. Regularnie przyswajam oryginalne anglojęzyczne dokumentacje, chcąc pozostać na bieżąco ze zmianami, które nieustannie zachodzą w środowisku programistycznym.</p>
                {/* <p className="col-12 col-sm-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, ratione quidem architecto suscipit neque tempora. Doloremque deserunt corporis, accusamus dicta doloribus tempora hic sapiente sequi, quod velit culpa reiciendis adipisci?</p> */}
            </div>
            <div className="chapter row" id="chapterThree">
                <h4 className="col-12 title">Co mogę dla Ciebie stworzyć.</h4>
                <p className="col-12 col-sm-6">Jaka jest moja (i prawdopodobnie najlepsza z możliwych) odpowiedź na pytanie o to, co znajduje się w ofercie?</p>
                <p className="col-12 col-sm-6">Brzmi ona: a czego potrzebujesz?</p>
                <p className="col-12">Potrzebujesz trony internetowej typu „wizytówka”, oferującej potencjalnym klientom garść wiedzo o Twojej działalności, wskazującej drogi kontaktu z Twoją firmą za pomocą formularza kontaktowego, który będzie przekierowywać wiadomości na wskazany przez Ciebie adres? Nie ma sprawy! Wszystko to w pełni responsywne, czyli dostosowane zarówno do ekranów smartfonów, jak i do monitorów komputerów.</p>
                <p className="col-12">A może szukasz aplikacji do kontaktu z pracownikami? Miejsca, gdzie mogą zostawić dla Ciebie wiadomość, złożyć raport finansowy lub wniosek urlopowy? Nic prostszego! Mogę stworzyć stronę, która nie tylko zbierze potrzebne Ci informacje, ale także podliczy, jak to wszystko będzie wyglądać w miesięcznym podsumowaniu.</p>
                <p className="col-12">Chcesz sprzedawać swoje wyroby w sieci? Nie odpowiadają Ci dostępne w internecie usługi e-commerce i masz lepszy pomysł? Super! Według Twojego planu stworzę sklep internetowy, zawierający każdą niezbędną funkcjonalność, bazę produktów oraz klientów. Naturalnie z udostępnieniem kupującemu każdego możliwego sposobu płatności internetowej. </p>
            </div>

            <ParallaxMobile />
        </section>
    );
}

export default MobileMain;