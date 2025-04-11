<<<<<<< HEAD
declare const Vue: any;
=======
>>>>>>> 776743a4f6c919f932c8c73d126be60ab864e660

// @ts-ignore  
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
