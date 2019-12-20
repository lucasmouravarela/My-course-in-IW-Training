document.getElementById('regioes').addEventListener('change', function (){
    let regiao = document.getElementById('regioes').value;

    document.getElementById('estados').innerHTML = '<option>Selecione</option>'

    const request = new XMLHttpRequest();
    request.open('GET',`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${regiao}/estados`);
    request.responseType = 'json';
    request.onload = function () {
        let estados = request.response;
        
        estados.sort(function (estado1, estado2){
            if (estado1.nome > estado2.nome) {
                return 1;
            }
    
            if (estado1.nome < estado2.nome) {
                return -1;
            }
    
            return 0;
        });
    
    
        estados.map(function (cadaEstado){
            document.getElementById('estados').innerHTML += `
                <option value="${cadaEstado.id}">${cadaEstado.nome}</option>
            `
        })
    };
    request.send();
})


document.getElementById('estados').addEventListener('change', function (){
    let estado = document.getElementById('estados').value;

    document.getElementById('cidades').innerHTML = '<option>Selecione</option>'

    const req = new XMLHttpRequest();
    req.open('GET', `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios`)
    req.responseType = 'json';
    req.onload = function () {
        req.response.map(function (cadaCidade){
            document.getElementById('cidades').innerHTML += `
                <option value="${cadaCidade.id}">${cadaCidade.nome}</option>
            `;
        });
    };
    req.send();
});

const requ = new XMLHttpRequest();
requ.open('GET','https://servicodados.ibge.gov.br/api/v1/localidades/regioes');
requ.responseType = 'json';
requ.onload = function () {
    let regioes = requ.response;

    regioes.map(function (cadaRegiao){
        document.getElementById('regioes').innerHTML += `
            <option value="${cadaRegiao.id}">${cadaRegiao.nome}</option>
        `
    });
    
};
requ.send();