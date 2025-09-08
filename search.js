const searchInput = document.getElementById("searchInput");
const suggestions = document.getElementById("suggestions");


const productsList = [
  // 🎂 Bolos de Andar
  { id: "1", name: "Bolo Stitch", category: "Andar", img: "img/bolo_andar.jpg", url: "bolos.html#bolos" },
  { id: "2", name: "Bolo Morango Naked", category: "Andar", img: "img/andar1.jpg", url: "bolos.html#bolos" },
  { id: "3", name: "Bolo Jardim Delicado", category: "Andar", img: "img/andar2.jpg", url: "bolos.html#bolos" },
  { id: "4", name: "Bolo Fundo do Mar", category: "Andar", img: "img/andar3.jpg", url: "bolos.html#bolos" },
  { id: "5", name: "Bolo Girassol 50 Anos", category: "Andar", img: "img/andar4.jpg", url: "bolos.html#bolos" },
  { id: "6", name: "Bolo Colorido Festa 5 Anos", category: "Andar", img: "img/bolo5.webp", url: "bolos.html#bolos" },
  { id: "7", name: "Bolo Safari Baby", category: "Andar", img: "img/bolo6.webp", url: "bolos.html#bolos" },
  { id: "8", name: "Bolo Preto Dourado 26 Anos", category: "Andar", img: "img/bolo7.webp", url: "bolos.html#bolos" },
  { id: "9", name: "Bolo Aquarela Birthday", category: "Andar", img: "img/bolo8.webp", url: "bolos.html#bolos" },
  { id: "10", name: "Bolo Prata Elegante", category: "Andar", img: "img/bolo9.webp", url: "bolos.html#bolos" },

  // 🍰 Caseiros
  { id: "11", name: "Bolo de Ninho e Chocolate", category: "Caseiros", img: "img/cas1.jpg", url: "caseiros.html#bolos" },
  { id: "12", name: "Bolo de Cenoura e Chocolate", category: "Caseiros", img: "img/cas2.jpg", url: "caseiros.html#bolos" },
  { id: "13", name: "Bolo de Ninho com Nutella", category: "Caseiros", img: "img/cas3.jpg", url: "caseiros.html#bolos" },
  { id: "14", name: "Bolo de Geleia de Morango", category: "Caseiros", img: "img/cas4.jpg", url: "caseiros.html#bolos" },
  { id: "15", name: "Bolo de Chocolate", category: "Caseiros", img: "img/cas5.jpg", url: "caseiros.html#bolos" },
  { id: "16", name: "Bolo de Limão", category: "Caseiros", img: "img/cas6.jpg", url: "caseiros.html#bolos" },
  { id: "17", name: "Bolo de Cenoura e chocolate", category: "Caseiros", img: "img/cas7.jpg", url: "caseiros.html#bolos" },
  { id: "18", name: "Bolo de Ninho e Chocolate", category: "Caseiros", img: "img/cas8.jpg", url: "caseiros.html#bolos" },
  { id: "19", name: "Bolo de ninho e morango", category: "Caseiros", img: "img/cas9.jpg", url: "caseiros.html#bolos" },
  { id: "20", name: "Bolo de chocolate", category: "Caseiros", img: "img/cas10.jpg", url: "caseiros.html#bolos" },

  // 🍮 Fatias
  { id: "21", name: "Fatia de Morango e Ninho", category: "Fatias", img: "img/fatias.jpg", url: "fatias.html#produtos" },
  { id: "22", name: "Fatia de Red Velvet", category: "Fatias", img: "img/fat2.jpg", url: "fatias.html#produtos" },
  { id: "23", name: "Brownie casadinho (ninho e chocolate)", category: "Brownies", img: "img/fat3.jpg", url: "fatias.html#produtos" },
  { id: "24", name: "Brownie casadinho (ninho e morango)", category: "Brownies", img: "img/fat4.jpg", url: "fatias.html#produtos" },
  { id: "25", name: "Brownie Prestígio", category: "Brownies", img: "img/fat5.jpg", url: "fatias.html#produtos" },

  // 🍫 Combos
  { id: "31", name: "Fondue de Brownie", category: "Combos", img: "img/combos.jpg", url: "combos.html#produtos" },
  { id: "32", name: "Combo Velvet", category: "Combos", img: "img/comb2.jpg", url: "combos.html#produtos" },
  { id: "33", name: "Fondue de Brownie", category: "Combos", img: "img/comb3.jpg", url: "combos.html#produtos" },
  { id: "34", name: "Copo Brownie de Kitkat", category: "Combos", img: "img/comb4.jpg", url: "combos.html#produtos" },

  // 🥧 Tortas
  { id: "41", name: "Torta de Limão", category: "Tortas", img: "img/tortas.jpg", url: "tortas.html#produtos" },
  { id: "42", name: "Torta bombom de morango", category: "Tortas", img: "img/torta3.jpg", url: "tortas.html#produtos" }
];


searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  suggestions.innerHTML = "";

  if (!query) return;

  const filtered = productsList.filter(p => p.name.toLowerCase().includes(query));

  filtered.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("suggestion-item");

    div.innerHTML = `
      <img src="${product.img}" alt="${product.name}" width="50" />
      <span>${product.name}</span>
    `;

    div.addEventListener("click", () => {
      window.location.href = product.url;
    });

    suggestions.appendChild(div);
  });
});

const searchInputMobile = document.getElementById("searchInputMobile");
const suggestionsMobile = document.getElementById("suggestions-mobile");

searchInputMobile.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  suggestionsMobile.innerHTML = "";

  if (!value) return;

  const filtered = productsList.filter(p => p.name.toLowerCase().includes(value));

  filtered.forEach(product => {
    const div = document.createElement("div");
    div.className = "suggestion-item";

    div.innerHTML = `
      <img src="${product.img}" alt="${product.name}" width="50" />
      <span>${product.name}</span>
    `;

    div.addEventListener("click", () => {
      window.location.href = product.url;
    });

    suggestionsMobile.appendChild(div);
  });
});

