import React from 'react';
import Clock from './Clock';
import './App.css';
import HiveFeed from './HiveFeed';

function App() {
  return (
    <div class="App">
      <header class="App-header">
		<div class="timer-row">
			Zulu time: <Clock />
		</div>
		<div class="row">
			<div class="column1">
        		<img src="https://i.postimg.cc/mDMYbbp5/me20110905.jpg" 
                         alt="Boris">
				</img>
				<p><i>Boris</i></p>
				<p><i>Boston area, 2011</i></p>
			</div>
			<div class="column2">
				<p>Worthy of a look</p>
				<HiveFeed />
			</div>
			<div class="column3">
				<div class="Left-Alligned-Block">
					<p>Links
					</p>

					<ul>
					<li><a href="https://peakd.com/@borepstein/posts">Blog</a></li>
					<li><a href="https://gab.com/borepstein">Gab</a></li>
					<li><a href="https://parler.com/profile/Borepstein/posts">Parler</a></li>
					<li><a href="https://www.facebook.com/borepstein">Facebook</a></li>
					<li><a href="https://www.linkedin.com/in/borepstein/">LinkedIn</a></li>
					</ul>
					
					<p>Contact</p>
					
					<ul>
					<li><a href="mailto:borisepstein@protonmail.com">E-Mail</a></li>
					</ul>
				</div>
			</div>
		</div>
      </header>
    </div>
  );
}

export default App;
