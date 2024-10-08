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
    const cervezaSeleccionada = cervezas.find(cerveza => cerveza.nombre === nombreCerveza);
    
    if (cervezaSeleccionada) {
        carrito.push(cervezaSeleccionada);
        alert(`${cervezaSeleccionada.nombre} ha sido añadida al carrito!`);
        actualizarCarrito();
    } else {
        alert("Cerveza no encontrada");
    }
}

// Actualizar el contenido del carrito
function actualizarCarrito() {
    const carritoElemento = document.getElementById('carrito');
    carritoElemento.innerHTML = '';

    let total = 0;
    carrito.forEach(cerveza => {
        const item = document.createElement('li');
        item.textContent = `${cerveza.nombre} - $${cerveza.precio}`;
        carritoElemento.appendChild(item);
        total += cerveza.precio;
    });

    const totalElemento = document.getElementById('total');
    totalElemento.textContent = `Total: $${total}`;
}

// Añadir event listeners a los botones
document.querySelectorAll('.tipo-cerveza').forEach(elemento => {
    elemento.addEventListener('click', () => {
        const nombreCerveza = elemento.textContent.trim();
        agregarAlCarrito(nombreCerveza);
    });
});
