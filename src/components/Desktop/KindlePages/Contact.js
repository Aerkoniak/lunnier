import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../../../components/Contact/ContactForm';

const Contact = () => {
    return (
        <div className="contentPage">
            <p className="return"><Link to="/">wróć do spisu treści</Link></p>
            <p className="pageNumber">5</p>
            <ContactForm />
        </div>
    );
}

export default Contact;