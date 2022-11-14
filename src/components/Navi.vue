<template>
    <div>
        <div class="navContainer">
            <div class="logoArea">
                <router-link class="menuLink" to="/Main">
                    <img src="../assets/img/letter_logo_black.png" class="letterLogoImg">
                </router-link>
            </div>
            <div class="menuArea">
                <div class="menuLinkArea">
                    <router-link class="menuLink" to="/activity">Activity</router-link>
                    <router-link class="menuLink" to="/apply">Apply</router-link>
                    <router-link class="menuLink" to="/login">Login</router-link>
                </div>
                <div class="menuBtnArea">
                    <img src="../assets/img/menu.png" class="menuImg">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Qwitcher+Grypen:wght@400;700&display=swap');

    .navContainer{
        display: grid;
        grid-template-columns: 1fr 1fr;
        background-color: rgba(0, 0, 0, 0);
        height: 7rem;
        font-size: 3rem;
        z-index: 3;
        padding: 1rem 2rem 0;
    }
    .logoArea{
    }
    .letterLogoImg{
        width: 10rem;
    }
    .menuArea{
        display: grid;
        grid-template-columns: 6fr 1fr;
    }
    .menuLinkArea{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
        align-items: center;
    }
    .menuLink{
        font-family: 'Qwitcher Grypen', cursive;
        font-weight: bold;
        text-decoration: none;
        color: black;
    }
    .menuLink:visited{
        text-decoration: none;
    }
    .menuBtnArea{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .menuImg{
        width: 3.5rem;
        height: 3.5rem;
    }
</style>