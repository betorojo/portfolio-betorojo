//alert('oi');
// passo 1 - pegar o botão mostrar mais no JS pra verificar quando o usuario clicar

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');

//console.log (botaoMostrarProjetos);
const projetosinativos = document.querySelectorAll('.projeto:not(.ativo)');
//console.log(projetosinativos);

// passo 2 - mostrar click do botao
botaoMostrarProjetos.addEventListener 
('click', () => {/*console.log ('teste');*/ 
               // passo 3 - adc a classe ATIVO nos projetos escondidos
    mostrarmaisprojetos(); // fatorado

        // objetivo 2 - esconder botão
        // passo 1 - pegar botão e esconder
    botãoremover();
});

function botãoremover() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarmaisprojetos() {
    projetosinativos.forEach(projetoinativo => {
        //console.log(projetoinativo);})
        projetoinativo.classList.add('ativo');
    });
}
