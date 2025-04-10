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
      <div class="columns is-multiline">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </template>
    <template v-slot:footer>
    </template>
  </Page>
</template>