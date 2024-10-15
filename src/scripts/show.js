document.addEventListener('DOMContentLoaded', () => {
    // Função para obter parâmetros da URL
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    const showId = getQueryParam('id');

    if (showId && showsData[showId]) {
        const show = showsData[showId];
        document.getElementById('show-image').src = show.image;
        document.getElementById('show-image').alt = show.title;
        document.getElementById('show-title').textContent = show.title;
        document.getElementById('show-description').textContent = show.description;
        document.getElementById('show-stars').textContent = `⭐ ${show.stars} Estrelas`;
    } else {
        // Se o show não for encontrado, redirecionar para a página inicial ou exibir uma mensagem
        document.querySelector('.show-details__container').innerHTML = '<p>Show não encontrado. <a href="index.html">Voltar para a página inicial</a>.</p>';
    }

    // Adicionar funcionalidade ao botão de voltar
    document.querySelector('.back-button').addEventListener('click', () => {
        window.history.back();
    });
});
