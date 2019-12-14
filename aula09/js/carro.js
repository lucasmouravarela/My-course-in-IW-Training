let carro = {
    modelo: 'Celta',
    marca: 'Chevrolet',
    cor: 'Preta',
    anoModelo: 2015,
    proprietarios: [
        {nome: 'Chiquim', periodo: '2014 a 2019'},
        {nome: 'Junim', periodo: '2012 a 2014'},
        {nome: 'Zezim', periodo: '2000 a 2014'},
    ],
    documentos: {
        renavam: 'asdadsasd',
        chassi: '23123123123',
    }
};

document.getElementById('painel').innerHTML = `
    <strong>Marca: </strong> ${carro.marca} <br>
    <strong>Modelo: </strong> ${carro.modelo} <br>
    <strong>Cor: </strong> ${carro.cor} <br>
    <strong>Chassi: </strong> ${carro.documentos.chassi}
`;


carro.proprietarios.map(function (cadaDono){
    document.getElementById('proprietarios').innerHTML += `
        <tr>
            <td>${cadaDono.nome}</td>
            <td>${cadaDono.periodo}</td>
        </td>    
    `;
});
