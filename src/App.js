import React from 'react';
import Clock from './Clock';
import './App.css';
import HiveFeed from './HiveFeed';

function App() {
  return (
<<<<<<< HEAD
    <div class="App">
	<div class="App-header">
            Zulu time: <Clock />
	</div>

      
        <div class="row">
			<div class="column1">
=======
    <div className="App">
      <header className="App-header">
		<div className="timer-row">
			Zulu time: <Clock />
		</div>
		<div className="row">
			<div className="column1">
>>>>>>> 34f5b1d413519b91e7db81e4fb7da923b34aefba
        		<img src="https://i.postimg.cc/mDMYbbp5/me20110905.jpg" 
                         alt="Boris">
				</img>
				<p><i>Boris</i></p>
				<p><i>Boston area, 2011</i></p>
			</div>
<<<<<<< HEAD
			<div class="column2">
				<p>Recent blog entries</p>
=======
			<div className="column2">
				<p>Worthy of a look</p>
>>>>>>> 34f5b1d413519b91e7db81e4fb7da923b34aefba
				<HiveFeed />
			</div>
			<div className="column3">
				<div class="Left-Alligned-Block">
					<p>Links
					</p>

					<ul>
<<<<<<< HEAD
					<li><a href="https://peakd.com/@borepstein/posts" target="_blank">Blog</a></li>
					<li><a href="https://gab.com/borepstein" target="_blank">Gab</a></li>
					<li><a href="https://gettr.com/user/borepstein" target="_blank">Gettr</a></li>
					<li><a href="https://www.facebook.com/borepstein" target="_blank">Facebook</a></li>
					<li><a href="https://www.linkedin.com/in/borepstein/" target="_blank">LinkedIn</a></li>
=======
					<li><a href="https://peakd.com/@borepstein/posts" target="_blank" rel="noopener noreferrer">Blog</a></li>
					<li><a href="https://gab.com/borepstein" target="_blank" rel="noopener noreferrer">Gab</a></li>
					<li><a href="https://parler.com/profile/Borepstein/posts" target="_blank" rel="noopener noreferrer">Parler</a></li>
					<li><a href="https://www.facebook.com/borepstein" target="_blank" rel="noopener noreferrer">Facebook</a></li>
					<li><a href="https://www.linkedin.com/in/borepstein/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
>>>>>>> 34f5b1d413519b91e7db81e4fb7da923b34aefba
					</ul>
					
					<p>Contact</p>
					
					<ul>
					<li><a href="mailto:borisepstein@protonmail.com">E-Mail</a></li>
					</ul>
				</div>
			</div>
        </div>
      
    </div>
  );
}

export default App;
