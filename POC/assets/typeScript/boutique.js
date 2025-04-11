console.log("test")

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
			<Card />
			<Card />
			<Card />
			<Footer />
		</div>
	`
};

createApp(App).mount('#boutique');
