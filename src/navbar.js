import React, { Component } from 'react';

class NavBar extends Component {
	render() {
		return(
			<ul class="nav justify-content-center">
				<li class="nav-item">
					<a class="nav-link" target="_new" href="/assets/Resume.pdf">Resume</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" target="_new" href="https://github.com/SteveyPugs/">Github</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="mailto:stephen.pugliese@outlook.com">Email</a>
				</li>
			</ul>
		);
	}
}

export default NavBar; // Don’t forget to use export default!