<template>
<div>
    <div class="pagesContainer">
        <div class="mainBackgroundArea">
            <img class="mainBackgroundImg" src="../assets/img/flying_bird.png">
        </div>
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

//     $(".box").on('mousewheel',function(e){
// var wheel = e.originalEvent.wheelDelta;

// //스크롤값을 가져온다.
// if(wheel>0){
// //스크롤 올릴때
// $("p.result").html("올림..");
// } else {
// //스크롤 내릴때
// $("p.result").html("내림..");
// }
// });
</script>
    
<style>
    @font-face {
        font-family: 'HeyAugust';
        src: url('../assets/fonts/HeyAugust.otf');
    }
    .pagesContainer{
        display: flex;
        flex-direction: row;
        justify-content: center;                                         
        align-items: center;
        min-height: calc(100vh - 8rem);
    }
    .mainBackgroundArea{
        position: absolute;
    }
    .mainBackgroundImg{
        height: min(100vh, 70rem);
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