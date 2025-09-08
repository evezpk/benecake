document.addEventListener('DOMContentLoaded', () => {
  const cartBody = document.getElementById('cart-body');
  const subtotalEl = document.getElementById("subtotal");
  const totalEl = document.getElementById("cart-total");

  let cart = JSON.parse(localStorage.getItem('cartItems')) || [];

  function renderCart() {
    cartBody.innerHTML = '';

   
    const oldMsg = document.querySelector(".empty-cart");
    if (oldMsg) oldMsg.remove();

    if (cart.length === 0) {
      const section = document.querySelector(".content section");
      const emptyMsg = document.createElement("p");
      emptyMsg.textContent = "Seu carrinho está vazio.";
      emptyMsg.classList.add("empty-cart");
      section.appendChild(emptyMsg);
      updateTotals();
      return;
    }

    cart.forEach(product => {
      const totalPrice = product.price * product.qty;
      const row = document.createElement('tr');

      row.innerHTML = `
        <td>
          <div class="product">
            <img src="${product.img}" alt="${product.name}" style="max-width:80px; max-height:80px;">
            <div class="info">
              <div class="name">${product.name}</div>
            </div>
          </div>
        </td>
        <td>R$ ${product.price.toFixed(2)}</td>
        <td>
          <div class="qty">
            <button class="decrease">-</button>
            <span>${product.qty}</span>
            <button class="increase">+</button>
          </div>
        </td>
        <td>R$ ${totalPrice.toFixed(2)}</td>
        <td>
          <button class="remove" aria-label="Remover"><i class='bx bx-trash'></i></button>
        </td>
      `;

      row.querySelector('.increase').addEventListener('click', () => { product.qty++; saveAndRender(); });
      row.querySelector('.decrease').addEventListener('click', () => { if (product.qty > 1) { product.qty--; saveAndRender(); }});
      row.querySelector('.remove').addEventListener('click', () => { cart = cart.filter(p => p.id !== product.id); saveAndRender(); });

      cartBody.appendChild(row);
    });

    updateTotals();
  }

  function saveAndRender() {
    localStorage.setItem('cartItems', JSON.stringify(cart));
    renderCart();
  }

  function updateTotals() {
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
    if (subtotalEl) subtotalEl.textContent = `R$ ${subtotal.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `R$ ${subtotal.toFixed(2)}`;
  }


  window.finalizarPedido = function() {
    if (cart.length === 0) {
      alert("Seu carrinho está vazio!");
      return;
    }

    let mensagem = "Olá BenéCake! Gostaria finalizar meu pedido:\n\n";
    let total = 0;

    cart.forEach(item => {
      const subtotal = item.price * item.qty;
      total += subtotal;
      mensagem += `• ${item.name} - R$ ${item.price.toFixed(2)} x ${item.qty}\n`;
    });

    mensagem += `\nTotal: R$ ${total.toFixed(2)}`;
    mensagem += "\n\nOs pedidos mencionados estão disponíveis para encomenda?";


    navigator.clipboard.writeText(mensagem).then(() => {
      alert("Mensagem copiada! No PC, abra o WhatsApp e cole. No mobile, o WhatsApp será aberto com a mensagem pronta.");

      

      const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

      if (isMobile) {

        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
        window.open(url, "_blank");
      } else {

        const url = `whatsapp://send?phone=${numeroWhatsApp}`;
        window.open(url, "_blank");
      }

    }).catch(err => {
      console.error("Erro ao copiar mensagem:", err);
      alert(":)");
    });
  }
  renderCart();
});
