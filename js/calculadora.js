//LLAMADO DE ELEMENTOS
const precioProducto = document.querySelector("#precioProducto");
const cantCuotas = document.querySelector("#cantCuotas");
const btnCalcular = document.querySelector("#btnCalcular");
const parrafo = document.querySelector("#textPrincipal");
const resultado = document.querySelector("#parrafoResultado");

let nombre = localStorage.getItem("Usuario");


parrafo.innerText = "Hola " + nombre + "! " +" Ingrese debajo el precio del producto y la cantidad de cuotas";

btnCalcular.addEventListener("click", ()=>{

    let result = Math.floor((precioProducto.value / cantCuotas.value));

    (cantCuotas.value == "" || precioProducto.value == "") 
    ? resultado.innerText = "Complete los campos vacios!" 
    : resultado.innerText ="Serian "+ (cantCuotas.value) + " cuotas de " + "$" + result;

    function CreateObjet(precio, cuotas, result){
        this.precio = precio;
        this.cuotas = cuotas;
        this.total = result
    }
    
    let datosUsuario = new CreateObjet(precioProducto.value, cantCuotas.value, result);

    let converJSON = JSON.stringify(datosUsuario);
    
    localStorage.setItem("Detalles", converJSON);
    
    //Destructuring
    const {precio, cuotas, total} = datosUsuario
    //Spread de objetos
    const totalUsuario = {
        ...datosUsuario,
        totalDeCompra: total
    }
    console.log(totalUsuario);
});






