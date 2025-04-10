<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Page from './components/Page.vue'
import NavBar from './components/NavBar.vue'
import Card from './components/Card.vue'

</script>

<template>
  <Page>
    <template v-slot:header>
      <NavBar></NavBar>
    </template>
    <template v-slot:main>
      <Card></Card>
    </template>
    <template v-slot:footer>
      bilel
    </template>
  </Page>
</template>