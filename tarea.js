/*Gestor de Inventario de una Tienda

Tienes un array de productos de una tienda, 
cada uno con información sobre su nombre, categoría, 
precio, cantidad en inventario y descuento. 
Tu tarea es trabajar con este inventario utilizando 
programación funcional y estructuras de control.*/

const products = [
    { name: "Laptop", category: "electrónica", price: 1200, stock: 5, discount: 0 },
    { name: "Televisor", category: "electrónica", price: 800, stock: 3, discount: 10 },
    { name: "Sofá", category: "hogar", price: 500, stock: 8, discount: 15 },
    { name: "Mesa de comedor", category: "hogar", price: 700, stock: 2, discount: 0 },
    { name: "Pan", category: "alimentos", price: 1.5, stock: 50, discount: 0 },
    { name: "Leche", category: "alimentos", price: 1.2, stock: 20, discount: 5 },
];


/*1.-Filtrar Productos con Descuento: Usa filter para obtener un nuevo array con los 
productos que tienen un descuento aplicado (es decir, discount > 0).*/
const productosDescuento = products.filter(producto => producto.discount > 0);
console.log("1.- Productos con descuento:", productosDescuento);

/*2.- Calcular el Precio Final con Descuento: Usa map para calcular el precio final de 
los productos que tienen descuento y crea un nuevo array que incluya el priceAfterDiscount.*/
const productosPrecioFinal = products.map(producto => {
    if (producto.discount > 0) {
        const precioConDescuento = producto.price * (1 - producto.discount / 100);
        return { ...producto, precioConDescuento };
    }
    return producto;
});
console.log("2.- Productos con precio final (incluye descuento si aplica):", productosPrecioFinal);


/*3.- Identificar Productos con Stock Bajo: Usa un bucle para identificar los productos con 
menos de 5 unidades en inventario y guárdalos en un array nuevo.*/
const productoStockBajo = [];
for (const producto of products) {
    if (producto.stock < 5) {
        productoStockBajo.push(producto);
    }
}
console.log("3.- Productos con stock bajo:", productoStockBajo);


/*4. Actualizar el Stock de un Producto: Crea una función que reciba el nombre de un producto y una 
cantidad a agregar. Usa un try...catch para verificar*/
console.log("4.- Verificacion de actualizar stock")
function actualizarStock(nombreProducto, cantidad) {
    try {
        const producto = products.find(p => p.name === nombreProducto);
        if (!producto) throw new Error(`Producto "${nombreProducto}" no encontrado.`);
        ;
        producto.stock += cantidad;
        console.log('Stock actualizado con éxito: ', nombreProducto, ' tiene ahora ', producto.stock, ' unidades.');
    } catch (error) {
        console.error(error.message);
    }
}

console.log("Comprobando productos que no existen el array");
actualizarStock("Smart TV", 5);
actualizarStock("Comedor Terraza", 3);
console.log("Comprobando producto que si existe");
actualizarStock("Leche", 25);

/*5. Resumen por Categorías: Usa un bucle para contar cuántos productos hay en cada categoría (electrónica, 
hogar, alimentos) y devuelve un objeto con este resumen.*/

function resumenCategoria(products) {
    const resumen = {};
    for (const producto of products) {
        resumen[producto.category] = (resumen[producto.category] || 0) + 1;
    }
    return resumen;
}

const resumenPorCategoria = resumenCategoria(products);
console.log("5.- Resumen por categorías:", resumenPorCategoria);
