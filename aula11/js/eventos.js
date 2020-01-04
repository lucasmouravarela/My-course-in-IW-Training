$('#cep').mask('00000-000');

$('#cep').blur(function () {
  let cep = $(this).val();

  if (cep.length < 8) {
    return;
  }

  $.ajax({
    url: 'https://viacep.com.br/ws/' + cep + '/json/',
    success: function (resposta) {
      $('#logradouro').val(resposta.logradouro);
      $('#bairro').val(resposta.bairro);
      $('#uf').val(resposta.uf);
      $('#cidade').val(resposta.localidade);

      $('#numero').focus();
    }
  });
});
