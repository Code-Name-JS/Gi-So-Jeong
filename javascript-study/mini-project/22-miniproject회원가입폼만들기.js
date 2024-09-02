const form=document.getElementById("form");

// 'input' 필드의 값이 변경될 때마다 이를 감지하여 포맷팅하는 함수 작성
document.getElementById('phone').addEventListener('input', function(event){
    let input = event.target.value;

    // 숫자만 남기기 (숫자가 아닌 모든 문자를 제거)
    input = input.replace(/\D/g, '');

    // 전화번호 포맷팅 로직
    if(input.length <= 3){
        event.target.value = input;
    }else if(input.length <= 7){
        event.target.value = input.slice(0, 3) + '-' + input.slice(3);
    }else if(input.length <= 11){
        event.target.value = input.slice(0, 3) + '-' + input.slice(3, 7) + '-' + input.slice(7);
    }else{
        event.target.value = input.slice(0, 3) + '-' + input.slice(3, 7) + '-' + input.slice(7, 11);
    }
});

// 제출 이벤트를 받는다 (이벤트 핸들링 )
form.addEventListener("submit", function(event){

    // 브라우저의 기본 폼 검증을 수행
    if(!form.checkValidity()){

        // 폼이 유효하지 않은 경우 경고 메세지 출력
        // 기본 제출 동작 중지
        event.preventDefault();
        alert("필수 입력간을 모두 채워주세요.");

        // 폼이 유효하지 않으면 여기서 종료
        return;
    }

    // 제출된 입력 값들을 참조한다
    let userId = document.querySelector('input[name="id"]').value;
    let userPw1 = document.querySelector('input[name="pw1"]').value;
    let userPw2 = document.querySelector('input[name="pw2"]').value;
    let userName = document.querySelector('input[name="name"]').value;
    let userPhone = document.querySelector('input[name="phone"]').value;
    let userPosition = document.querySelector('select[name="position"]').value;
    let userGender = document.querySelector('input[name="gender"]:checked').value; // 라디오 버튼은 선택된 값만 가져옴
    let userEmail = document.querySelector('input[name="email"]').value;
    let userIntro = document.querySelector('textarea[name="intro"]').value;

    // 입력값에 문제가 있는 경우 이를 검증 로직한다
    if(userId.length < 6){

        alert("아이디가 너무 짧습니다. 6자 이상 입력해주세요.");
        
        // 기본 제출 동작 중지
        event.preventDefault();
        return;
    
    }

    // 비밀번호 입력란과 비밀번호 확인란이 같지 않으면 입력값에 문제가 있는 경우 이를 감지한다
    if(userPw1 !== userPw2){

        alert("비밀번호가 일치하지 않습니다.");

        // 기본 제출 동작 중지
        event.preventDefault();
        return;

    }

    // 가입 환영 인사를 제공한다
    document.body.innerHTML="";
    document.write(`<p>&{userId}님 환영합니다</p>`);
    
});

// 취소 버튼 이벤트 핸들링
document.getElementById("button2").addEventListener("click", function(){
    
    alert("다시 회원가입하세요!");

    // 폼을 리셋하여 입력값 초기화
    form.reset();

});