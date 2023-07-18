import React from 'react';
import {Col, Row} from 'react-bootstrap';
import './index.css';
import './App.css';
// import '';

function PersonalIntro() {
/* Personal info scetion 
*/
    return(
        <Col>
        <Row>
            <img src="https://i.postimg.cc/mDMYbbp5/me20110905.jpg" 
                          alt="Boris">
            </img>
        </Row>
        <Row>
	    <i>Boris</i>
        </Row>
        <Row>
            <i>Boston area, 2011</i>
        </Row>
        </Col>
            );
}

export default PersonalIntro;
