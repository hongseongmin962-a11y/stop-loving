// 📖 일기장 페이지 내용 (원하는 대로 수정하세요!)
const diaryPages = [
    "202X. 03. 15.\n\n세상이 0도가 되었다.\n아무런 온기도 없다.",
    "202X. 04. 22.\n\n너를 온전히 삼키고 싶었다.\n그게 사랑인 줄 알았다.",
    "202X. 05. 10.\n\n비어버린 캐비닛처럼\n내 안의 무언가도 텅 비어버렸다.",
    "(...다음 페이지는 찢어져 있다.)"
];

let currentPage = 0; // 현재 펼쳐진 페이지 번호

// 🚪 모달/일기장 열기
function openModal(type, title) {
    event.stopPropagation(); // 클릭 이벤트가 뒤로 새어나가는 것 방지
    
    if (type === 'diary') {
        // 일기장이면 새로 만든 줌인 오버레이 띄우기
        currentPage = 0; // 항상 첫 장부터
        updatePageText(); 
        document.getElementById('diaryOverlay').classList.add('show');
    } else if (type === 'photo') {
        // 사진이면 기존 팝업 띄우기
        const modal = document.getElementById('modal');
        const mTitle = document.getElementById('modal-title');
        const mBody = document.getElementById('modal-body');

        modal.style.display = 'flex';
        mTitle.innerText = title;
        mBody.innerHTML = '<div style="width:100%; height:300px; background:#111; border:3px solid #fff; display:flex; justify-content:center; align-items:center; color:#fff;">[사진 준비중]</div>';
    }
}

// ➡️ 화면 터치 시 다음 장으로 넘기기
function nextPage() {
    const paper = document.getElementById('bookPaper');
    const hint = document.querySelector('.page-instruction');
    
    // 마지막 페이지면 아무 동작 안 함
    if (currentPage >= diaryPages.length - 1) return;

    // 1. 기존 글씨가 스르륵 사라짐
    paper.classList.add('fade-out');
    hint.style.opacity = '0';
    
    // 2. 0.4초 뒤에 텍스트를 바꾸고 다시 스르륵 나타남
    setTimeout(() => {
        currentPage++;
        updatePageText();
        paper.classList.remove('fade-out');
        hint.style.opacity = '1';
    }, 400); 
}

// 📝 화면에 글자 찍어주는 함수
function updatePageText() {
    const paper = document.getElementById('bookPaper');
    const hint = document.querySelector('.page-instruction');
    
    paper.innerText = diaryPages[currentPage];
    
    // 마지막 페이지에 도달하면 터치 안내 문구 숨기기
    if (currentPage >= diaryPages.length - 1) {
        hint.style.display = 'none';
    } else {
        hint.style.display = 'block';
    }
}

// ❌ 닫기 기능들
function closeDiary() {
    document.getElementById('diaryOverlay').classList.remove('show');
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function toggleDoor() {
    document.getElementById('myCabinet').classList.toggle('open');
}