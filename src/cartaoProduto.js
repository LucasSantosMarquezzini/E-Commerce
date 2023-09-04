import { catalago } from "./utilidade";
import { adicionarAoCarrinho } from "./menuCarrinho";

export function renderizarCatalago(){
    for(const produtoCatalago of catalago) {
        const cartaoProduto = 
            `
            <div class="border-double bg-white w-45 m-2 flex flex-col p-2 shadow-xl shadow-slate-400 group" id="card-produto-${produtoCatalago.id}">
                <img src="assets/img/${produtoCatalago.imagem}" alt="Produto class="rounded-lg">
                <div class="text-center">
                <p>${produtoCatalago.nome}</p>
                <p class="text-green-600">R$${produtoCatalago.preco}</p>
                </div>
                <button id="adicionar-${produtoCatalago.id}"class="bg-gray-600 text-white hover:text-red-500 rounded-lg">
                <i class="fa-solid fa-cart-plus"></i>
                </button>
            </div>
            `;
        document.getElementById("container-produto").innerHTML += cartaoProduto
    };
    for (const produtoCatalago of catalago) {
        document.getElementById(`adicionar-${produtoCatalago.id}`).addEventListener("click", () => adicionarAoCarrinho(produtoCatalago.id));
    }
}