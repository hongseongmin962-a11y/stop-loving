// 📖 일기장 내용
const diaryPages = [
    "202X. 03. 15.\n\n아무런 온기도 없다.",
    "202X. 05. 10.\n\n우리는 사랑을 시작하는 법조차 배우지 못한 채 서로를 사랑했다.\n하지만 그보다 더 아팠던 것은,\n우리가 사랑을 그만두는 방법조차 배우지 못했다는 사실이다."",
    "202X. 05. 12.\n\n너와 주고 받은 수백통의 편지는\n어쩌면 우리 사랑의 유서였을지도 모르겠다",
    "(...다음 페이지는 찢어져 있다.)"
];

let currentPage = 0;

function openModal(type, title) {
    event.stopPropagation(); 
    
    if (type === 'diary') {
        currentPage = 0;
        updatePageText(); 
        document.getElementById('diaryOverlay').classList.add('show');
    } else if (type === 'photo') {
        const modal = document.getElementById('modal');
        const mTitle = document.getElementById('modal-title');
        const mBody = document.getElementById('modal-body');

        modal.style.display = 'flex';
        mTitle.innerText = title;
        mBody.innerHTML = '<div style="width:100%; height:300px; background:#111; border:3px solid #fff; display:flex; justify-content:center; align-items:center; color:#fff;">[사진 준비중]</div>';
    }
}

function nextPage() {
    const paper = document.getElementById('bookPaper');
    const hint = document.querySelector('.page-instruction');
    
    if (currentPage >= diaryPages.length - 1) return;

    paper.classList.add('fade-out');
    hint.style.opacity = '0';
    
    setTimeout(() => {
        currentPage++;
        updatePageText();
        paper.classList.remove('fade-out');
        hint.style.opacity = '1';
    }, 400); 
}

function updatePageText() {
    const paper = document.getElementById('bookPaper');
    const hint = document.querySelector('.page-instruction');
    
    paper.innerText = diaryPages[currentPage];
    
    if (currentPage >= diaryPages.length - 1) {
        hint.style.display = 'none';
    } else {
        hint.style.display = 'block';
    }
}

function closeDiary() {
    document.getElementById('diaryOverlay').classList.remove('show');
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function toggleDoor() {
    document.getElementById('myCabinet').classList.toggle('open');
}