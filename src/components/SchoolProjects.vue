<script setup>
    import { ref } from "vue";
    const projects = ref(["Project 1", "Project 2", "Project 3"]);
</script>

<template>
    <div class="school-projects">
        <h1>School Projects</h1>
        <ul>
            <li v-for="project in projects" :key="project.id">
                <h2>{{ project}}</h2>
                <!-- mettre un template pour les projects -->
            </li>
        </ul>
    </div>
</template>

<style scoped>
.school-projects {
    padding: 20px;
}

.school-projects h1 {
    font-size: 2em;
    margin-bottom: 20px;
}

.school-projects ul {
    list-style-type: none;
    padding: 0;
}

.school-projects li {
    margin-bottom: 20px;
}

.school-projects h2 {
    font-size: 1.5em;
    margin: 0;
}

.school-projects p {
    margin: 5px 0 0;
}
</style>