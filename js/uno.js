const movil ={

    nombre: "Iphone",
    marca: "Apple",
    modelo: 2021,
    
    especificaciones:{
        capacidad: "16 GB",
        pixelescamara: "16 MP",
        procesador: "A6",
    },
    
    caracteristicas:{
        color: "negro",
        pantalla: "5 pulgadas",
    }
}
let mensaje = "Tienes un teléfono móvil llamado " + movil.nombre + " de la marca " + movil.marca + ", modelo " + movil.modelo + ". ";

document.getElementById("demo").innerHTML = mensaje;
