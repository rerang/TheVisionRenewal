<template>
    <div class="container">
        <Navi />
        <router-view />
    </div>

</template>

<script setup>
    import Navi from './components/Navi.vue';
</script>

<style>
    .container {
        height: 100vh;
        width: clamp(1906px, 100vw, 5120px);
        margin: 0;
        background: radial-gradient(circle, #E4F6FE,   #54B7DB);
    }
</style>