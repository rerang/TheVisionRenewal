<template>
    <div id="join_form">
        <h1>동아리 지원서</h1>
        <br>
        <form name="Application" method="post">
            <label for="name" style="margin:18px">이름 </label>
            <input type="text" id="name">
            <br><br>
            <label for="st_num" style="margin:18px">학번 </label>
            <input type="text" id="st_num">
            <br><br>
            <label for="ph_num" style="margin:3px">전화번호 </label>
            <input type="text" id="ph_num" placeholder=" - 없이 입력">
            <br><br>
            <label for="field" style="margin:18px">분야 </label>
            <input type="text" id="field">
            <br><br>
            <label for="dep" style="margin:18px">학과 </label>
            <input type="text" id="dep">
            <br><br>
            <label for="pass" style="margin:3px">비밀번호 </label>
            <input type="password" id="pass" placeholder="영문자+숫자+특수문자 조합">
            <br><br><br><br>
        </form>
        <div id="join_btn" class="frame">
            <button class="custom-btn btn" type="button" id="submit" @click="joinform_check();"><span>가입하기</span></button>
        </div>       
    </div>
    
</template>

<script setup>
    
    /* eslint-disable */
    
    import axios from 'axios'
    
    function joinform_check() {

        var Name = document.getElementById("name");
        var st_Num = document.getElementById("st_num");
        var ph_Num = document.getElementById("ph_num");
        var Field = document.getElementById("field");
        var Dep = document.getElementById("dep");
        var Pass = document.getElementById("pass");
        
        var kor_check = /[ㄱ-ㅎㅏ-ㅣ가-힣]/g; 
        var Tel_check = /^[0-9]{2,3}[0-9]{3,4}[0-9]{4}/;
        var Num_check = /^[0-9]+$/g;
        var Pass_check = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/g;
        
        //이름 검사 (한글인지 판별)

        console.log(Name.value.match(kor_check));

        if(Name.value == ""){
            alert("이름을 입력하세요.");
            Name.focus();
            return false;
        };
        
        if(Name.value.match(kor_check) == null){
            alert("이름을 다시 입력하세요.");
            Name.focus();
            return false;
        }

        //학번 검사 (8자리 숫자인지 판별)

        console.log(st_Num.value.match(Num_check));

        if(st_Num.value == ""){
            alert("학번을 입력하세요.");
            st_Num.focus();
            return false;
        }

        if(st_Num.value.match(Num_check) == null || getDigit(st_Num.value) != 8){
            alert("학번을 다시 입력하세요.");
            st_Num.focus();
            return false;
        }

        //연락처 검사 (11자리 숫자인지 판별)

        console.log(ph_Num.value.match(Tel_check));

        if(ph_Num.value == ""){
            alert("전화번호를 입력하세요.");
            ph_Num.focus();
            return false;
        }

        if(ph_Num.value.match(Tel_check) == null || getDigit(ph_Num.value) != 11){
            alert("전화번호를 다시 입력하세요.");
            ph_Num.focus();
            return false;
        }

        //분야 검사

        if(Field.value == ""){
            alert("분야를 입력하세요.");
            Field.focus();
            return false;
        }

        //학과 검사

        if(Dep.value == ""){
            alert("학과를 입력하세요.");
            Dep.focus();
            return false;
        }

        //비밀번호 검사 (영어, 숫자, 특수문자 확인)

        console.log(Pass.value.match(Pass_check));

        if(Pass.value == ""){
            alert("비밀번호를 입력해주세요.");
            Pass.focus();
            return false;
        }
        
        if(Pass.value.match(Pass_check) == null){
            alert("비밀번호는 영문자+숫자+특수문자 조합으로 8~25자리 사용해야 합니다.");
            Pass.focus();
            return false;
        }



        // 숫자 자릿수 판별
        function getDigit(num) {
            num = num.toString();
            var i=0;
            while(num[i]) { i++; };
                return i;
        }  
        
        //document.Application.submit();

        axios.post('https://jsonplaceholder.typicode.com/users/', 
            {
                name: Name.value,
                st_num: st_Num.value,
                ph_num: ph_Num.value,
                field: Field.value,
                dep: Dep.value,
                pass: Pass.value
            }
            )
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        }  

</script>

<style>

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

    #join_form {
        background-color: white;
        width: 800px;
        height: auto;
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

        #name, #st_num, #ph_num, #field, #dep, #pass {
            height: 20px;
            border-color: rgb(119, 190, 219);
            background-color: rgb(255, 255, 255);
            border-radius: 10px;
            font-family: 'HallymGothic-Regular';
            font-size: 17px;
            margin: 0 0 3px 15px;
            width: 170px;
            
        }

</style>
