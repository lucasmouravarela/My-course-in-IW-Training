document.getElementById('cep').addEventListener('blur', function (){
    let cep = document.getElementById('cep').value;

    if (cep.length < 8) {
        return;
    }

    const request = new XMLHttpRequest();
    request.open('GET','https://viacep.com.br/ws/'+cep+'/json/');
    request.responseType = 'json';
    request.onload = function () {
        document.getElementById('logradouro').value = request.response.logradouro;
        document.getElementById('bairro').value = request.response.bairro;
        document.getElementById('cidade').value = request.response.localidade;
        document.getElementById('uf').value = request.response.uf;

        document.getElementById('numero').focus();    
    };
    request.send();
});