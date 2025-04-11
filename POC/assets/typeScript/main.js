console.log("test")

const { createApp, ref } = Vue;

const App = {
	components: {
		NavBar,
		Footer,
	},
	template: `
		<div>
			<NavBar />
			<Boutique />
			<Footer />
		</div>
	`
};

createApp(App).mount('#app');
