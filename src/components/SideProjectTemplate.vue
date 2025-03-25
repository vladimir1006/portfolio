<script setup>
    // déployer snake.html sur github-pages et faire un iframe du lien publique !!!
    //import IFrameSnake from '@/assets/snake';
</script>

<template>

    <div class="side-project-template">
        <a href="https://www.root-me.org/vladimir-785548" target="_blank">
            <img src="../assets/rootme-logo.png" style="width: 100px;"/>
        </a>
        <p>Root-me profile: </p>
    </div>
    <div class="side-project-template">
    <iframe src="https://vladimir1006.github.io/snake/" frameborder="0"
            width="700" 
            height="600" 
            style="overflow: hidden;" 
            scrolling="no"
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