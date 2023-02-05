<template>
    <div>
        <div class="AdminNavContainer">
            <div class="AdminNavLogoArea">
                <router-link class="AdminNavMenu" to="/Admin">
                    <img src="../assets/img/logo_blackberry.png" class="AdminNavMenuLetterLogoImg">
                </router-link>
                Admin
            </div>
            <div class="AdminNavMenuArea">
                <router-link class="AdminNavMenu">지원자 관리</router-link>
                <router-link class="AdminNavMenu">멤버관리</router-link>
                <router-link class="AdminNavMenu">활동관리</router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Qwitcher+Grypen:wght@400;700&display=swap');

    .AdminNavContainer{
        width: 100vw;
        display: flex;
        justify-content: space-between;
        background-color: rgba(0, 0, 0, 0);
        height: 6rem;
        font-size: 2rem;
        z-index: 3;
        padding: 1rem 3rem;
        position: fixed;
    }
    .AdminNavLogoArea{
        display: flex;
        align-items: center;
        column-gap: 1rem;
        font-weight: bold;
        font-size: 1.7rem;
    }
    .AdminNavMenuLetterLogoImg{
        height: 4rem;
        width: 7rem;
    }
    .AdminNavMenuArea{
        display: flex;
        column-gap: 55px;
        align-items: center;
        padding: 0 1rem;
    }
        .AdminNavMenu{
            font-size: 1.5rem;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-weight: bold;
        }
        .AdminNavMenu:visited{
            text-decoration: none;
        }
    
</style>