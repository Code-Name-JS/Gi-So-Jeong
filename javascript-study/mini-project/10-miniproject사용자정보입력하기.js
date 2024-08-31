const nameElement = document.querySelector("#name")
let name = prompt("당신의 이름은?")
nameElement.textContent = name

const petElement = document.querySelector("#pet")
let pet = prompt("당신은 무슨 동물을 좋아합니까?")
petElement.textContent = `저는 ${pet}를 좋아합니다!`

document.querySelector("#why")
.textContent = `강아지를 좋아하는 이유는 ${prompt("강아지를 좋아하는 이유는?")} 때문입니다!`

document.querySelector("#petname")
.textContent = `우리집 강아지의 이름은 ${prompt("키우는 강아지 이름은 무엇인가요?")} 입니다!`

document.querySelector("#petfruit")
.textContent = `${prompt("키우는 강아지 이름을 적어주세요")}가 좋아하는 과일은 ${prompt("예삐가 좋아하는 과일은 무엇인가요?")}!`

document.querySelector("#petwhy")
.textContent = `${prompt("키우는 강아지 이름을 적어주세요")}는 ${prompt("예삐는 왜 좋아하는 과일이 없습니까?")}이 있기 때문입니다!`