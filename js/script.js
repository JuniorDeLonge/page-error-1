var errorCode = document.getElementById('errorCode');
var errorMessage = document.getElementById('errorMessage');

errorCode.textContent = 'HAHA!';
errorMessage.textContent = 'Página não encontrada';

function goBack() {
    window.history.back();
}
