<script setup>
  import NavBar from './components/NavBar.vue';
  import { RouterView } from 'vue-router';
</script>

<template>
  <header>
    <NavBar />
  </header>
  <main>
    <RouterView />
    <!-- <Home/>
    <Presentation/>
    <SideProject/>
    <SchoolProjects/>
    <CVComponent/> -->
  </main>
</template>

<style scoped>

</style>
