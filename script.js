// 1. Declaración de Variables
const inputTexto = document.getElementById('texto');
const resultadoDiv = document.getElementById('resultadoTexto');
const imagenAside = document.getElementById('imagen_aside');
const mensajeH4 = document.querySelector('.contenedor__principal__aside h4');
const mensajeP = document.querySelector('.contenedor__principal__aside p');

// 2. Validación de texto (sin mayúsculas ni caracteres especiales)
function validarTexto(texto) {
    const regex = /^[a-z\s]*$/; // Solo permite letras minúsculas y espacios
    return regex.test(texto);
}

// 3. Función para encriptar texto
function encriptarTexto() {
    let texto = inputTexto.value;

    if (!validarTexto(texto)) {
        alert('Solo se permiten letras minúsculas y sin acentos.');
        return;
    }

    // Lógica de encriptación
    let textoEncriptado = texto
        .replace(/a/g, "ai")
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    mostrarResultado(textoEncriptado);
}

// 4. Función para desencriptar texto
function desencriptarTexto() {
    let texto = inputTexto.value;

    if (!validarTexto(texto)) {
        alert('Solo se permiten letras minúsculas y sin acentos.');
        return;
    }

    // Lógica de desencriptación
    let textoDesencriptado = texto
        .replace(/ai/g, "a")
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    mostrarResultado(textoDesencriptado);
}

// Función para mostrar el resultado y ocultar la imagen
function mostrarResultado(texto) {
    resultadoDiv.style.display = 'block';
    imagenAside.style.display = 'none';
    mensajeH4.style.display = 'none'; // Oculta el mensaje h4
    mensajeP.style.display = 'none';  // Oculta el mensaje p

    resultadoDiv.innerText = texto;
}

// 6. Función para copiar el texto al portapapeles
function copiarTexto() {
    let texto = resultadoDiv.innerText;

    navigator.clipboard.writeText(texto).then(() => {
        alert('Texto copiado al portapapeles!');
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}

// Asignar funciones a los botones
document.getElementById('contenido__botones__1').onclick = encriptarTexto;
document.getElementById('contenido__botones__2').onclick = desencriptarTexto;
document.getElementById('aside_boton').onclick = copiarTexto;
