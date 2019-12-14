let pessoas = [
    {
        nome: 'Chiquim',
        idade: 24,
        telefones: ['123456789','123654987'],
        endereco: {
            logradouro: 'Rua X',
            numero: 1,
            bairro: 'Alameda dos Anjos',
            cidade: 'Fortaleza'
        }
    },
    {
        nome: 'Junim',
        idade: 22,
        telefones: ['9898656','5656565'],
        endereco: {
            logradouro: 'Rua Tal',
            numero: 1,
            bairro: 'Alameda dos Demonios',
            cidade: 'Fortaleza'
        }
    },
    {
        nome: 'Zezim',
        idade: 28,
        telefones: ['5345345','123123123'],
        endereco: {
            logradouro: 'Rua 123',
            numero: 1,
            bairro: 'Alameda dos ASDPLASDPl',
            cidade: 'Maracanau'
        }
    },
    {
        nome: 'Doidim',
        idade: 18,
        telefones: ['5641321321','121212'],
        endereco: {
            logradouro: 'Rua da Putaria',
            numero: 1,
            bairro: 'Bairro dos Anjos',
            cidade: 'Fortaleza'
        }
    },
];

pessoas.map(function (cadaPessoa){
    document.getElementById('pessoas').innerHTML += `
        <tr>
            <td>${cadaPessoa.nome}</td>
            <td>${cadaPessoa.idade}</td>
            <td>
                ${cadaPessoa.endereco.logradouro},
                ${cadaPessoa.endereco.numero} -
                ${cadaPessoa.endereco.bairro}
            </td>
            <td>${cadaPessoa.endereco.cidade}</td>
            <td>${cadaPessoa.telefones}</td>
        </tr>    
    `
});