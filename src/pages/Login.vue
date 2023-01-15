<template>
    <div class="LoginForm">
        <h1>로그인</h1>
        <br>
        <form name="Login">
            <label for="st_num" style="margin:18px">학번 </label>
            <input type="text" id="st_num" v-model="st_num">
            <br><br>
            <label for="pass" style="margin:3px">비밀번호 </label>
            <input type="password" id="pass" v-model="pass">
        </form>
        <br><br>
        <button id="submit" @click="LoginSubmit()">로그인</button>
    </div>
    
</template>

<script setup>
    
    /* eslint-disable */
    
    import axios from 'axios'
    axios.defaults.withCredentials = true;

    function LoginSubmit() {

        var st_Num = document.getElementById("st_num");
        var Pass = document.getElementById("pass");

        axios.post('https://jsonplaceholder.typicode.com/users/', 
            {
                st_num: st_Num.value,
                pass: Pass.value  
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
        }        

    }

</script>

<style>

</style>