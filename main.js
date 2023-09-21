const productos = [
    {
        id: 1,
        nombre: "Camiseta titular",
        precio: 20000,
        img: "https://www.opensports.com.ar/media/catalog/product/cache/6f91ed87555a15260d810a895c116072/A/V/AV4947-496_0.jpg",
    },
    {
        id: 2,
        nombre: "Camiseta suplente",
        precio: 18000,
        img: "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw803e5463/products/NI_AV4945-101/NI_AV4945-101-1.JPG",
    },
    {
        id: 3,
        nombre: "Camiseta negra",
        precio: 19000,
        img: "https://nikearprod.vtexassets.com/arquivos/ids/587662-800-800?v=638168110139570000&width=800&height=800&aspect=true",
    },
    {
        id: 4,
        nombre: "Camiseta especial",
        precio: 19000,
        img: "https://basketworld.com/blog/wp-content/uploads/2023/05/image-4.jpg",
    },
    {
        id: 5,
        nombre: "Short titular",
        precio: 15000,
        img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/fatno6ey4gkepoaj25qq/golden-state-warriors-icon-edition-nba-swingman-pantalon-corto-BkWJm8.png",
    },
    {
        id: 6,
        nombre: "Short suplente",
        precio: 13000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqkrpacGML8gP4FEGGEfRee1RDH_IDgqEUqxF0PrHcLhE0nQOL7eXhvQ8y4Kr_eS3x82Y&usqp=CAU",
    },
    {
        id: 7,
        nombre: "Short negro",
        precio: 14000,
        img: "https://images.footballfanatics.com/golden-state-warriors/mens-nike-black-golden-state-warriors-2022/23-city-edition-swingman-shorts_pi4753000_ff_4753697-12869999dd4b2795a655_full.jpg?_hv=2&w=340",
    },
    {
        id: 8,
        nombre: "Short negro, con lineas rojas",
        precio: 14000,
        img: "https://fanatics.frgimages.com/golden-state-warriors/mens-nike-navy-golden-state-warriors-2020/21-city-edition-oakland-forever-swingman-shorts_pi3841000_altimages_ff_3841311-41bfaa87f9d043a437ffalt2_full.jpg?_hv=2&w=600",
    },
    {
        id: 9,
        nombre: "Zapatillas azules",
        precio: 32000,
        img: "https://contents.mediadecathlon.com/p1977945/520x520/k$850bb08e0c9d01af790fc0488a16f1bd",
    },
    {
        id: 10,
        nombre: "Zapatillas blancas",
        precio: 32000,
        img: "https://www.nbamaniacs.com/wp-content/uploads/2016/07/FA16_KD9_Warriors_4.jpg",
    },
];

const mercadoContenido = document.getElementById("mercadoContenido");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");


let carrito = JSON.parse(localStorage.getItem("carro")) || []

productos.forEach((producto) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img src="${producto.img}">
    <h3>${producto.nombre}</h3>
    <p class="precio">$${producto.precio}</p>
    `;

    shopContent.append(content);

    let comprar = document.createElement("button");
    comprar.innerText= "Comprar";
    comprar.className = "comprar";

    content.append(comprar);

    comprar.addEventListener("click", (e) => {
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
    });
    Swal.fire({
        title: 'Producto agregado al carrito',
        text: 'Toca aceptar para seguir',
        icon: 'success',
        confirmButtonText: 'Aceptar',
      });
        console.log(carrito);
        carritoCounter();
        guardarLocal();
    });
});

const guardarLocal = () => {
localStorage.setItem("carro", JSON.stringify (carrito));
};

document.getElementById("parrafo").addEventListener("click", loadTxt);

function loadTxt () {
    fetch("data.txt")
    .then(function(response){
        console.log(response);
    });
};