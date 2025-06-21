function clickearAlerta(){
    alert("seleccionaste el boton");
}
let boton1 = document.getElementById('boton_1');
let boton2 = document.getElementById('boton_2');


boton1.addEventListener('click' , clickearAlerta);
boton2.addEventListener('click' , clickearAlerta);
