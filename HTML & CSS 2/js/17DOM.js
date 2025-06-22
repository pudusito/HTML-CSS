document.addEventListener("DOMContentLoaded", function(){ //domcontentloaded evita problemas de sincrinizacion (util cuando se usa junto a script embebidos)
    const seccion = "seleccionaste la sección con Script externo";
    const boton = "seleccionaste el botón con Script externo";
    
    function clickearAlerta(event) {
        if (event.target.id === 'seccion') {
            alert(seccion);
        } else if (event.target.id === 'boton') {
            alert(boton);
        }
    }
    
    let x = document.getElementById('seccion');
    let xx = document.getElementById('boton');
    
    x.addEventListener('click', clickearAlerta);
    xx.addEventListener('click', clickearAlerta);


});


// hay distintos tipos de event listener, como clicks, movimientos de mouse, etc.

/*
- DOMContentLoaded evita problemas de sincronización del DOM (especialmente útil al usar scripts embebidos)
- DOMContentLoaded asegura que el DOM esté completamente cargado antes de ejecutar el código 
- DOMContentLoaded previene errores al acceder a elementos HTML que aún no han sido cargados
- DOMContentLoaded es útil para ejecutar scripts después de que el navegador haya construido todo el DOM
*/