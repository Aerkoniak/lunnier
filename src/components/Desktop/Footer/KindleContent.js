import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Menu from '../KindlePages/Menu'
import Bio from '../KindlePages/Bio';
import Skills from '../KindlePages/Skills'
import Offer from '../KindlePages/Offer'
import Hobby from '../KindlePages/Hobby'
import Contact from '../KindlePages/Contact'

const KindleContent = () => {


    return (
        <div className="content">


            <Switch>
                <Route exact path="/" component={Menu} />
                <Route path="/bio" component={Bio} />
                <Route path="/skills" component={Skills} />
                <Route path="/offer" component={Offer} />
                <Route path="/hobby" component={Hobby} />
                <Route path="/contact" component={Contact} />
            </Switch>

        </div>
    );
}

export default KindleContent;