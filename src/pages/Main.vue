<template>
<div class="mainContainer">
    <div class="pagesContainer">
        <div class="bgCover"></div>  
        <div class="pagesWrapper">
            <div class="sloganContainer">          
                <div class="sloganArea">
                    <div class="slogan_left" :style="{transform:sloganLeftStyle, transition: '0.2s ease-out'}">Be Competitive,</div>
                    <div class="slogan_right" :style="{transform:sloganRightStyle, transition: '0.2s ease-out'}">Move Forward</div>
                </div>
            </div>
            <div class="introductionContainer">
                asdfkl;jasd
            </div>
        </div>
    </div>
</div>
</template>
    
<script setup> 
    import { ref, onMounted, watch } from 'vue';
    import sloganBg from '../assets/img/logo_white.png'

    const sloganMoveVW = 6;
    let sloganLeftVal = ref(-20);
    let sloganRightVal = ref(+20);
    let sloganLeftStyle = ref('translateX(' + sloganLeftVal.value + 'vw)');
    let sloganRightStyle = ref('translateX(' + sloganRightVal.value + 'vw)');
    watch(sloganLeftVal, ()=>{
        sloganLeftStyle.value = 'translateX(' + sloganLeftVal.value + 'vw)';
        sloganRightStyle.value = 'translateX(' + sloganRightVal.value + 'vw)';
    })
    let sloganBgOpacity = ref(0);

    
    let direction = ref(0);
    const getDirection = (event) => {
        if(window.location.pathname == "/Main"){
            direction.value = event.deltaY > 0 ? 1 : -1; //1: down, -1: up
        }
    }

    let pageContent = ref("slogan");

    const moveSlogan = (event) => {
        let bgCover = document.querySelector(".bgCover");
        let pagesWrapper = document.querySelector(".pagesWrapper");

        //start event 
        if(direction.value > 0){//scroll down
            if(sloganLeftVal.value == 100){
                //change to intro
            }
            if(sloganLeftVal.value < 100){
                sloganLeftVal.value += sloganMoveVW;
                sloganRightVal.value -= sloganMoveVW;
            }else{
                pagesWrapper.setAttribute("style", "transform: translateX(-100vw)");
            }
            if(sloganLeftVal.value > 25 && sloganBgOpacity.value <= 1 && sloganLeftVal.value < 100){
                sloganBgOpacity.value += 0.1;
            }else if(sloganLeftVal.value > 45){
                sloganBgOpacity.value = 1;
            }
        }else if(direction.value < 0){//scroll up
            if(sloganLeftVal.value > -30){
                sloganLeftVal.value -= sloganMoveVW;
                sloganRightVal.value += sloganMoveVW;
            }else{
                sloganLeftVal.value = 5;
                sloganRightVal.value = -5;
            }
            if(sloganLeftVal.value > 15 && sloganBgOpacity.value >= 0){
                sloganBgOpacity.value -= 0.1;
            }else if(sloganLeftVal.value > -10){
                sloganBgOpacity.value = 0;
            }
        }
        bgCover.setAttribute("style", "background:url(" + sloganBg + ") no-repeat center/45vw;" + "opacity:" + sloganBgOpacity.value + "");
    }

    onMounted(()=>{
        window.addEventListener('mousewheel', (event)=>{getDirection(event); moveSlogan();});
        document.querySelector(".bgCover").setAttribute("style", "background:url(" + sloganBg + ") no-repeat center/45vw;");
    })
</script>
    
<style lang="scss">
    @font-face {
        font-family: 'HeyAugust';
        src: url('../assets/fonts/HeyAugust.otf');
    }
    .pagesContainer{
        width: 100vw;
        height: calc(100vh - 9rem);
        box-sizing: border-box;
        overflow: hidden;
        padding: 0;
        display: flex;
        flex-direction: row;                      
        align-items: center;
    }
    .bgCover{
        width: 100vw;
        height: calc(100vh - 9rem);
        position: absolute;
        opacity: 0;
        transform: translateY(-3rem);
    }
    .pagesWrapper{
        display: flex;
        flex-direction: row;                      
        align-items: center;
        height: calc(100vh - 9rem);
    }
    .sloganContainer{
        width: 100vw;
        height: calc(100vh - 9rem);
        position: relative;
        display: flex;
        align-items: center;

        .sloganArea{
            font-family: 'HeyAugust';
            color: #ffffff;
            font-size: min(14rem, 250px);
            width: 100vw;
            text-align: center;
            position: relative;
            z-index: 2;
            overflow: hidden;
        }
        .slogan_left{
        }
        .slogan_right{
        }
    }
</style>