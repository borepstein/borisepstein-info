import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import Clock from './Clock';
import HiveFeed from './HiveFeed';
import PersonalIntro from './PersonalIntro';
import StaticExternalLinks from './StaticExternalLinks';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <div class="container-fluid container">
		<div class="row-top row justify-content-center">
			Zulu time: <Clock />
		</div>
		<div class="row row-main">
			<div class="col-sm-4 col">
                        <PersonalIntro />
			</div>

			<div class="col">
				<p>Recent blog entries</p>

				<HiveFeed />
			</div>
		        <div class="col">
                                <StaticExternalLinks />
			</div>
                </div>
      
    </div>
  );
}

export default App;
