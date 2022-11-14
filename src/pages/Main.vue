<template>
<div>
    <div class="pagesContainer">
        <img class="mainBackgroundImg" src="../assets/img/flying_bird.png">
        
        <div class="sloganArea">
            <div class="slogan_left">Be Competitive,</div>
            <div class="slogan_right">Move Forward</div>
        </div>
        
    </div>
</div>
</template>
    
<script setup> 
    const moveSlogan = (_event) => {
        console.log(_event);
    }
    window.addEventListener("scroll", moveSlogan);


</script>
    
<style>
    @font-face {
        font-family: 'HeyAugust';
        src: url('../assets/fonts/HeyAugust.otf');
    }
    .pagesContainer{
        width: 100vw;
        padding: 8rem 0 0;
        display: flex;
        flex-direction: row;
        justify-content: center;                                         
        align-items: center;
        min-height: 100vh;
        background: radial-gradient(circle, #E4F6FE,   #54B7DB);
    }
    .mainBackgroundImg{
        display: none;
    }
    .sloganArea{
        font-family: 'HeyAugust';
        color: #ffffff;
        font-size: min(17rem, 250px);
        width: 100%;
        text-align: center;
        z-index: 2;
        overflow: hidden;
    }
    .slogan_left{
        transform: translateX(-55vw);
    }
    .slogan_right{
        transform: translateX(+55vw);
    }


</style>