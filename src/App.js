import React from 'react';
import $ from 'jquery';
import Clock from './Clock';
import './App.css';


function App() {
  return (
    <div class="App">
      <header class="App-header">
		<div class="timer-row">
			<Clock />
		</div>
		<div class="row">
			<div class="column1">
        		<img src="https://i.postimg.cc/mDMYbbp5/me20110905.jpg" >
				</img>
			</div>
			<div class="column2">
				<p>Worthy of a look</p>
			</div>
			<div class="column3">
				<div class="Left-Alligned-Block">
					<p>Links
					</p>

					<ul>
					<li><a href="https://peakd.com/@borepstein/posts">Blog</a></li>
					<li><a href="https://gab.com/borepstein">Gab</a></li>
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
