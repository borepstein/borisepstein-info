import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Clock from './Clock';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import HiveFeed from './HiveFeed';
import PersonalIntro from './PersonalIntro';
import StaticExternalLinks from './StaticExternalLinks';

function App() {
  return (
    <Container className="container-fluid" >                    
		<Row>
			Zulu time: <Clock />
		</Row>
		<Row>
			<Col>
                        <PersonalIntro />
			</Col>

			<Col>
				<p>Worthy of a look</p>

				<HiveFeed />
			</Col>
		        <Col>
                                <StaticExternalLinks />
			</Col>
                </Row>
      
    </Container>
  );
}

export default App;
