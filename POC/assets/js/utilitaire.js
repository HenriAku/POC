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
const Page = {
    components: {
        NavBar,
        Footer
    },
    template: `
			<div class="has-background-white">
				<header>
					<NavBar />
				</header>

				<div class="page-container">
					<main>
						<slot name="main"></slot>
					</main>
				</div>

				<footer>
					<Footer />
				</footer>
			</div>
			`
};
const Card = {
    setup() {
        const nom = ref(["Alice", "Bob", "Charlie", "David", "Eve"]);
        const img = ref('./assets/images/logo_salamander_esport.svg');
        const taille = ref(null);
        const ind = Math.floor(Math.random() * nom.value.length);
        const desc = ref(`Vend ${nom.value[ind]} en biengin`);
        const changementImage = (newImg) => {
            img.value = newImg;
        };
        const getTaille = () => {
            if (taille.value == null)
                return 'Tailles';
            return taille.value;
        };
        const changementTaille = (newTaille) => {
            taille.value = newTaille;
        };
        const isModalVisible = ref(false);
        const openModal = () => {
            isModalVisible.value = true;
        };
        const closeModal = () => {
            isModalVisible.value = false;
        };
        const getImageInfos = () => {
            return img.value;
        };
        const getRandomNom = () => {
            return nom.value[ind];
        };
        const getDescription = () => {
            return desc.value;
        };
        const getInfos = () => {
            var _a;
            return `
			<p>${getRandomNom()}</p>
			<p>${getDescription()}</p>
			<p>Taille : ${(_a = taille.value) !== null && _a !== void 0 ? _a : "Taille pas spécifiée"}</p>
			`;
        };
        return {
            img,
            changementImage,
            isModalVisible,
            openModal,
            closeModal,
            taille,
            getTaille,
            changementTaille,
            getImageInfos,
            getInfos,
            getRandomNom,
            desc,
            getDescription
        };
    },
    template: `
		<div class="columns is-centered m-4">
			<div class="column is-one-sixth">
				<div class="card has-background-link has-text-primary">
					<div class="card-image">
						<figure class="image">
							<img
								class="image is-128x128"
								:src=img
								alt="Placeholder image"
							/>
						</figure>
					</div>
					<div class="card-content">
						<div class="media">
							<div class="media-content">
								<p class="title is-4 has-text-primary" id="title">{{getRandomNom()}}</p>
							</div>
						</div>

						<div class="content" id="desc">
							Vend {{getRandomNom()}} en biengin
						</div>
						<div class="field is-grouped mt-3">
							<div class="control">
								<details class="dropdown is-block">
									<summary class="button hoverable has-background-primary has-text-primary">{{getTaille()}}</summary>
									<div class="dropdown-menu is-block has-background-link">
										<div class="dropdown-content has-background-link">
											<ul>
												<li><a @click="changementTaille('XXL')" href="#" class="dropdown-item has-background-link" style="max-width: 60%;">XXL</a></li>
												<li><a @click="changementTaille('XL')"  href="#" class="dropdown-item has-background-link" style="max-width: 60%;">XL</a></li>
												<li><a @click="changementTaille('L')"   href="#" class="dropdown-item has-background-link" style="max-width: 60%;">L</a></li>
												<li><a @click="changementTaille('M')"   href="#" class="dropdown-item has-background-link" style="max-width: 60%;">M</a></li>
												<li><a @click="changementTaille('S')"   href="#" class="dropdown-item has-background-link" style="max-width: 60%;">S</a></li>
												<li><a @click="changementTaille('XS')"  href="#" class="dropdown-item has-background-link" style="max-width: 60%;">XS</a></li>
											</ul>
										</div>
									</div>
								</details>
							</div>

							<div class="control">
								<details class="dropdown is-block">
									<summary class="button hoverable has-background-primary has-text-primary">Variantes</summary>
									<div class="dropdown-menu is-block has-background-link">
										<div class="dropdown-content has-background-link">
											<ul>
												<li><a @click="changementImage('./assets/images/vague_salamander_esport.svg')" href="#" class="dropdown-item has-background-link" style="max-width: 60%;">Vagues</a></li>
												<li><a @click="changementImage('./assets/images/logo_salamander_esport.svg')" href="#" class="dropdown-item has-background-link" style="max-width: 60%;">Poing</a></li>
											</ul>
										</div>
									</div>
								</details>
							</div>

							<div class="control">
								<button @click="openModal" class="button has-background-primary has-text-primary hoverable">Acheter</button>
								<div v-if="isModalVisible" class="modal is-active">
									<div class="modal-background" @click="closeModal"></div>
									<div class="modal-content">
										<div class="box has-background-link">
											<h1 class="title has-background-link">Récap de vos achats</h1>
											<img class="image is-64x64" :src=img />
											<p class="has-background-link" v-html="getInfos()"></p>
											<button @click="closeModal" class="button has-background-danger has-text-white">Fermer</button>
										</div>
									</div>
									<button class="modal-close is-large" @click="closeModal" aria-label="close"></button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		`
};
