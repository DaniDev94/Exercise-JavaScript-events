// 1.1----------------------------------------------------->

// Nos traemos el boton
const $$btn = document.querySelector('#btnToClick');
// Indicamos el evento con addEventListener y le pasamos la función que recoge nuestro evento
$$btn.addEventListener('click', clickEvent);
// Cramos una funcion para indicar lo que queremos que realice el evento click.
function clickEvent(){
    console.log('Event click');
    // Añadimos texto al input con la clase click
    const $$input = document.querySelector('.click');
    // $$input.value = 'write parameter';
    $$input.placeholder = 'Fill in field ';
};
// clickEvent(); --> no es necesario invocar a la función par que realice el evento

// 1.2----------------------------------------------------->
const $$input2 = document.querySelector('.focus');
$$input2.addEventListener('focus', focusEvent);

function focusEvent(event){//Event es una palabra reservada y esta implicita en cada envento
    console.log('Focus in input');
    console.log(event) //Nos muestra el envento en consola, añadiendolo como parametro a la función.
};
// focusEvent(); --> no es necesario invocar a la función par que realice el evento

// 1.3----------------------------------------------------->
const $$value = document.querySelector('.value');
$$value.addEventListener('input', PrintText);

function PrintText(event){//Le pasamos el evento con la propiedad implicita de los eventos (event)
    let collectText = event.target.value; //Con esto accedemos al valor de la caja. IMPORTANTE!
    console.log(collectText);
};


