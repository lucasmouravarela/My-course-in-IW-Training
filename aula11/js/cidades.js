$.ajax({
  url: 'https://servicodados.ibge.gov.br/api/v1/localidades/regioes',
  success: (resposta) => {
    resposta.map((cadaRegiao) => {
      $('#regioes').append(`<option value="${cadaRegiao.id}">${cadaRegiao.nome}</option>`);
    });
  },
});

$('#regioes').change(function () {
  let regiao = $(this).val();

  $('#estados').html('<option selected> -- Selecione -- </option>');

  $.ajax({
    url: `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${regiao}/estados`,
    success: (resposta) => {
      resposta.sort((uf1, uf2) => {
        if (uf1.nome > uf2.nome){
          return 1;
        }

        if (uf1.nome < uf2.nome){
          return -1;
        }

        return 0;
      });
      
      resposta.map((cadaEstado) => {
        $('#estados').append(`<option value="${cadaEstado.id}">${cadaEstado.nome}</option>`);
      });
    }
  })
});

$('#estados').change(function (){
  let estado = $(this).val();


  $('#cidades').html('<option selected>-- Selecione --</option>');

  $.ajax({
    url: `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios`,
    success: (resposta) => {
      resposta.map((cadaCidade) => {
        $('#cidades').append(`<option value="${cadaCidade.id}">${cadaCidade.nome}</option>`);
      });
    }
  })
});