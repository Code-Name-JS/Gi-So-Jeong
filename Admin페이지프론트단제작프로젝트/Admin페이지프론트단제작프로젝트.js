let categoryContainerTimeout;

document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

function showCategories(category, element) {
    clearTimeout(categoryContainerTimeout);
    let categoryContainer = document.getElementById('category-container');
    
    // 카테고리 목록을 정의
    const categories = {
        "럭셔리": ["아우터", "상의", "하의", "니트류"],
        "남성": ["아우터", "상의", "하의", "니트류"],
        "여성": ["아우터", "상의", "하의", "니트류"]
    };

    // 선택된 카테고리에 따라 목록 생성
    if (categories[category]) {
        let listItems = categories[category].map(item => `<li><a href="#">${item}</a></li>`).join('');
        categoryContainer.innerHTML = `<ul>${listItems}</ul>`;
        categoryContainer.style.display = 'block';
        
        // 위치 설정 (부모 요소 바로 아래)
        const rect = element.getBoundingClientRect();
        categoryContainer.style.top = `${rect.bottom + window.scrollY}px`;
        categoryContainer.style.left = `${rect.left + window.scrollX}px`;
    }
}

function hideCategories(event) {
    categoryContainerTimeout = setTimeout(() => {
        let categoryContainer = document.getElementById('category-container');
        categoryContainer.style.display = 'none';
    }, 200);  // 짧은 지연을 두어 마우스를 이동할 시간이 생기도록 설정
}

function keepCategories() {
    clearTimeout(categoryContainerTimeout);  // 마우스가 카테고리 위에 있을 때 숨기기 동작 취소
}
