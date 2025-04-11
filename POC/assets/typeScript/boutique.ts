
<<<<<<< HEAD
declare const Vue: any;
=======
// @ts-ignore  
>>>>>>> 776743a4f6c919f932c8c73d126be60ab864e660

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
