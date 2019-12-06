function validarNome() {
    if (document.getElementById('nome').value.length < 3) {
        document.getElementById('nome').classList.add('is-invalid');
        document.getElementById('erro-nome').classList.remove('d-none');
    } else {
        document.getElementById('nome').classList.remove('is-invalid');
        document.getElementById('erro-nome').classList.add('d-none'); 
    }
}

function validarEmail() {
    if (document.getElementById('email').value.length < 8) {
        document.getElementById('email').classList.add('is-invalid');
        document.getElementById('erro-email').classList.remove('d-none');
    } else {
        document.getElementById('email').classList.remove('is-invalid');
        document.getElementById('erro-email').classList.add('d-none'); 
    }
}

function validarTelefone() {
    if (document.getElementById('telefone').value.length < 10) {
        document.getElementById('telefone').classList.add('is-invalid');
        document.getElementById('erro-telefone').classList.remove('d-none');
    } else {
        document.getElementById('telefone').classList.remove('is-invalid');
        document.getElementById('erro-telefone').classList.add('d-none');
    }
}




document.getElementById('nome').addEventListener('keyup', validarNome);
document.getElementById('nome').addEventListener('blur', validarNome);

document.getElementById('email').addEventListener('keyup', validarEmail);
document.getElementById('email').addEventListener('blur', validarEmail);

document.getElementById('telefone').addEventListener('keyup', validarTelefone);
document.getElementById('telefone').addEventListener('blur', validarTelefone);
