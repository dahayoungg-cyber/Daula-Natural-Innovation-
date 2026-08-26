const cart=[];
const money=n=>"$"+n.toFixed(2);
function addToCart(name,price){cart.push({name,price});renderCart();toast(name+" added to cart");}
function renderCart(){document.getElementById("cartCount").textContent=cart.length;const box=document.getElementById("cartItems");if(!cart.length){box.innerHTML="<p>Your cart is empty.</p>";document.getElementById("cartTotal").textContent="$0.00";return}box.innerHTML=cart.map((x,i)=>`<div class="cart-item"><span>${x.name}</span><strong>${money(x.price)}</strong></div>`).join("");document.getElementById("cartTotal").textContent=money(cart.reduce((s,x)=>s+x.price,0));}
function openCart(){document.getElementById("cartPanel").classList.toggle("open");}
function showPayment(){toast("Demo checkout: connect a real payment provider next.");}
function sendMessage(e){e.preventDefault();e.target.reset();toast("Enquiry saved — connect this form to email or a backend.");}
function toast(msg){const t=document.getElementById("toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),3500);}
document.getElementById("year").textContent=new Date().getFullYear();
document.querySelector(".menu-btn").onclick=()=>{const nav=document.querySelector("nav");nav.style.display=nav.style.display==="flex"?"none":"flex";nav.style.position="absolute";nav.style.top="76px";nav.style.right="0";nav.style.background="#f5f1e8";nav.style.padding="20px";nav.style.flexDirection="column";}
