function excluirLinha(){
    let botao = document.querySelector('[data-action="excluir"]:focus');

    if (botao.innerHTML === 'Tem certeza?'){
        let tr = botao.parentElement.parentElement;

        tr.parentElement.removeChild(tr);
    }

    botao.classList.remove('btn-danger');
    botao.classList.add('btn-warning');
    botao.innerHTML = 'Tem certeza?';
    
}

function cancelarExcluir(){
    let botao = document.querySelector('[class="btn btn-warning"]');

    botao.innerHTML = 'Excluir';
    botao.classList.remove('btn-warning');
    botao.classList.add('btn-danger');
}

let linhas = document.querySelectorAll('[data-action="excluir"]');

linhas.forEach(function (cadaLinha) {
    cadaLinha.addEventListener('click', excluirLinha);
    cadaLinha.addEventListener('blur', cancelarExcluir);
})