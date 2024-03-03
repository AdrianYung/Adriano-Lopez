var pantalla = document.querySelector('canvas');
var pincel = pantalla.getContext('2d');

var colores = ["white", "black", "yellow", "blue", "red", "orange", "green", "skyblue", "darkgreen", "grey"];
var tamanoCuadrado = 30;
var j = 0;

pincel.fillStyle = 'grey';
pincel.fillRect(0, 0, 400, 400);

crearPaleta();

function crearPaleta() {
    let paleta = document.getElementById('paleta');
    
    for (let i = 0; i < colores.length; i++) {
        let colorDiv = document.createElement('div');
        colorDiv.style.backgroundColor = colores[i];
        colorDiv.addEventListener('click', function () {
            j = i;
        });
        paleta.appendChild(colorDiv);
    }
}

function dibujarCirculo(evento) {
    var x, y;

    if (evento.type === 'mousemove') {
        x = evento.pageX - pantalla.offsetLeft;
        y = evento.pageY - pantalla.offsetTop;
    } else if (evento.type === 'touchmove') {
        x = evento.touches[0].clientX - pantalla.offsetLeft;
        y = evento.touches[0].clientY - pantalla.offsetTop;
    }

    if (y > tamanoCuadrado + 10) {
        pincel.fillStyle = colores[j];
        pincel.beginPath();
        pincel.arc(x, y, 5, 0, 2 * Math.PI);
        pincel.fill();
    }
}

pantalla.addEventListener('mousemove', dibujarCirculo);
pantalla.addEventListener('touchmove', dibujarCirculo);

function habilitarDibujar() {
    pantalla.addEventListener('mousemove', dibujarCirculo);
    pantalla.addEventListener('touchmove', dibujarCirculo);
}

function deshabilitarDibujar() {
    pantalla.removeEventListener('mousemove', dibujarCirculo);
    pantalla.removeEventListener('touchmove', dibujarCirculo);
}

pantalla.addEventListener('mousedown', habilitarDibujar);
pantalla.addEventListener('touchstart', habilitarDibujar);

pantalla.addEventListener('mouseup', deshabilitarDibujar);
pantalla.addEventListener('touchend', deshabilitarDibujar);
