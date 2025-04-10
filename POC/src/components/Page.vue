<template>
	<div class="has-background-white">
		<header>
			<slot name="header"></slot>
		</header>

		<div class="container">
			<main>
				<slot name="main"></slot>
			</main>

			<footer>
				<slot name="footer"></slot>
			</footer>
		</div>
	</div>
</template>
