// @ts-ignore  

const { createApp, ref } = Vue;

const Acheter = {
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

createApp(Acheter).mount('#acheter');
