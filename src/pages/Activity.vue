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
                        <img src="../assets/img/flying_bird.png" class="displayCardImg" @click="activityDetail">
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

    const activityDetail = () => {
        location.href = '/activitydetail';
    }
</script>

<style lang="scss">
    .activityContainer{
        padding: 0 0 4rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .activityContentArea{
        width: 80vw;
        padding: 2rem;
        background: radial-gradient(circle, #8dc3d4 30%, #E4F6FE 80%, #54B7DB);
        border-radius: 10px;

        .activityStatSelectArea{
            display: grid;
            grid-template-columns: 1fr 1fr;
            
            .activityStatSelect{
                text-align: center;
                height: 70px;
                font-size: 1.5rem;
                line-height: 70px;
            }
        }
        .activityContentOptionArea{
            padding: 2rem 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .activityContentSearchArea{
                display: flex;
                flex-direction: row;
                column-gap: 10px;
                border-bottom: 1px solid #000;
                width: 455px;
                align-items: center;
                padding: 0 10px;
                
                .ctivityContentSearchIcon{
                    width: 25px;
                    height: 25px;
                }
                .activityContentSearch{
                    width: 400px;
                    height: 50px;
                    padding: 0 10px;
                    border: none;
                    background-color: rgba(0, 0, 0, 0);
                    font-size: 1rem;
                }
                .activityContentSearch:focus{
                    outline: none;
                }
            }
            // .activityContentDisplaySelectArea{
            //     display: flex;
            //     column-gap: 10px;
                
            //     .activityContentDisplaySelect{

            //     }
            // }
        }
        .activityContentSearchResultArea{
            display: flex;
            flex-wrap: wrap;
            column-gap: 40px;
            row-gap: 20px;

            .displayCard{
                width: 370px;
                background-color: #fff;

                .displayCardImgArea{
                    padding: 10px;

                    .displayCardImg{
                        width: 350px;
                    }
                }
                .displayCardTitleArea{
                    border-top: 1px solid #000;
                    font-size: 1.2rem;
                    margin: 0 20px;
                    padding: 20px;
                    font-weight: bold;
                    width: 330x;
                    height: 70px;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                }
            }
        }
    }
</style>