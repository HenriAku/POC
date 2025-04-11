<<<<<<< HEAD

declare const Vue: any;
=======
// @ts-ignore  
>>>>>>> 776743a4f6c919f932c8c73d126be60ab864e660

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
