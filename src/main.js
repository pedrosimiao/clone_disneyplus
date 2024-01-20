document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');
    //para selecionar com base em um atributo, utiliza-se colchetes, no caso
    //('[data-tab-button]') ou ('[data-tab-id]') ou ('[data-faq-question]')
    //colchete dentro de aspas pois a função recebe uma string que indica um array

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;
    //clientHeight é uma propriedade que retorna a altura interna de um elemento, incluindo o preenchimento, 
    //mas não incluindo a borda, a barra de rolagem vertical ou as margens.

    window.addEventListener('scroll', function() { //event listener observando a barra de rolagem, o valor aumenta a medida que a barra de rolagem desce
        const posicaoAtual = window.scrollY; //scrollY é uma propriedade que retorna a altura atual da barra de rolagem

        if(posicaoAtual < alturaHero) {
            //console.log("Ocultar os elementos"); teste
            ocultaElementosDoHeader();
        } else {
            exibeElementosDoHeader();
        }
    })

    //***Seção de atrações, progrmação das abas***
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            //armazena os elementos tabButton a uma constante
            //botao.target.dataset.tabButton retorna é somente o nome do atributo mas não o elemento

            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            //este querySelecton vai pesquisar pela data-tab-id onde o VALOR seja igual a abaAlvo
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

    //***Seção FAQ, accordion***
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta);
        //questions[i] será o atributo elemento da função abreOuFechaResposta
    }

})

function ocultaElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function exibeElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function abreOuFechaResposta(elemento) {
    const classe = 'faq__questions__item--is-open';
    //console.log(elemento); 
    //vai exibir PointerEvent cujo target é div.faq__questions__item__question
    //a intenção é acessar o elemento pai da div.faq__questions__item__question que é a 
    //li.faq__questions__item e para isso usa-se o atributo parentNode
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);

}

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]'); //seleciona todos os botões com atributo data-tab-button

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }

}

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]'); //seleciona todos os botões com atributo data-tab-button

    for (let i = 0; i < tabsContainer.length; i++) {
            tabsContainer[i].classList.remove('shows__list--is-active');
    }
}
