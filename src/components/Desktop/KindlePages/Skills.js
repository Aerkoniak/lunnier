import React from 'react';
import { Link } from 'react-router-dom'

const Skills = () => {
    return (
        <div className="contentPage">
            <p className="return"><Link to="/">wróć do spisu treści</Link></p>
            <p className="pageNumber">2</p>
            <h3>Umiejętności i kursy</h3>
            <p className="par">HTML, CSS oraz JavaScript to trzy filary, które pozwalają tworzyć nie tylko strony internetowe, ale także inne elementy internetu. W swojej nauce skupiłem się więc na przyswojeniu najnowszych standardów, obowiązujących w każdej z tych dziedzin.</p>
            <p className="par">Ukończyłem siedem miesięcznych kursów, ukoronowaniem których był anglojęzyczny kurs na Uniwersytecie Pennsylwania, noszący wdzięczną nazwę „Programming for the Web with JavaScript”, zakończony zdanym egzaminem i uzyskanym certyfikatem</p>
            <p className="par">kliknij <a href="https://courses.edx.org/certificates/0133aa41d1574d6b8a960a45e8681b47">tutaj</a> by obejrzeć certyfikat</p>
            <p className="par">Obecnie pracuję zgodnie ze standardami HTM5, CSS3 oraz ES6 (lub ES2015) dla języka JavaScript, przy czym dla tego ostatniego skupiam się czynnie na przyswajaniu nowości wprowadzanych w późniejszych latach.</p>
            <p className="par">W swojej pracy aktywnie wdrażam i wykorzystuję najnowsze oraz najpopularniejsze biblioteki, korzystam także z frameworka React.js, pozwalającego na znacznie szybsze i, co najważniejsze, skuteczniejsze działania. Regularnie przyswajam oryginalne anglojęzyczne dokumentacje, chcąc pozostać na bieżąco ze zmianami, które nieustannie zachodzą w środowisku programistycznym.</p>
            <p className="par">W ostatnim etapie nauki opanowałem środowisko uruchomieniowe Node.js, umożliwiające tworzenie aplikacji typu ‘server-side’. Dzięki czemu mogę realizować wszystkie projekty wymagające jakichkolwiek działań po stronie serwera, takich jak obsługa wielorakich baz danych (preferuję bazy NoSQL), potrzebnych do uruchomienia wszelkiej maści blogów, sklepów internetowych, czy forów lub każdej innej aplikacji, która nie ma być jedynie internetową wizytówką o niezmienialnej treści.</p>
            <p className="return"><Link to="/">wróć do spisu treści</Link></p>
        </div>
    );
}

export default Skills;