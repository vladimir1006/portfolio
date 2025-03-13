<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/home">home</RouterLink>
    </nav>
</template>

<script setup>
</script>

<style scoped>
nav{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100vh;
    width: 200px;
    top: 0;
    left: 0;
    background-color: black;
    position: fixed;
}

</style>