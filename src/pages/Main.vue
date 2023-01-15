<template>
<div>
    <div class="pagesContainer">
        <div class="sloganContainer">
            <img class="mainBackgroundImg" src="../assets/img/flying_bird.png">
            
            <div class="sloganArea">
                <div class="slogan_left" :style="{transform:sloganLeftStyle}">Be Competitive,</div>
                <div class="slogan_right" :style="{transform:sloganRightStyle}">Move Forward</div>
            </div>
        </div>
        
        <div class="introductionContainer">
            <div class="space">
                
            </div>
            
        </div>
    </div>
    
</div>
</template>
    
<script setup> 
    import { ref, onMounted, watch } from 'vue';

    const sloganMoveVW = 3;
    let sloganLeftVal = ref(-55);
    let sloganRightVal = ref(+55);
    let sloganLeftStyle = ref('translateX(' + sloganLeftVal.value + 'vw)');
    let sloganRightStyle = ref('translateX(' + sloganRightVal.value + 'vw)');
    watch(sloganLeftVal, ()=>{
        sloganLeftStyle.value = 'translateX(' + sloganLeftVal.value + 'vw)';
        sloganRightStyle.value = 'translateX(' + sloganRightVal.value + 'vw)';
    })

    
    let direction = ref(0);

    const getDirection = (event) => {
        window.scrollTo(0, 0);
        console.log(event);
        direction.value = event.deltaY > 0 ? 1 : -1; //1: down, -1: up
        moveSlogan();
    }
    const moveSlogan = (event) => {
        
        //start event 
        if(direction.value > 0){//scroll down
            if(sloganLeftVal.value == 100){
                //change to intro
            }
            sloganLeftVal.value += sloganMoveVW;
            sloganRightVal.value -= sloganMoveVW;
        }else if(direction.value < 0){//scroll up
            sloganLeftVal.value -= sloganMoveVW;
            sloganRightVal.value += sloganMoveVW;
        }
        if(25~30){
            새 만들기
        }

    }

    onMounted(()=>{
        window.addEventListener('mousewheel', getDirection);
    })
</script>
    
<style lang="scss">
    @font-face {
        font-family: 'HeyAugust';
        src: url('../assets/fonts/HeyAugust.otf');
    }
    .pagesContainer{
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        padding: 8rem 0 0;
        display: flex;
        flex-direction: row;
        justify-content: center;                                         
        align-items: center;
        background: radial-gradient(circle, #E4F6FE,   #54B7DB);
    }
    .sloganContainer{
        width: 100vw;

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
        }
        .slogan_right{
        }
    }
    

    .space{
        min-height: 100vh;
    }

</style>