document.addEventListener("DOMContentLoaded", function(){

// 게임 시작 문구
const isThere = confirm("몬스터 잡기 게임을 시작하겠습니까?");

if(isThere){

    // 게임 시작 시 '닉네임 설정'
    let gamename = prompt("게임에 사용할 닉네임을 정하세요.");

    // 닉네임 설정을 취소했을 경우
    if(gamename === null || gamename.trim() === ""){
        
        alert("취소하여 게임이 종료되었습니다.");
        alert("다시 도전하세요!");

        // 여기서 코드 실행 중지
        return;
    }

    // 몬스터 잡기 게임을 시작한다는 문구
    const container = document.getElementById("container");

    // "몬스터 잡기 게임을 시작한다!" 문구 추가
    const h1 = document.createElement("h1");
    h1.textContent = "몬스터 잡기 게임을 시작합니다!";
    h1.style.fontFamily = "'Black Han Sans', sans-serif";
    h1.style.fontWeight = "450";
    h1.style.fontStyle = "normal";
    h1.style.fontSize = "150px";
    container.appendChild(h1);

    // 첫 번째 <hr> 태그 추가
    const hr1 = document.createElement("hr");
    container.appendChild(hr1);

    // 두 번째 <hr> 태그 추가
    const hr2 = document.createElement("hr");
    container.appendChild(hr2);

    // 닉네임을 표시할 p 요소 추가
    const nicknameElement = document.createElement("p");
    nicknameElement.innerHTML = `당신의 닉네임은 <strong><span style="color: black;">${gamename}</span></strong>입니다.`;
    nicknameElement.style.color = "darkgray";
    nicknameElement.style.fontFamily = "'Noto Sans KR', sans-serif";
    nicknameElement.style.fontWeight = "800";
    nicknameElement.style.fontSize = "90px";
    container.appendChild(nicknameElement);

    // 세 번째 <hr> 태그 추가
    const hr3 = document.createElement("hr");
    container.appendChild(hr3);

    // 네 번째 <hr> 태그 추가
    const hr4 = document.createElement("hr");
    container.appendChild(hr4);

    // 여기서 잠시 멈추고 "몬스터 잡기 게임을 시작합니다!"를 표시한 후 다음 동작 수행
    setTimeout(function() {

    // 몬스터의 HP
    let monsterHP = 100;

    // 게임 진행하기
    let attackDamage = parseInt(prompt("1회 공격시 데미지는? (1 ~ 100까지만 데미지를 입힐 수 있습니다)"));
    let attackCount = 0;


    // 데미지 확인하기
    // 데미지는 '0 초과' ~ '100 이하'로 작성해야 한다는 조건 설정 
    if(attackDamage > 0 && attackDamage <= 100){
    

        while(monsterHP > 0){

            // HP가 감소한다!
            monsterHP -= attackDamage;

            // 때린 횟수는 증가한다!
            attackCount += 1;

            // 몇 회 공격했다!
            const p2 = document.createElement("p");
            p2.innerHTML = `<span style="color: black;">몬스터</span>를 <span style="color: deeppink;">${attackCount}회 공격</span>했다!`;
            p2.style.color = "gray";
            container.append(p2);

            // 몬스터의 남은 HP 표시
            // 과제 & 숙제 : 몬스터의 남은 HP가 0보다 작으면 HP는 0으로 대입된다.
            const strong = document.createElement("strong");
            strong.innerHTML = `몬스터의 남은 <strong><span style="color: red;">HP</span></strong>는 <strong><span style="color: blue;">${monsterHP < 0 ? 0 : monsterHP}</span></strong>입니다!`;
            strong.style.fontFamily = "'Noto Sans KR', sans-serif";
            strong.style.fontWeight = "800";
            strong.style.fontSize = "85px";
            container.append(strong);

        }


        // 몬스터 잡기 완료!
        const h2 = document.createElement("h2");
        h2.innerHTML = "<hr>몬스터 잡기 완료! 수고하셨습니다!";
        h2.style.fontFamily = "'Bagel Fat One', sans-serif";
        h2.style.fontWeight = "500";
        h2.style.fontStyle = "normal";
        h2.style.fontSize = "100px";
        h2.style.color = "gray";
        container.appendChild(h2);

        // "몬스터 잡기 완료!" 메세지가 화면에 표시된 후에 알람창을 띄움
        setTimeout(function(){
            alert("게임을 다시 시작하고 싶으시면 새로고침을 하세요!");
        }, 500); // 0.5초 딜레이를 주어 h2가 먼저 화면에 표시되도록 함 


    }else{ 

        // '0 초과' ~ '100 이하' 조건에 맞지 않거나 잘못 입력하면 종료하는 문구
        alert("잘못 입력하여 게임이 종료되었습니다.");
        alert("다시 도전하세요!");

        // 여기서 코드 실행 중지
        return;

    }

    }, 500); // 0.5초(500ms) 딜레이를 주어 문구가 먼저 표시되도록 함


}else{

    // 게임 종료 시 '애절한 문구'
    alert("정말로 게임을 종료하시겠습니까?");
    alert('별로 바쁜 일도 없잖아요? 그냥 계속 하시면 안되나요?');
    alert('아쉽지만 쉽게 보내드리죠...');
    alert('다음에는 꼭 해보세요!');
    alert('당신을 기다릴께요!');

    // 여기서 코드 실행 중지
    return;
}

});