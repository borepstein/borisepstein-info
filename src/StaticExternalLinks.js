import React from 'react';
import './index.css';
import './App.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function StaticExternalLinks() {
    return(
            <div class="row">
              <div class="row">Links</div>

	        <div class="row"><a href="https://peakd.com/@borepstein/posts" target="_blank">Blog</a></div>
		<div class="row"><a href="https://gab.com/borepstein" target="_blank">Gab</a></div>
		<div class="row"><a href="https://gettr.com/user/borepstein" target="_blank">Gettr</a></div>
		<div class="row"><a href="https://www.facebook.com/borepstein" target="_blank">Facebook</a></div>
		<div class="row"><a href="https://www.linkedin.com/in/borepstein/" target="_blank">LinkedIn</a></div>
		<div class="row"><a href="https://peakd.com/@borepstein/posts" target="_blank" rel="noopener noreferrer">Blog</a></div>
		<div class="row"><a href="https://gab.com/borepstein" target="_blank" rel="noopener noreferrer">Gab</a></div>
		<div class="row"><a href="https://www.linkedin.com/in/borepstein/" target="_blank" rel="noopener noreferrer">LinkedIn</a></div>

					
		<div class="row">Contact</div>
					
		<div class="row">
		<a href="mailto:borisepstein@protonmail.com">E-Mail</a>
		</div>
            </div>
            );
}

export default StaticExternalLinks;
