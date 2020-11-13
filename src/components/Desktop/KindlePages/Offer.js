import React from 'react';
import { Link } from 'react-router-dom';

const Offer = () => {
    return (
        <div className="contentPage">
            <p className="return"><Link to="/">wróć do spisu treści</Link></p>
            <p className="pageNumber">3</p>
            <h3>Co mogę Ci zaoferować</h3>
            <p className="par">Jaka jest moja (i prawdopodobnie najlepsza z możliwych) odpowiedź na pytanie o to, co znajduje się w ofercie?</p>
            <p className="par">Brzmi ona: a czego potrzebujesz?</p>
            <p className="par">Potrzebujesz strony internetowej typu „wizytówka”, oferującej potencjalnym klientom garść wiedzo o Twojej działalności, wskazującej drogi kontaktu z Twoją firmą za pomocą formularza kontaktowego, który będzie przekierowywać wiadomości na wskazany przez Ciebie adres? Nie ma sprawy! Wszystko to w pełni responsywne, czyli dostosowane zarówno do ekranów smartfonów, jak i do monitorów komputerów.</p>
            <p className="par">A może szukasz aplikacji do kontaktu z pracownikami? Miejsca, gdzie mogą zostawić dla Ciebie wiadomość, złożyć raport finansowy lub wniosek urlopowy? Nic prostszego! Mogę stworzyć stronę, która nie tylko zbierze potrzebne Ci informacje, ale także podliczy, jak to wszystko będzie wyglądać w miesięcznym podsumowaniu.</p>
            <p className="par">Chcesz sprzedawać swoje wyroby w sieci? Nie odpowiadają Ci dostępne w internecie usługi e-commerce i masz lepszy pomysł? Super! Według Twojego planu stworzę sklep internetowy, zawierający każdą niezbędną funkcjonalność, bazę produktów oraz klientów. Naturalnie z udostępnieniem kupującemu każdego możliwego sposobu płatności internetowej. </p>
            <p className="return"><Link to="/">wróć do spisu treści</Link></p>
        </div>
    );
}

export default Offer;