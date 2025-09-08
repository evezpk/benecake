document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.add-to-cart');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const product = {
        id: button.dataset.id,
        name: button.dataset.nome,
        price: parseFloat(button.dataset.preco),
        img: button.dataset.img,
        qty: 1
      };

      let cart = JSON.parse(localStorage.getItem('cartItems')) || [];
      const existing = cart.find(item => item.id === product.id);

      if (existing) {
        existing.qty += 1;
      } else {
        cart.push(product);
      }


      localStorage.setItem('cartItems', JSON.stringify(cart));


      window.location.href = 'cart.html';
    });
  });
});
