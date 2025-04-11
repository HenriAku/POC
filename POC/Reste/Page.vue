<script setup lang="ts">
  import NavBar from './NavBar.vue'
  import Footer from './Footer.vue'
</script>

<template>
	<div class="has-background-white">
		<header>
			<NavBar></NavBar>
		</header>

		<div class="page-container">
			<main>
				<slot name="main"></slot>
			</main>
		</div>

		<footer>
			<Footer></Footer>
		</footer>
	</div>
</template>


<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 70vh; 
}
</style>
