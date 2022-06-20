const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting')
const HIDDEN_CLASSNAME = 'hidden';

function onLoinSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText = `안녕하세요 ${username}님!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
loginForm.addEventListener('submit',onLoinSubmit);

/* 

    1. form , form input 불러오기
    2. addEventListener 
    3. function(함수) 
    4. 기본 브라우저 실행 제어(preventDefault)
    5. 제출했을때(input.value) form 태그를 없애기
    6. 제출했을때 인사 나타내기 (인사 ele 불러오기)
    7. raw string 변수정해주기 

*/