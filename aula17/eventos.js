/*document.getElementById('principal').innerHTML = `
	<button>Clique aqui</button>
	<hr>
	<button>Clique aqui também</button>
`;*/

class Botoes extends React.Component {
	render () {
		return React.createElement('button', {}, 'Clique aqui');
	}
}

ReactDOM.render(
	React.createElement(Botoes), document.getElementById('principal')
);