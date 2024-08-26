function encriptar() {
    let texto = document.getElementById("texto").value;
    if (/[A-Z]/.test(texto)) {
        alert(" Por favor, usa solo letras minúsculas.");
        return; 
    }
    let cifrado = texto
                       .replace(/e/gi, "enter")
                       .replace(/i/gi, "imes")
                       .replace(/a/gi, "ai")
                       .replace(/o/gi, "ober")
                       .replace(/u/gi, "ufat");
    
    if (texto.length != 0) {
        document.getElementById("texto").value = cifrado;
        document.querySelector(".contenido__Resultados__text-area").value = cifrado;
        alert("Texto encriptado con éxito");
    } else {
        alert("Debes ingresar algún texto");
    }
}
function desencriptar() {
    let texto = document.getElementById("texto").value;
    if (/[A-Z]/.test(texto)) {
        alert(" Por favor, usa solo letras minúsculas.");
        return; 
    }
    let descifrado = texto
                       .replace(/enter/gi, "e")
                       .replace(/imes/gi, "i")
                       .replace(/ai/gi, "a")
                       .replace(/ober/gi, "o")
                       .replace(/ufat/gi, "u");
    
    if (texto.length != 0) {
        document.getElementById("texto").value = descifrado;
        document.querySelector(".contenido__Resultados__text-area").value = descifrado;
        alert("Texto desencriptado con éxito");
    } else {
        alert("Debes ingresar algún texto");
    }
}
function copiar() {
    let textoEncriptado = document.querySelector(".contenido__Resultados__text-area");
    
    if (textoEncriptado.value.length != 0) {
        textoEncriptado.select();
        document.execCommand("copy");
        alert("Texto copiado al portapapeles");
    } else {
        alert("No hay texto para copiar");
    }
}
