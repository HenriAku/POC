<script setup lang="ts">
  import NavBar from './components/NavBar.vue'
  import Footer from './components/Footer.vue'
</script>

<template>
	<div class="has-background-white">
		<header>
			<NavBar></NavBar>
		</header>

		<div class="container">
			<main>
				<slot name="main"></slot>
			</main>
		</div>

		<footer>
			<Footer></Footer>
		</footer>
	</div>
</template>
