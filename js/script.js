// Obtenha os elementos uma vez para evitar buscas repetidas no DOM
var errorCode = document.getElementById('errorCode');
var errorMessage = document.getElementById('errorMessage');

// Verifique se os elementos existem antes de tentar alterar suas propriedades
if (errorCode) {
    errorCode.textContent = 'HAHA!';
} else {
    console.error('Elemento errorCode não encontrado');
}

if (errorMessage) {
    errorMessage.textContent = 'Página não encontrada';
} else {
    console.error('Elemento errorMessage não encontrado');
}

function goBack() {
    // Verifique se a URL é válida antes de redirecionar
    var url = "https://www.instagram.com/juniordelonge";
    try {
        new URL(url);
        window.location.href = url;
    } catch (e) {
        console.error('URL inválida: ' + url);
    }
}
