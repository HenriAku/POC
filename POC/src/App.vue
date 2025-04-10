<script setup lang="ts">
  import HelloWorld from './components/HelloWorld.vue'
  import Page from './components/Page.vue'
  import NavBar from './components/NavBar.vue'
  import Footer from './components/Footer.vue'
</script>

<template>
  <Page>
    <template v-slot:header>
      <NavBar></NavBar>
    </template>
    <template v-slot:main>
      main
    </template>
    <template v-slot:footer>
      <Footer></Footer>
    </template>
  </Page>
</template>
