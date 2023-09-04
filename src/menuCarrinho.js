import { catalago } from "./utilidade";

function abrirCarrinho() {
  document.getElementById("carrinho").classList.add("right-[0px]");
  document.getElementById("carrinho").classList.remove("right-[-360px]");
}

function fecharCarrinho() {
  document.getElementById("carrinho").classList.remove("right-[0px]");
  document.getElementById("carrinho").classList.add("right-[-360px]");
}

export function inicializarCarrinho() {
  const botaoFecharCarrinho = document.getElementById("fechar-carrinho");
  const botaoAbrirCarrinho = document.getElementById("abrir-carrinho");

  botaoFecharCarrinho.addEventListener("click", fecharCarrinho);
  botaoAbrirCarrinho.addEventListener("click", abrirCarrinho);
}

export function adicionarAoCarrinho(idProduto){
  idsProdutoCarrinhoComQuantidade[idProduto] = 1
  const produto = catalago.find((p) => p.id === idProduto);
  const containerProdutosCarrinhos = document.getElementById("produtos-carrinhos");
  `
  <article class="flex bg-white rounded-lg p-1 relative">
    <button class="absolute top-0 right-3">
      <i class="fa-solid fa-x text-black hover:text-red-600"></i>
    </button>
    <img src="./assets/img/${produto.imagem}" alt="Produto no carrinho" class="h-24 rounded-lg">
    <div class="py-2 pl-4 flex flex-col">
      <p class="text-black text-sm">${produto.nome}</p>
      <p class="text-green-400 text-sm">Valor: R$${produto.preco}</p>
    </div>
    <div class=" flex text-black items-end absolute bottom-0 right-2 text-lg">
      <button> -</button>
      <p id="quantidade-${produto.id}"class="ml-2">${idsProdutoCarrinhoComQuantidade[produto.id]}</p>
      <button class="ml-2">+</button>
    </div>
  </article>
  `
  containerProdutosCarrinhos.innerHTML += cartaoProdutoCarrinho;
}
