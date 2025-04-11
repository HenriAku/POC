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
			<Footer />
		</div>
	`
};
createApp(App).mount('#acheter');