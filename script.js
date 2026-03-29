function toggleDoor() {
    document.getElementById('myCabinet').classList.toggle('open');
}

function openModal(type, title) {
    event.stopPropagation();
    const modal = document.getElementById('modal');
    const mTitle = document.getElementById('modal-title');
    const mBody = document.getElementById('modal-body');

    modal.style.display = 'flex';

    if (type === 'photo') {
        mTitle.innerText = title;
        mBody.innerHTML = '<div style="width:100%; height:200px; background:#ddd; display:flex; justify-content:center; align-items:center;">[이미지 준비중]</div>';
    } else if (type === 'diary') {
        mTitle.innerText = "A의 일기 기록";
        mBody.innerHTML = '<p>세상이 0도가 되었다. 아무런 온기도 없다.</p>';
    }
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        closeModal();
    }
}