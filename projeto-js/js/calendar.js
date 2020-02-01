function preencherSelects(url, elementoId) {
    $.ajax({
      url: url,
      type: 'GET',
      content: 'application/json',
      success: (resposta) => {
        for(let id in resposta) {
          let cadaTipo = resposta[id];
  
          document.getElementById(elementoId).innerHTML += `
            <option value="${id}">${cadaTipo.nome}</option>
          `;
        }
      }
    });
  }

function calendar()
    {
        let calendarEl = document.getElementById('main');

    calendarEl.innerHTML += `
  <div id="modal-novo-evento" class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Novo evento</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <input readonly id="form-evento-dia" class="form-control">
        <form id="form-evento">
          <div class="modal-body">
            <input required id="form-evento-nome" class="mt-3 form-control" placeholder="Nome do Evento">
            <select id="form-evento-tipo" class="mt-3 form-control">
              <option selected disabled>-- Tipo --</option>
            </select>
            <select id="form-evento-local" class="mt-3 form-control">
              <option selected disabled>-- Local --</option>
            </select>
            <input id="form-evento-inicio" class="mt-3 form-control" placeholder="Hora Inicio">
            <input id="form-evento-fim" class="mt-3 form-control" placeholder="Hora Fim">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
            <button class="btn btn-primary">Criar Evento</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  `;

  preencherSelects(API_URL+'/tipos.json', 'form-evento-tipo');
  preencherSelects(API_URL+'/locais.json', 'form-evento-local');

    let calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: [ 'dayGrid', 'interaction' ],
    selectable: true,
    dateClick: (info) => {
      document.getElementById('form-evento-dia').value = info.dateStr;

      document.getElementById('form-evento').reset();
      $('#modal-novo-evento').modal();
    }
  });


  $.ajax({
    url: API_URL+'/eventos.json',
    type: 'GET',
    content: 'application/json',
    success: (resposta) => {
      for (let id in resposta) {
        let cadaEvento = resposta[id];

        calendar.addEvent({
          title: cadaEvento.nome,
          start: cadaEvento.inicio,
          end: cadaEvento.termino
        });
      }
    }
  });

document.getElementById('form-evento').addEventListener('submit', () => {
    event.preventDefault();

    let day = document.getElementById('form-evento-dia').value;

    $.ajax({
      url: API_URL + '/eventos.json',
      type: 'POST',
      content: 'application/json',
      dataType: 'json',
      data: JSON.stringify({
        nome: document.getElementById('form-evento-nome').value,
        local: document.getElementById('form-evento-local').value,
        tipo: document.getElementById('form-evento-tipo').value,
        inicio: day+' '+document.getElementById('form-evento-inicio').value,
        termino: day+' '+document.getElementById('form-evento-fim').value,
      }),
      success: (resposta) => {
        calendar.addEvent({
          title: document.getElementById('form-evento-nome').value,
          start: day+' '+document.getElementById('form-evento-inicio').value,
          end: day+' '+document.getElementById('form-evento-fim').value
        });

        $('#modal-novo-evento').modal('hide');
      }
    });
  });

return calendar.render();
}