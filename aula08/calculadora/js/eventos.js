let memoria = 0;
let memoria2 = 0;

function digitoIsOperador() {
    let ultimoDigito = document.getElementById('visor').innerHTML.substr(-1);
  
    if (ultimoDigito === '-' || ultimoDigito === '+' || ultimoDigito === '/' || ultimoDigito === '*') {
        return true;
    }
  
    return false;
  }

for (let numero = 0; numero <= 9; numero++) {
    document.getElementById('numero'+numero).addEventListener('click', function () {
        if (document.getElementById('visor').innerHTML === '0') {
            document.getElementById('visor').innerHTML = '';
        }
        
        if (document.getElementById('visor').innerHTML.length === 10){
            return;
        }
        
        if (memoria !== 0) {
            memoria2 += numero;
        }

        document.getElementById('visor').innerHTML += numero;
    });
}

document.getElementById('limpar').addEventListener('click', function () {
    document.getElementById('visor').innerHTML = '0';
})

document.getElementById('somar').addEventListener('click', function (){
    memoria = parseFloat(document.getElementById('visor').innerHTML);

    if (digitoIsOperador()) {
        return;
    }
    
    if (memoria !== 0 && memoria2 !== 0) {
        let resultado = parseFloat(memoria) + parseFloat(memoria2);

        document.getElementById('visor').innerHTML = resultado;
        memoria = resultado;
        memoria2 = 0;
    }

    document.getElementById('visor').innerHTML += '+';
})


document.getElementById('resultado').addEventListener('click', function () {
    document.getElementById('visor').innerHTML = parseFloat(memoria) + parseFloat(memoria2);

    memoria = 0;
    memoria2 = 0;
})

document.getElementById('subtrair').addEventListener('click', function (){
    memoria = parseFloat(document.getElementById('visor').innerHTML);

    if (digitoIsOperador()) {
        return;
    }

    if (memoria !== 0 && memoria2 !== 0) {
        let resultado = parseFloat(memoria) - parseFloat(memoria2);

        document.getElementById('visor').innerHTML = resultado;
        memoria = resultado;
        memoria2 = 0;
    }

    document.getElementById('visor').innerHTML += '-';
})