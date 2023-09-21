const pintarCarrito = () => {
    modalContainer.innerHTML = " ";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h1 class="modal-header-tittle">Carrito de compra</h1>
    `;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "X";
    modalbutton.className = "modal-header-button";

    modalHeader.append(modalbutton);

    modalbutton.addEventListener("click", () => {
    modalContainer.style.display = "none";
    });

    carrito.forEach((producto) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
            <h4>${producto.nombre}</h4>
            <p>$${producto.precio}</p>
        `;
        modalContainer.append(carritoContent);

        let eliminar = document.createElement("spam");
        eliminar.innerText = "❌";
        eliminar.className = "delete-product";
        carritoContent.append(eliminar);

        eliminar.addEventListener("click", eliminarProducto);
        });

    const total = carrito.reduce ((acc, el) => acc + el.precio, 0);

    const totalaPagar = document.createElement("div");
    totalaPagar.className = "total-content";
    totalaPagar.innerHTML = `Total a pagar es: $${total}
    `;
    modalContainer.append(totalaPagar);
};

verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = () => {
    const foundId = carrito.find((element) => element.id);
    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });
    carritoCounter();
    guardarLocal();
    pintarCarrito();
};

const carritoCounter = () => {
    cantidadCarrito.style.display = "block";
    const carritoLength = carrito.length;
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength));
    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};

carritoCounter();