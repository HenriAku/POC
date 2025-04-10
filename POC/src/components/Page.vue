<script setup lang="ts">
  import NavBar from './NavBar.vue'
  import Footer from './Footer.vue'
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
