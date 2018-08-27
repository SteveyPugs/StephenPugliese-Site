import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import NavBar from "./navbar"

class App extends Component {
	render(){
		return (
			<div class="container">
				<br />
				<NavBar></NavBar>
				<br />
				<div class="list-group">
					<a target="_new" href="https://tps.acupaysystem.com" class="list-group-item list-group-item-action flex-column align-items-start">
						<div class="d-flex w-100 justify-content-between">
							<h5 class="mb-1">Tax Processing Services</h5>
						</div>
						<p class="mb-1">Platform for Italitan Tax Relief</p>
						<small>Click to Visit</small>
					</a>
					<a target="_new" href="http://www.alternateside.nyc" class="list-group-item list-group-item-action flex-column align-items-start">
						<div class="d-flex w-100 justify-content-between">
							<h5 class="mb-1">Alternate Side NYC</h5>
						</div>
						<p class="mb-1">Website devoted to Alternate Side Parking in NYC</p>
						<small>Click to Visit</small>
					</a>
					<a target="_new" href="http://www.tweedlesbakery.com" class="list-group-item list-group-item-action flex-column align-items-start">
						<div class="d-flex w-100 justify-content-between">
							<h5 class="mb-1">Tweedles Bakery</h5>
						</div>
						<p class="mb-1">Bakery website devoted to advertisement and sale of baked goods</p>
						<small>Click to Visit</small>
					</a>
					<a target="_new" href="http://www.thetopcorn.com" class="list-group-item list-group-item-action flex-column align-items-start">
						<div class="d-flex w-100 justify-content-between">
							<h5 class="mb-1">The Top Corn</h5>
						</div>
						<p class="mb-1">Website to find the best popcorn near you</p>
						<small>Click to Visit</small>
					</a>
					<a target="_new" href="https://www.npmjs.com/package/fixy" class="list-group-item list-group-item-action flex-column align-items-start">
						<div class="d-flex w-100 justify-content-between">
							<h5 class="mb-1">Fixy</h5>
						</div>
						<p class="mb-1">Node.js NPM to translate fixed length text and parse it back in a useable format</p>
						<small>Click to Visit</small>
					</a>
					<a target="_new" href="https://www.seekandfindinc.com" class="list-group-item list-group-item-action flex-column align-items-start">
						<div class="d-flex w-100 justify-content-between">
							<h5 class="mb-1">Seek and Find Inc.</h5>
						</div>
						<p class="mb-1">Platform for Seek and Find Inc's Order System</p>
						<small>Click to Visit</small>
					</a>
				</div>
			</div>
		);
	};
}

export default App;