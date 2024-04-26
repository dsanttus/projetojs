const titulo = document.getElementById("titulo");
titulo.innerText = "Site de Vendas";

const novoProduto = document.createElement("div");
novoProduto.innerHTML = `
    <div class="produto">
        <h2>TV SmartTV LG</h2>
        <p>Smart TV 50'' ultra slim, qualidade de cinema.</p>
        <h3>R$ 4.500,00</h3>
        <img src="https://m.media-amazon.com/images/I/51Tukq7Dn5L._AC_SX679_.jpg" 
        alt="Imagem TV 50 polegadas LG">
    </div>`

document.body.appendChild(novoProduto);

