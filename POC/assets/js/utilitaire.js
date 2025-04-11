"use strict";
const NavBar = {
    template: `
			<nav class="navbar has-background-primary" role="navigation">
				<div class="navbar-menu">
					<div class="navbar-start">
						<a class="navbar-item has-text-white hoverable" href="index.html">Home</a>
						<a class="navbar-item has-text-white hoverable" href="Boutique.html">Boutique</a>
						<a class="navbar-item has-text-white hoverable" href="">Classement</a>
						<a class="navbar-item has-text-white hoverable" href="">Association</a>
					</div>
				</div>
			</nav>
			`
};
const Footer = {
    template: `
			<footer class="footer has-background-link" role="navigation">
				<div class="fixed-grid has-5-cols">
					<div class="grid">
						<div class="cell columns">
							<img src="assets/images/logo_salamander_esport.svg" alt="" class="image is-128x128">
							<h4 class="has-text-info is-size-3" >SALAMANDER <br><span class="has-text-primary is-size-2"> ESPORT</span></h4>
						</div>
						<div class="cell is-col-start-4 mt-6">
							<button class="hoverable button has-background-primary has-text-primary">Contacter-nous</button>
						</div>
						<div class="cell columns mt-6">
							<a href="https://discord.gg/y7w59V5d"><img src="assets/images/discord.png" alt=""  class="image is-48x48 mr-5"></a>
							<a href="https://x.com/SalamanderFGC"><img src="assets/images/twitter.png" alt=""  class="image is-48x48"></a>
						</div>
					</div>
				</div>
				<div class="has-text-centered">
					@Copyright Salamander Esport
				</div>
			</footer>
		`
};
