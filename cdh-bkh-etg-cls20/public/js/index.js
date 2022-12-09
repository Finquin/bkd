const title = document.querySelector("h1");
title.textContent = "Listado de Productos";

function renderProducts(productList) {
    let productHtml = "";
    productList.msg.forEach(i => {
        productHtml += `<div class="card-productos">
  
        <div class="card">
        <div class="card-img">
        <img src=${i.foto} alt= ${i.title}>
        </div>
        <div class="card-title"><h2>${i.nombre}</h2></div>    
        <div class="card-title"><h4>Stock: ${i.stock}</h4></div>    
        <div class="card-title"><h4>${i.descripcion}</h4></div>    
        <div class="card-price">
            <p>Precio: ${i.price} </p>
        </div></div></div>`;
    });
    document.querySelector(".card-js").innerHTML = productHtml;
}

window.onload = async () => {
    const productList = await (await fetch("./productos/prodJson")).json();
    console.log(productList);
    renderProducts(productList);
};
