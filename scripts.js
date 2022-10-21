
var data = new Date("date").getTime();
    
var x = setInterval(function() {
    var dataAtual = new Date(). getTime();
    
    var distanciaDatas = data - dataAtual;
    
    var dias = Math.floor(distanciaDatas / (1000 * 60 * 60 * 24 ));
    var horas = Math.floor((distanciaDatas % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((distanciaDatas % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((distanciaDatas % (1000 * 60 )) / 1000);

    if(distanciaDatas < 0) {
        clearInterval(x);
        document.getElementById("Dias").innerHTML;
    }
}, 1000);

