// cart.js
(function(){
  const CART_KEY = 'retroman_cart_v1';

  function readCart(){ return JSON.parse(localStorage.getItem(CART_KEY) || '[]'); }
  function writeCart(c){ localStorage.setItem(CART_KEY, JSON.stringify(c)); updateCartCount(); }

  function findItem(cart, id){ return cart.find(i=>i.id===id); }

  window.addToCart = function(id,name,price,image,quantity=1){
    const cart = readCart();
    const existing = findItem(cart,id);
    if(existing){ existing.quantity += quantity; }
    else { cart.push({id,name,price,quantity,image}); }
    writeCart(cart);
    alert(`${name} added to basket`);
  };

  window.updateCartCount = function(){
    const cart = readCart();
    const totalQty = cart.reduce((s,i)=>s+i.quantity,0);
    document.querySelectorAll('.cart-count').forEach(e=> e.textContent = totalQty);
  };

  // Provide a function to open a simple cart page or modal (basic)
  window.openCart = function(){
    const cart = readCart();
    if(cart.length===0){ alert('Basket is empty'); return; }
    // For simplicity redirect to cart.html if you have one
    window.location.href = 'cart.html';
  };

  // Start checkout: posts cart to server create-checkout-session route
  // server is expected to return { url: 'https://checkout.stripe.com/...'}
  window.startCheckout = async function(items){
    const cart = items || readCart();
    // Convert to server-friendly
    const line_items = cart.map(i => ({
      id: i.id,
      name: i.name,
      amount: Math.round(i.price * 100),
      quantity: i.quantity
    }));

    try {
      const res = await fetch('/create-checkout-session', {
        method:'POST',
        headers:{ 'Content-Type':'application/json' },
        body: JSON.stringify({ line_items })
      });
      const data = await res.json();
      if(data.url){ window.location = data.url; }
      else alert('Checkout failed. Check server logs.');
    } catch(err){
      console.error(err);
      alert('Checkout error — see console for details.');
    }
  };

  // expose simple cart helpers
  window.getCart = readCart;
  window.clearCart = function(){ localStorage.removeItem(CART_KEY); updateCartCount(); };

  // init
  updateCartCount();
})();
