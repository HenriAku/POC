declare const Vue: any;

const { createApp, ref } = Vue;

const App = {
	components: {
		NavBar,
		Footer,
	},
	template: `
		<div>
			<NavBar />
			<Footer />
		</div>
	`
};

createApp(App).mount('#app');
