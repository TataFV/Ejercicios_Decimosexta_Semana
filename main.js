function main() {
    var nombre = document.getElementById("nombre");
    var apellidos = document.getElementById("apellidos");
    var envio = document.getElementById("envio");
    var dni = document.getElementById("nif");
    var aficiones = document.getElementsByClassName("check");
    var edad = document.getElementsByClassName("radio");
    envio.addEventListener("click", (evt) => {
        comprobarNumeros(evt, nombre.value, apellidos.value);
        comprobarDNI(evt, dni.value);
    });
    elegirAficion(aficiones);
    resetAficiones(aficiones);


    var textArea = document.getElementById("comentarios");
    textArea.addEventListener("input", (evt) => {
        console.log(textArea.value.length)
        if (textArea.value.length >= 250) {
            textArea.value = textArea.value.substring(0, 250);
            alert("No puedes introducir más de 250 caracteres");
        }
    });
}

function comprobarNumeros(evt, nombre, apellidos) {
    var numeros = /[0-9]/;
    if (numeros.test(nombre) || numeros.test(apellidos)) {
        alert("Los números no son validos en los campos de nombre o apellidos");

    } else {
        console.log("Ok");
    }
}

function comprobarDNI(evt, dni) {
    if (dni.length < 9) {
        alert("El DNI necesita 9 caracteres");
    }
}

//Permite un máximo de 2 aficiones
function elegirAficion(aficiones) {
    for (let i = 0; i < aficiones.length; i++) {
        aficiones[i].addEventListener("click", (evt) => {
            var valor = 0;
            for (let i = 0; i < aficiones.length; i++) {
                if (aficiones[i].checked) {
                    valor++;
                }
            }
            if (valor > 2 && evt.target.checked == true) {
                evt.target.checked = false;
            }
            console.log(valor);
        });
    }
}
//Borra las aficiones seleccionadas
function resetAficiones(aficiones) {
    reset.addEventListener("click", (evt) => {
        for (let i = 0; i < aficiones.length; i++) {
            if ((aficiones[i].checked == true)) {
                aficiones[i].checked = false;
            }
        }
    });
}

/** 
function modificarAficionSegunEdad(edad) {
    for (let i = 0; i < edad.length; i++) {
        edad[i].addEventListener("click", (evt) => {
            if (edad == 15 - 19) {

            }
            if (edad == 20 - 29){

            }
            if (edad == 30 - 40){

            }
        }
    }
}
*/
function cambiarAficion(aficiones, edad) {
    var a_menor = ["Dibujo", "Deportes", "Internet", "Anime"];
    var a_medio = ["Crossfit", "Videojuegos", "Fotografía", "Senderismo"];
    var a_mayor = ["Cocina", "Cine", "Viajes", "Lectura"];

    var aficion_cambiar;
    console.log(edad.value);
    switch (edad.value) {
        case "15-19":
            aficion_cambiar = a_menor;
            break;
        case "20-29":
            aficion_cambiar = a_medio;
            break;
        case "30-40":
            aficion_cambiar = a_mayor;
            break;
        default:
            break;
    }
    for (let i = 0; i < aficiones.length; i++) {
        aficiones[i] = document.getElementByTagName("label").innerText = edad.value
    }
}

main();




