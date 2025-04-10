<script setup lang="ts">
  import HelloWorld from './components/HelloWorld.vue'
  import Page from './components/Page.vue'
</script>

<template>
  <Page>
    <template v-slot:main>
      main
    </template>
  </Page>
</template>
