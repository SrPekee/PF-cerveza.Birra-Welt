// Arreglo para almacenar los productos en el carrito 
let carrito = [];

// Definir los tipos de cervezas y sus precios
const cervezas = [
    { nombre: "IPA", precio: 250 },
    { nombre: "Lager", precio: 200 },
    { nombre: "Rojiza", precio: 220 },
    { nombre: "Porter & Stout", precio: 280 }
];

// Función para agregar al carrito
function agregarAlCarrito(nombreCerveza) {
    const cervezaSeleccionada = cervezas.find(cerveza => cerveza.nombre.toLowerCase() === nombreCerveza.toLowerCase());
    
    if (cervezaSeleccionada) {
        carrito.push(cervezaSeleccionada);
        alert(`${cervezaSeleccionada.nombre} ha sido añadida al carrito!`);
    } else {
        alert("Cerveza no encontrada. Por favor ingrese un nombre válido.");
    }
}

// Función para calcular el total del carrito
function calcularTotal() {
    let total = carrito.reduce((acumulador, cerveza) => acumulador + cerveza.precio, 0);
    return total;
}

// Función para aplicar un descuento en porcentaje
function aplicarDescuento(porcentaje) {
    let total = calcularTotal();
    let descuento = (porcentaje / 100) * total;
    let totalConDescuento = total - descuento;
    return totalConDescuento;
}

// Mostrar el contenido del carrito
function mostrarCarrito() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
        return;
    }

    let mensajeCarrito = "Carrito:\n";
    let total = calcularTotal();

    carrito.forEach(cerveza => {
        mensajeCarrito += `${cerveza.nombre} - $${cerveza.precio}\n`;
    });

    mensajeCarrito += `\nTotal: $${total}`;
    alert(mensajeCarrito);
}

// Función principal para iniciar la compra
function iniciarCompra() {
    while (true) {
        // Captura el nombre de la cerveza
        let nombreCerveza = prompt("Ingrese el nombre de la cerveza que desea agregar al carrito:\nIPA, Lager, Rojiza, Porter & Stout");
        
        // Si el nombre es válido, lo agrega al carrito
        if (nombreCerveza) {
            agregarAlCarrito(nombreCerveza);
        } else {
            alert("Por favor ingrese un nombre válido.");
            continue;
        }

        // Pregunta si desea agregar otra cerveza
        let opcion = prompt("¿Desea agregar otra cerveza?\n1 - Sí\n2 - No");
        
        // Si selecciona "No", se termina la compra
        if (opcion === "2") {
            break;
        }
    }
    
    // Muestra contenido del carrito
    mostrarCarrito();

    // Pregunta si quiere aplicar un descuento
    let aplicarDesc = prompt("¿Desea aplicar un descuento? Ingrese el porcentaje o 'No' para continuar:");
    if (aplicarDesc.toLowerCase() !== 'no') {
        let descuento = parseFloat(aplicarDesc);
        if (!isNaN(descuento) && descuento > 0) {
            let totalConDescuento = aplicarDescuento(descuento);
            alert(`Total con descuento aplicado (${descuento}%): $${totalConDescuento}`);
        } else {
            alert("Porcentaje de descuento inválido.");
        }
    }

    // Confirmar la compra
    let confirmacion = prompt("¿Confirma la compra? \n1 - Sí\n2 - No");
    if (confirmacion === "1") {
        alert("Compra confirmada. ¡Gracias por su compra!");
        console.log("Detalle de la compra:", carrito);
    } else {
        alert("Compra cancelada.");
    }
}

// Inicio el proceso de compra
iniciarCompra();
