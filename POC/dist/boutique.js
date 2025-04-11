"use strict";
// @ts-ignore  
const { createApp, ref } = Vue;
const Boutique = {
    components: {
        NavBar,
        Card,
        Footer,
    },
    template: `
		<div>
			<NavBar />
			<div class="columns is-multiline">
				<Card class="cells"/>
				<Card class="cells"/>
				<Card class="cells"/>
				<Card class="cells"/>
				<Card class="cells"/>
				<Card class="cells"/>
			</div>
			<Footer />
		</div>
	`
};
createApp(Boutique).mount('#boutique');
