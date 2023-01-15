<template>
    <div class="LoginForm">
        <h1>로그인</h1>
        <br>
<<<<<<< HEAD
        <form name="Login" class="Login">
            <label for="st_num" style="margin:18px">학번 </label>
            <input type="text" class="st_num" v-model="st_num">
            <br><br>
            <label for="pass" style="margin:3px">비밀번호 </label>
            <input type="password" class="pass" v-model="pass">
        </form>
        <br><br>
        <div class="frame join_btn">
            <button class="custom-btn btn" @click="LoginSubmit()"><span>로그인</span></button>
        </div>
=======
        <form name="Login">
            <label for="st_num" style="margin:18px">학번 </label>
            <input type="text" id="st_num" v-model="st_num">
            <br><br>
            <label for="pass" style="margin:3px">비밀번호 </label>
            <input type="password" id="pass" v-model="pass">
        </form>
        <br><br>
        <button id="submit" @click="LoginSubmit()">로그인</button>
>>>>>>> 0c94b16f3287bd5e989c915498aa2970d655871d
    </div>
    
</template>

<script setup>
    
    /* eslint-disable */
    
<<<<<<< HEAD
    import router from '@/router';
    import axios from 'axios'
    import {ref} from 'vue';

    axios.defaults.withCredentials = true;
    let st_num = ref('');
    let pass = ref('');

    function LoginSubmit() {

        

        axios.post('https://jsonplaceholder.typicode.com/users/', 
            {
                st_num: st_num.value,
                pass: pass.value  
=======
    import axios from 'axios'
    axios.defaults.withCredentials = true;

    function LoginSubmit() {

        var st_Num = document.getElementById("st_num");
        var Pass = document.getElementById("pass");

        axios.post('https://jsonplaceholder.typicode.com/users/', 
            {
                st_num: st_Num.value,
                pass: Pass.value  
>>>>>>> 0c94b16f3287bd5e989c915498aa2970d655871d
            }
            )
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });


        axios.get('https://jsonplaceholder.typicode.com/users/', 
            {
                log_tf: ""
            }
            )
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        if(log_tf == true){
            alert("Login success!");
        }
        else{
            alert("Login faill!");
<<<<<<< HEAD
        }
        
        router.push('/loginsuccess');
=======
        }        
>>>>>>> 0c94b16f3287bd5e989c915498aa2970d655871d

    }

</script>

<style>
<<<<<<< HEAD
    @font-face {
        font-family: 'HallymGothic-Regular';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2204@1.0/HallymGothic-Regular.woff2') format('woff2');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'SEBANG_Gothic_Bold';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2104@1.0/SEBANG_Gothic_Bold.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    body {
        height: 100vh;
        background-image: url("C:\학교\동아리\thevision\src\assets\images\background.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
    h1 {
        font-size: 50px;
        font-family: 'SEBANG_Gothic_Bold';
        margin: 10px 0 30px 0;
        color: rgb(67, 88, 107);
    }
    .LoginForm {
        background-color: white;
        width: 600px;
        height: 300px;
        font-family: 'HallymGothic-Regular';
        font-size: 17px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 70px;
        margin-top: 70px;
        text-align: center;
        padding: 50px 50px 50px 50px;
        color: rgb(16, 27, 48);
    }
    .frame {
        width: 90%;
        margin: -10px auto;
        text-align: center;
    }
    .custom-btn {
        width: 130px;
        height: 40px;
        color: #fff;
        border-radius: 10px;
        padding: 5px 10px;
        font-family: 'HallymGothic-Regular';
        font-size: 20px;
        font-weight: 500;
        background: transparent;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
        display: inline-block;
        box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
        7px 7px 20px 0px rgba(0,0,0,.1),
        4px 4px 5px 0px rgba(0,0,0,.1);
        outline: none;
        margin: -20px 0 0 0;
    }
    .btn {
        background: rgb(71, 170, 210);
        background: linear-gradient(0deg, rgb(97, 161, 186) 0%, rgb(192, 220, 249) 100%);
        width: 130px;
        height: 40px;
        line-height: 42px;
        padding: 0;
        border: none;  
    }
    .btn span {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
    }
    .btn:before,
    .btn:after {
        position: absolute;
        content: "";
        right: 0;
        top: 0;
        background: rgb(134, 175, 213);
        transition: all 0.3s ease;
        }
    .btn:before {
        height: 0%;
        width: 2px;
    }
    .btn:after {
        width: 0%;
        height: 2px;
    }
    .btn:hover{
        background: transparent;
        box-shadow: none;
    }
    .btn:hover:before {
        height: 100%;
    }
    .btn:hover:after {
        width: 100%;
    }
    .btn span:hover{
        color: rgb(67, 88, 107);
    }
    .btn span:before,
    .btn span:after {
        position: absolute;
        content: "";
        left: 0;
        bottom: 0;
        background:  rgb(134, 175, 213);
        transition: all 0.3s ease;
    }
    .btn span:before {
        width: 2px;
        height: 0%;
    }
    .btn span:after {
        width: 0%;
        height: 2px;
    }
    .btn span:hover:before {
        height: 100%;
    }
    .btn span:hover:after {
        width: 100%;
    }
    .st_num, .pass {
        height: 20px;
        border-color: rgb(119, 190, 219);
        background-color: rgb(255, 255, 255);
        border-radius: 10px;
        font-family: 'HallymGothic-Regular';
        font-size: 17px;
        margin: 0 0 3px 15px;
        width: 170px;
            
    }
=======

>>>>>>> 0c94b16f3287bd5e989c915498aa2970d655871d
</style>