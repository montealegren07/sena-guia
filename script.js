// Esperar a que todo el contenido del DOM esté cargado antes de ejecutar scripts
document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // EJERCICIO 1: CALCULADORA
    // ==========================================
    const formCalculadora = document.getElementById("formCalculadora");
    const resultadoCalculadora = document.getElementById("resultadoCalculadora");

    if (formCalculadora) {
        formCalculadora.addEventListener("submit", (e) => {
            e.preventDefault();

            const num1 = parseFloat(document.getElementById("numero1").value);
            const num2 = parseFloat(document.getElementById("numero2").value);
            const operacion = document.getElementById("operacion").value;
            let resultado = 0;

            switch (operacion) {
                case "sumar":
                    resultado = num1 + num2;
                    break;
                case "restar":
                    resultado = num1 - num2;
                    break;
                case "multiplicar":
                    resultado = num1 * num2;
                    break;
                case "dividir":
                    if (num2 === 0) {
                        resultadoCalculadora.textContent = "Error: No se puede dividir entre cero.";
                        return;
                    }
                    resultado = num1 / num2;
                    break;
                default:
                    resultadoCalculadora.textContent = "Operación no válida.";
                    return;
            }

            resultadoCalculadora.textContent = `El resultado es: ${resultado}`;
        });
    }

    // ==========================================
    // EJERCICIO 2: CALIFICACIONES
    // ==========================================
    const formCalificacion = document.getElementById("formCalificacion");
    const resultadoNota = document.getElementById("resultadoNota");

    if (formCalificacion) {
        formCalificacion.addEventListener("submit", (e) => {
            e.preventDefault();

            const nota = parseFloat(document.getElementById("nota").value);

            if (isNaN(nota) || nota < 0 || nota > 100) {
                resultadoNota.textContent = "Por favor, ingresa una nota válida entre 0 y 100.";
                return;
            }

            if (nota >= 60) {
                resultadoNota.textContent = `¡Aprobado! Con una calificación de ${nota}.`;
                resultadoNota.style.color = "#16a34a"; // Verde éxito
            } else {
                resultadoNota.textContent = `Reprobado. Con una calificación de ${nota}.`;
                resultadoNota.style.color = "#dc2626"; // Rojo alerta
            }
        });
    }

    // ==========================================
    // EJERCICIO 3: MANIPULACIÓN DEL DOM
    // ==========================================
    const botonCambiarTexto = document.getElementById("botonCambiarTexto");
    const nuevoTextoInput = document.getElementById("nuevoTexto");
    const textoDinamico = document.getElementById("textoDinamico");
    const botonCambiarEstilo = document.getElementById("botonCambiarEstilo");
    const botonAlternar = document.getElementById("botonAlternar");
    const informacionExtra = document.getElementById("informacionExtra");

    // Cambiar texto de manera dinámica
    if (botonCambiarTexto && nuevoTextoInput && textoDinamico) {
        botonCambiarTexto.addEventListener("click", () => {
            const textoIngresado = nuevoTextoInput.value.trim();
            if (textoIngresado !== "") {
                textoDinamico.textContent = textoIngresado;
                nuevoTextoInput.value = "";
            } else {
                alert("Por favor, escribe un mensaje primero.");
            }
        });
    }

    // Cambiar estilo (color y fuente) del texto dinámico
    if (botonCambiarEstilo && textoDinamico) {
        botonCambiarEstilo.addEventListener("click", () => {
            textoDinamico.style.color = textoDinamico.style.color === "rgb(56, 189, 248)" ? "#334155" : "#38bdf8";
            textoDinamico.style.fontWeight = textoDinamico.style.fontWeight === "bold" ? "normal" : "bold";
        });
    }

    // Mostrar u ocultar información adicional
    if (botonAlternar && informacionExtra) {
        botonAlternar.addEventListener("click", () => {
            const estaOculto = informacionExtra.hasAttribute("hidden");
            if (estaOculto) {
                informacionExtra.removeAttribute("hidden");
                botonAlternar.textContent = "Ocultar información";
            } else {
                informacionExtra.setAttribute("hidden", "true");
                botonAlternar.textContent = "Mostrar información";
            }
        });
    }

    // ==========================================
    // EJERCICIO 4: LISTA DINÁMICA
    // ==========================================
    const formTecnologia = document.getElementById("formTecnologia");
    const listaTecnologias = document.getElementById("listaTecnologias");

    if (formTecnologia && listaTecnologias) {
        formTecnologia.addEventListener("submit", (e) => {
            e.preventDefault();

            const nombreTecnologiaInput = document.getElementById("nombreTecnologia");
            const nombreTecnologia = nombreTecnologiaInput.value.trim();

            if (nombreTecnologia !== "") {
                const nuevoElemento = document.createElement("li");
                nuevoElemento.textContent = nombreTecnologia;
                listaTecnologias.appendChild(nuevoElemento);
                nombreTecnologiaInput.value = "";
            }
        });
    }

    // ==========================================
    // FORMULARIO DE CONTACTO
    // ==========================================
    const formContacto = document.getElementById("formContacto");
    const resultadoContacto = document.getElementById("resultadoContacto");

    if (formContacto) {
        formContacto.addEventListener("submit", (e) => {
            e.preventDefault();
            const nombre = document.getElementById("nombreContacto").value;
            resultadoContacto.textContent = `¡Gracias por tu mensaje, ${nombre}! Nos pondremos en contacto pronto.`;
            resultadoContacto.style.color = "#16a34a";
            formContacto.reset();
        });
    }

});
