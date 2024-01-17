document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]'); //seleciona todos os botões com atributo data-tab-button
    const tabsContainer = document.querySelectorAll('[data-tab-id]'); //seleciona todos as listas com atributo data-tab-id
    //para selecionar com base em um atributo, utiliza-se colchetes, no caso
    //('[data-tab-button]') ou ('[data-tab-id]') 
    //colchete dentro de aspas pois a função recebe uma string que indica um array

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            //armazena os elementos tabButton a uma constante
            //botao.target.dataset.tabButton retorna é somente o nome do atributo mas não o elemento

            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            //este querySelecton vai pesquisar pela data-tab-id onde o valor seja igual a abaAlvo
            //colchetes entre crases
            //abaAlvo dentro de chaves antecedido por um $ 

            escondeTodasAbas();
            //chama a função abaixo para remover a classe shows__list--is-active de todos os elementos em tabsContainer
            
            aba.classList.add('shows__list--is-active');
            //adiciona a classe shows__list--is-active ao elemento

            removeBotaoAtivo();
            //chama a função abaixo para remover a classe shows__button--is-active do atual botão ativo

            botao.target.classList.add('shows__tabs__button--is-active');
            //ativa o botão clicado através da adição da classe shows__tabs__button--is-active
        })
    }

})

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]'); //seleciona todos os botões com atributo data-tab-button

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }

}

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
            tabsContainer[i].classList.remove('shows__list--is-active');
    }
}
