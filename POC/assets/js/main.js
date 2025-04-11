"use strict";
// @ts-ignore  
const { createApp, ref } = Vue;
const App = {
    components: {
        NavBar,
        Footer,
        Card
    },
    template: `
		<div>
			<NavBar />
			<Card />
			<Footer />
		</div>
	`
};
createApp(App).mount('#app');
