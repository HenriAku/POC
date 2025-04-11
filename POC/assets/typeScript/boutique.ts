declare const Vue: any;

const { createApp, ref } = Vue;


const App = {
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

createApp(App).mount('#boutique');
