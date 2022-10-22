const dataPrevista = '18 feb 2023';

const diasCount = document.getElementById('dias');
const horasCount = document.getElementById('horas');
const minutosCount = document.getElementById('minutos');
const segundosCount = document.getElementById('segundos');

function contador() {
    const dataSeleceionada = new Date(dataPrevista);
    const dataAtual = new Date();

    const seg = Math.floor((dataSeleceionada - dataAtual) / 1000);

    const dias = Math.floor(seg / 3600 / 24 );
    const horas = Math.floor(seg / 3600) % 24;
    const minutos = Math.floor(seg / 60) % 60;
    const segundos = Math.floor(seg) % 60;

    diasCount.innerHTML = dias;
    horasCount.innerHTML = horas;
    minutosCount.innerHTML = minutos;
    segundosCount.innerHTML = segundos;

}

contador();
setInterval(contador, 1000);


/*var data = new Date('dias');
console.log(data);
var hora = new getTime();

var x = setInterval(function() {
    var dataAtual = new Date();
    var horaAtual = getTime();
    
    var distanciaDatas = data - dataAtual;
    
    var dias = Math.floor(distanciaDatas / (1000 * 60 * 60 * 24 ));
    var horas = Math.floor((distanciaDatas % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((distanciaDatas % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((distanciaDatas % (1000 * 60 )) / 1000);

    if(distanciaDatas < 0) {
        clearInterval(x);
        document.getElementById(dias).innerHTML;
        alert(dias)
    }
}, 1000);*/

