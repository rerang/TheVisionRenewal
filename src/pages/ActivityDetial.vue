<template>
    <div class="activityContainer">
        <div class="activityContentArea">
            <div class="activityStatSelectArea">
                <div class="activityStatSelect">진행중</div>
                <div class="activityStatSelect">마감</div>
            </div>
            <div class="activityContentOptionArea">
                <div class="activityContentSearchArea">
                    <img src="../assets/img/searchIcon.png" class="ctivityContentSearchIcon">
                    <input type="text" class="activityContentSearch" v-model="searchVal" placeholder="Search">
                </div>
                <div class="activityContentDisplaySelectArea">
                    <!-- <div class="activityContentDisplaySelect">목록</div>
                    <div class="activityContentDisplaySelect">칸</div> -->
                </div>
            </div>
            <div class="activityContentSearchResultArea">
                <div class="displayCard">
                    <div class="displayCardImgArea">
                        <img src="../assets/img/flying_bird.png" class="displayCardImg">
                    </div>
                    <div class="displayCardTitleArea">
                        This is Title! This is Title! This is Title! This is Title!
                    </div>
                </div>
                <div class="displayCard">
                    <div class="displayCardImgArea">
                        <img src="../assets/img/flying_bird.png" class="displayCardImg">
                    </div>
                    <div class="displayCardTitleArea">
                        This is Title! This is Title! This is Title! This is Title!
                    </div>
                </div>
                <div class="displayCard">
                    <div class="displayCardImgArea">
                        <img src="../assets/img/flying_bird.png" class="displayCardImg">
                    </div>
                    <div class="displayCardTitleArea">
                        This is Title! This is Title! This is Title! This is Title!
                    </div>
                </div>
                <div class="displayCard">
                    <div class="displayCardImgArea">
                        <img src="../assets/img/flying_bird.png" class="displayCardImg">
                    </div>
                    <div class="displayCardTitleArea">
                        This is Title! This is Title! This is Title! This is Title!
                    </div>
                </div>
                
                <div class="displayCard">
                    <div class="displayCardImgArea">
                        <img src="../assets/img/flying_bird.png" class="displayCardImg">
                    </div>
                    <div class="displayCardTitleArea">
                        This is Title! This is Title! This is Title! This is Title!
                    </div>
                </div>
                <!-- <div class="displayCardArea" >
                    <div class="displayCard">

                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script setup> 
    import { ref } from 'vue';



    let searchVal = ref("");

</script>

<style lang="scss">
    .activityContainer{
        padding: 9rem 0 4rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>