$.ajax({
  url: 'https://servicodados.ibge.gov.br/api/v1/localidades/regioes',
  success: function (resposta) {
    resposta.map(function (cadaRegiao) {
      $('#regioes').append(`<option>${cadaRegiao.nome}</option>`);
    });
  },
});
