// script.js
document.addEventListener('DOMContentLoaded', function() {
    const noticiasContainer = document.querySelector('.noticias');
    
    // Simulação de dados (você substituirá isso por uma chamada real da API)
    const noticias = [
        { titulo: 'Notícia 1', conteudo: 'Conteúdo da Notícia 1...' },
        { titulo: 'Notícia 2', conteudo: 'Conteúdo da Notícia 2...' },
        // Adicione mais notícias conforme necessário
    ];

    // Populando o feed com notícias
    noticias.forEach((noticia) => {
        const article = document.createElement('article');
        article.innerHTML = `<h2>${noticia.titulo}</h2><p>${noticia.conteudo}</p>`;
        noticiasContainer.appendChild(article);
    });
});
