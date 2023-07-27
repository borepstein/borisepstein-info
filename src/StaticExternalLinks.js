import React from 'react';
import './index.css';
import './App.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function StaticExternalLinks() {
    return(
            <div class="row">
              <div class="row"><h3>Links</h3></div>

	        <div class="row"><a href="https://peakd.com/@borepstein/posts" target="_blank">Blog</a></div>
		<div class="row"><a href="https://gab.com/borepstein" target="_blank">Gab</a></div>
		<div class="row"><a href="https://gettr.com/user/borepstein" target="_blank">Gettr</a></div>
		<div class="row"><a href="https://www.facebook.com/borepstein" target="_blank">Facebook</a></div>
		<div class="row"><a href="https://www.linkedin.com/in/borepstein/" target="_blank">LinkedIn</a></div>
		<div class="row"><a href="https://roarofsanity.substack.com/" target="_blank">Substack</a></div>
               <div class="row"><a href="https://borisepstein.locals.com/" target="_blank">Locals</a></div>
					
		<div class="row"><h3>Contact</h3></div>
					
		<div class="row">
		<a href="mailto:borisepstein@protonmail.com">E-Mail</a>
		</div>
            </div>
            );
}

export default StaticExternalLinks;
