// 게임 시작 문구
const isThere = confirm("몬스터 잡기 게임을 시작하겠습니까?")

if(isThere){

    // 게임 시작 시 '닉네임 설정'
    const gamenameElement = document.querySelector("#gamename")
    let gamename = prompt("게임에 사용할 닉네임을 정하세요.")
    document.write(`당신의 닉네임은 ${gamename}입니다.`)

}else{ 

    // 게임 종료 시 '애절한 문구'
    alert("정말로 게임을 종료하시겠습니까?")
    alert('별로 바쁜 일도 없잖아요? 그냥 계속 하시면 안되나요?')
    alert('아쉽지만 쉽게 보내드리죠...')
    alert('다음에는 꼭 해보세요!')
    alert('당신을 기다릴께요!')
}


// 몬스터의 HP
let monsterHP = 100


// 몬스터 잡기 게임을 시작하다는 문구
const container = document.getElementById("container")
const h1 = document.createElement("h1")
h1.textContent = "몬스터 잡기 게임을 시작합니다!"
container.appendChild(h1)


// 게임 진행하기
let attackDamage = parseInt(prompt("1회 공격시 데미지는? (1 ~ 100까지만 데미지를 입힐 수 있습니다)"))
let attackCount = 0

// 데미지 확인하기
if(attackDamage > 0, attackDamage < 100){
    
    while(monsterHP > 0){

        // HP가 감소한다!
        monsterHP -= attackDamage

        // 때린 횟수는 증가한다!
        attackCount += 1

        // 몇 회 공격했다!
        const p = document.createElement("p")
        p.textContent = `몬스터를 ${attackCount}회 공격했다!`
        container.append(p)

        // 몬스터의 남은 HP
        const strong = document.createElement("strong")
        strong.textContent = `몬스터의 남은 HP는 ${monsterHP < 0 ? 0 : monsterHP}입니다!`
        container.append(strong)

    }

    // 몬스터 잡기 완료!
    const h2 = document.createElement("h2")
    h2.textContent = "몬스터 잡기 완료! 수고하셨습니다!"
    h2.title = "게임을 다시 시작하고 싶으시면 새로고침을 하세요!"
    container.appendChild(h2)

}else{

    // 잘못 입력시 종료하는 문구
    alert("잘못 입력하여 게임이 종료되었습니다.")
    alert("다시 도전하세요!")
    alert("당신은 응원합니다!")
}