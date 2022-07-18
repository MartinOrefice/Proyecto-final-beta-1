//PRODUCTOS
/*
[
    {
        precio: 5000,
        id: 1,
        title: "Mouse Gamer",
        img: "https://www.corsair.com/corsairmedia/sys_master/productcontent/CH-9300011-NA-M65_PRO_RGB_BLK_04.png"
    },
    {
        precio: 400000,
        id: 2,
        title: "PC Gamer"
    },
    {
        precio: 150000,
        id: 3,
        title: "Play Station 4"
    }
]
*/

const listaProductos = document.querySelector("#productos")
const url ="../productos.json"
fetch(url)
.then((response)=> response.json())
.then((productos)=>{
    productos.forEach((productos)=>{
        const card = document.createElement("div");
        const {id, img, title, precio} = productos;
        card.innerHTML = `
        <div class="card" id=${id}>

        <div class="imgBox">
        <img src=${img}  class="mouse">
        </div>
        
        <div class="contentBox">
        <h3>${title}</h3>
        <h2 class="price">$${precio}</h2>
        <button class="buy">COMPRAR</button>
        </div>
        
        </div>`;

        listaProductos.append(card);
    });
})

/*const btnComprar = document.querySelector(".buy");

btnComprar.addEventListener("click", ()=>{
    window.location.href = "../pages/calculadora.html";
} )
*/
