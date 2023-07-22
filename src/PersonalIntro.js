import React from 'react';
import 'bootstrap/dist/js/bootstrap.min.js';
import './index.css';
import './App.css';

function PersonalIntro() {
/* Personal info scetion 
*/
    return(
        <div class="col">
        <div class="row">
            <img src="https://i.postimg.cc/mDMYbbp5/me20110905.jpg" 
                          alt="Boris">
            </img>
        </div>
        <div class="row">
	    <i>Boris</i>
        </div>
        <div class="row">
            <i>Boston area, 2011</i>
        </div>
        </div>
            );
}

export default PersonalIntro;
