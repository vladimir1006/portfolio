<script setup>
import cvPdf from '@/assets/Ablancourt-3.pdf';
</script>

<template>
    <div class="cv-component">
        <h1>Curriculum Vitae</h1>
        <a :href="cvPdf" download>Download CV</a>
    </div>
</template>


<style scoped>

</style>