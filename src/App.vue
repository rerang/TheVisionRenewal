<template>
    <div class="container">
        <component :is="naviComponent" />
        <router-view class="pages"/>
    </div>

</template>

<script setup>
    import { ref } from 'vue';
    import Navi from './components/Navi.vue';
    import AdminNavi from './components/AdminNavi.vue';


    let naviComponent = ref(Navi)
    if(window.location.pathname !== "/Admin"){
        naviComponent = Navi;
    }else{
        naviComponent = AdminNavi;
    }
</script>

<style>
    .pages{
        background: radial-gradient(circle, #E4F6FE,   #54B7DB);
        min-height: 100vh;
        padding: 9rem 0 0;
    }
</style>