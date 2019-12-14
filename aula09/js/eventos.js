let velocidade = 0;

desligar();


function desligar () {
    document.getElementById('desligar').style.display = 'none';
    document.getElementById('acelerar').style.display = 'none';
    document.getElementById('frear').style.display = 'none';
}

function ligar () {
    document.getElementById('desligar').style.display = '';
    document.getElementById('acelerar').style.display = '';
    document.getElementById('frear').style.display = '';
    document.getElementById('ligar').style.display = 'none';
}

document.getElementById('ligar').addEventListener('click', function () {
    ligar();

    document.getElementById('status').innerHTML = 'Ligado';

    document.getElementById('carro').classList.add('carro-ligado');

});

document.getElementById('desligar').addEventListener('click', function () {
    if (velocidade > 0){
        return;
    }

    desligar();

    document.getElementById('ligar').style.display = '';
    document.getElementById('status').innerHTML = 'Desligado';

    document.getElementById('carro').classList.remove('carro-acelerando');
});

document.getElementById('acelerar').addEventListener('click', function (){
    if (velocidade >= 160){
        return;
    }
    
    velocidade += 10;

    document.getElementById('velocidade').innerHTML= velocidade + ' km/h';

    document.getElementById('carro').classList.add('carro-acelerando');
})

document.getElementById('frear').addEventListener('click', function (){
    if (velocidade ===0) {
        return;
    }

    velocidade -= 10;

    document.getElementById('velocidade').innerHTML = velocidade + ' km/h';
})