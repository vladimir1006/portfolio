<script setup>
    import IframeSnake from '@/assets/iframe/snake.html';
</script>

<template>

    <div class="side-project-template">
        <a href="https://www.root-me.org/vladimir-785548" target="_blank">
            <img src="../assets/rootme-logo.png" style="width: 100px;"/>
        </a>
        <p>Root-me profile: </p>
    </div>
    <div class="side-project-template">
        
        <iframe :src="IframeSnake" 
                frameborder="0" 
                width="400" 
                height="400" 
                style="overflow: hidden;" 
                scrolling="no">
        ></iframe>
        <p>parler du snake auto solver, mettre le iframe (a voir si ca marche)</p>
    </div>
</template>

<style scoped>

.side-project-template {
    display: flex;
    flex-direction: row;
    align-items: center;
}
</style>