import React from 'react';
import Clock from './Clock';
import './App.css';
import HiveFeed from './HiveFeed';

function PersonalIntro() {
    return(
        <div>
            <img src="https://i.postimg.cc/mDMYbbp5/me20110905.jpg" 
                          alt="Boris">
            </img>
	    <p><i>Boris</i></p>
            <p><i>Boston area, 2011</i></p>
        </div>
            );
}

function StaticExternalLinks() {
    return(
            <div>
            				<p>Links
					</p>

					<ul>

					<li><a href="https://peakd.com/@borepstein/posts" target="_blank">Blog</a></li>
					<li><a href="https://gab.com/borepstein" target="_blank">Gab</a></li>
					<li><a href="https://gettr.com/user/borepstein" target="_blank">Gettr</a></li>
					<li><a href="https://www.facebook.com/borepstein" target="_blank">Facebook</a></li>
					<li><a href="https://www.linkedin.com/in/borepstein/" target="_blank">LinkedIn</a></li>
					<li><a href="https://peakd.com/@borepstein/posts" target="_blank" rel="noopener noreferrer">Blog</a></li>
					<li><a href="https://gab.com/borepstein" target="_blank" rel="noopener noreferrer">Gab</a></li>
					<li><a href="https://parler.com/profile/Borepstein/posts" target="_blank" rel="noopener noreferrer">Parler</a></li>
					<li><a href="https://www.facebook.com/borepstein" target="_blank" rel="noopener noreferrer">Facebook</a></li>
					<li><a href="https://www.linkedin.com/in/borepstein/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
					</ul>
					
					<p>Contact</p>
					
					<ul>
					<li><a href="mailto:borisepstein@protonmail.com">E-Mail</a></li>
					</ul>
            </div>
            );
}

function App() {
  return (
                        
    <div className="App">
      <header className="App-header">
		<div className="timer-row">
			Zulu time: <Clock />
		</div>
       </header>
		<div className="row">
			<div className="column1">

                        <PersonalIntro />
			</div>

			<div className="column2">
				<p>Worthy of a look</p>

				<HiveFeed />
			</div>
			<div className="column3">
				<div class="Left-Alligned-Block">
                                <StaticExternalLinks />
				</div>
			</div>
                </div>
      
    </div>
  );
}

export default App;
