import React, { useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ContactForm = () => {



    const [email, setEmail] = useState('lunnier@gmail.com');
    const [tel, setTel] = useState("+48739970530");
    const [copiedMail, setMailCopy] = useState(false);
    const [copiedTel, setTelCopy] = useState(false);

    return (
        <div className="contact" id="kontakt">
            <h4>Sposób na kontakt ze mną</h4>
            <a href={`mailto:${email}`} className="contactContent">Napisz coś do mnie</a>
            <CopyToClipboard text={email} onCopy={() => setMailCopy(true)}  >
                <span className="copySpan">{copiedMail ? "Skopiowano! - " : "lub skopiuj adres e-mail - "} <i className="far fa-copy"></i></span>
            </CopyToClipboard>
            <a href={`tel:${tel}`} className="contactContent" >Możesz też zadzwonić</a>
            <CopyToClipboard text={tel} onCopy={() => setTelCopy(true)}  >
                <span className="copySpan">{copiedTel ? "Skopiowano! - " : "lub skopiować mój numer telefonu - "}<i className="far fa-copy"></i></span>
            </CopyToClipboard>
        </div>
    );
}

export default ContactForm;
