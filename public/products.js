

const searchInput = document.getElementById("searchInput");
const suggestions = document.getElementById("suggestions");

let products = JSON.parse(localStorage.getItem("produtosLoja"));
if (!products) {
   products = [
  // Caseirinhos
  { id: "1", name: "Bolo Stitch", category: "Caseirinhos", price: 0, img: "img/bolo_andar.jpg" },
  { id: "2", name: "Bolo Morango Naked", category: "Caseirinhos", price: 0, img: "img/andar1.jpg" },
  { id: "3", name: "Bolo Jardim Delicado", category: "Caseirinhos", price: 0, img: "img/andar2.jpg" },
  { id: "4", name: "Bolo Fundo do Mar", category: "Caseirinhos", price: 0, img: "img/andar3.jpg" },
  { id: "5", name: "Bolo Girassol 50 Anos", category: "Caseirinhos", price: 0, img: "img/andar4.jpg" },
  { id: "6", name: "Bolo Colorido Festa 5 Anos", category: "Caseirinhos", price: 0, img: "img/bolo5.webp" },
  { id: "7", name: "Bolo Safari Baby", category: "Caseirinhos", price: 0, img: "img/bolo6.webp" },
  { id: "8", name: "Bolo Preto Dourado 26 Anos", category: "Caseirinhos", price: 0, img: "img/bolo7.webp" },
  { id: "9", name: "Bolo Aquarela Birthday", category: "Caseirinhos", price: 0, img: "img/bolo8.webp" },
  { id: "10", name: "Bolo Prata Elegante", category: "Caseirinhos", price: 0, img: "img/bolo9.webp" },
  // Bolos
  { id: "11", name: "Bolo de Ninho e Chocolate", category: "Bolos", price: 25, img: "img/cas1.jpg" },
  { id: "12", name: "Bolo de Cenoura e Chocolate", category: "Bolos", price: 25, img: "img/cas2.jpg" },
  { id: "13", name: "Bolo de Ninho com Nutella", category: "Bolos", price: 25, img: "img/cas3.jpg" },
  { id: "14", name: "Bolo de Geleia de Morango", category: "Bolos", price: 25, img: "img/cas4.jpg" },
  { id: "15", name: "Bolo de Chocolate", category: "Bolos", price: 25, img: "img/cas5.jpg" },
  { id: "16", name: "Bolo de Limão", category: "Bolos", price: 25, img: "img/cas6.jpg" },
  { id: "17", name: "Bolo de Cenoura e chocolate", category: "Bolos", price: 25, img: "img/cas7.jpg" },
  { id: "18", name: "Bolo de Ninho e Chocolate", category: "Bolos", price: 25, img: "img/cas8.jpg" },
  { id: "19", name: "Bolo de ninho e morango", category: "Bolos", price: 25, img: "img/cas9.jpg" },
  { id: "20", name: "Bolo de chocolate", category: "Bolos", price: 25, img: "img/cas10.jpg" }

    { id: "21", name: "Fatia de Morango e Ninho", category: "Fatias", price: 13.00, img: "img/fatias.jpg" },
  { id: "22", name: "Fatia de Red Velvet", category: "Fatias", price: 13.00, img: "img/fat2.jpg" },
  { id: "23", name: "Brownie casadinho (ninho e chocolate)", category: "Brownies", price: 14.00, img: "img/fat3.jpg" },
  { id: "24", name: "Brownie casadinho (ninho e morango)", category: "Brownies", price: 14.00, img: "img/fat4.jpg" },
  { id: "25", name: "Brownie Prestígio", category: "Brownies", price: 14.00, img: "img/fat5.jpg" },
  
  { id: "31", name: "Fondue de Brownie", category: "Combos", price: 15.00, img: "img/combos.jpg" },
  { id: "32", name: "Combo Velvet", category: "Combos", price: 22.00, img: "img/comb2.jpg" },
  { id: "33", name: "Fondue de Brownie", category: "Combos", price: 22.00, img: "img/comb3.jpg" },
  { id: "34", name: "Copo Brownie de Kitkat", category: "Combos", price: 12.00, img: "img/comb4.jpg" },

  { id: "11", name: "Torta de Limão", category: "Tortas", price: 13.00, img: "img/tortas.jpg" },
  { id: "13", name: "Torta bombom de morango", category: "Tortas", price: 13.00, img: "img/torta3.jpg" },
  
];
  localStorage.setItem("produtosLoja", JSON.stringify(products));
}

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  suggestions.innerHTML = "";

  if (!query) return;

  const filtered = products.filter(p => p.name.toLowerCase().includes(query));

  filtered.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("suggestion-item");

    // Adicionando imagem + nome
    div.innerHTML = `
      <img src="${product.img}" alt="${product.name}" style="width:40px; height:40px; object-fit:cover; margin-right:8px;">
      <span>${product.name}</span>
    `;

    div.addEventListener("click", () => {
      searchInput.value = product.name;
      suggestions.innerHTML = "";
    });

    suggestions.appendChild(div);
  });
});
