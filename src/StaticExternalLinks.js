import React from 'react';
import {Col, Row} from 'react-bootstrap';
import './index.css';
import './App.css';
// import '';

function StaticExternalLinks() {
    return(
            <Row>
              <Row>Links</Row>

	        <Row><a href="https://peakd.com/@borepstein/posts" target="_blank">Blog</a></Row>
		<Row><a href="https://gab.com/borepstein" target="_blank">Gab</a></Row>
		<Row><a href="https://gettr.com/user/borepstein" target="_blank">Gettr</a></Row>
		<Row><a href="https://www.facebook.com/borepstein" target="_blank">Facebook</a></Row>
		<Row><a href="https://www.linkedin.com/in/borepstein/" target="_blank">LinkedIn</a></Row>
		<Row><a href="https://peakd.com/@borepstein/posts" target="_blank" rel="noopener noreferrer">Blog</a></Row>
		<Row><a href="https://gab.com/borepstein" target="_blank" rel="noopener noreferrer">Gab</a></Row>
	        <Row><a href="https://www.facebook.com/borepstein" target="_blank" rel="noopener noreferrer">Facebook</a></Row>
		<Row><a href="https://www.linkedin.com/in/borepstein/" target="_blank" rel="noopener noreferrer">LinkedIn</a></Row>

					
		<Row>Contact</Row>
					
		<Row>
		<a href="mailto:borisepstein@protonmail.com">E-Mail</a>
		</Row>
            </Row>
            );
}

export default StaticExternalLinks;
