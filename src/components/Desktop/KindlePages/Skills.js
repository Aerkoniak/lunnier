import React from 'react';
import { Link } from 'react-router-dom'

const Skills = () => {
    return (
        <div className="contentPage">
            <p className="return"><Link to="/">wróć do spisu treści</Link></p>
            <p className="pageNumber">2</p>
            <h3>Umiejętności i kursy</h3>
        </div>
    );
}

export default Skills;