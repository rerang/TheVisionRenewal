<template>
    <div class="container">
        <Navi />
        <router-view class="pages"/>
    </div>

</template>

<script setup>
    import Navi from './components/Navi.vue';
</script>

<style>
    .pages{
        background: radial-gradient(circle, #E4F6FE,   #54B7DB);
        min-height: 100vh;
        padding: 9rem 0 5rem;
    }
</style>