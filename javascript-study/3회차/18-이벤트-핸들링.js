const spanBtn = document.getElementById("span")
const strongBtn = document.getElementById("strong")
const markBtn = document.getElementById("mark")

const handleClick = function(event){

    if(event.target.id == "span"){
        const span = document.createElement("span")
        span.textContent = "span 태그"
        document.body.append(span)
    }else if(event.target.id == "strong"){
        const strong = document.createElement("strong")
        strong.textContent = "strong 태그"
        document.body.append(strong)
    }else if(event.target.id == "mark"){
        const mark = document.createElement("mark")
        mark.textContent = "mark 태그"
        document.body.append(mark)
    }

    /*
    const span = document.createElement("span")
    span.textContent = "새로 생긴 span 태그입니다"
    document.body.append(span)
    */
}

spanBtn.addEventListener("click", handleClick)
strongBtn.addEventListener("click", handleClick)
markBtn.addEventListener("click", handleClick)

/*
spanBtn.addEventListener("click", function(){
    const span = document.createElement("span")
    span.textContent = "새로 생긴 span 태그입니다"
    document.body.append(span)
})
*/

/*
function.handleClick(){
    alert("클릭했어요!")
}

spanBtn.onclick = handleClick
*/