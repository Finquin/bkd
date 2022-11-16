const title = document.querySelector("h1");
title.textContent = "Listado de Productos";

function renderProducts(productList) {
    let productHtml = "";
    productList.msg.forEach(i => {
        productHtml += `<div class="card-productos"><div class="card ">
        <div class="card-title"><h3>${i.title}</h3></div>
        <div class="card-price">
            <p>${i.price} </p>
        </div><div class="card-img">
            <img src=${i.thumbnail} alt= ${i.title}>
        </div></div></div>`;
    });
    document.querySelector(".card-js").innerHTML = productHtml;
}

window.onload = async () => {
    const productList = await (await fetch("./productoss")).json();
    console.log(productList);
    renderProducts(productList);
};
