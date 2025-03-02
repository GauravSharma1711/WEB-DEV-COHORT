
const   cartItems = document.getElementById('cart-items');
const emptyCart = document.querySelector('.empty-cart');
const  cartTotal  = document.getElementById('cart-total');

let cart = [];

 function addToCart( name , price){
              
    if(emptyCart){
        emptyCart.style.display = 'none';
    }

   const exists = cart.find((item)=>item.name===name);

   if(exists){
    exists.quantity++;
   }else {
    cart.push({ name, price, quantity: 1 });
  }

    updateCart();

}

function updateCart(){

let total =0;
cartItems.innerHTML="";

cart.forEach((item,index)=>{

    
    const cartItem = document.createElement('div');
    cartItem.classList.add("cart-item");
    
    const itemname = document.createElement('div');
    const  quantityControls = document.createElement('div');
    quantityControls.classList.add("quantity-controls");

    itemname.textContent = item.name;


    const decrementBtn = document.createElement("button");
    decrementBtn.textContent = "-";
    decrementBtn.onclick = () => decreaseQuantity(index);


    const incrementBtn = document.createElement("button");
    incrementBtn.textContent = "+";
    incrementBtn.onclick = () => increaseQuantity(index);


    const quantity = document.createElement("span");
    quantity.textContent  = `Qty: ${item.quantity}`;

    const price = document.createElement("span");
    price.textContent = `$${(item.price * item.quantity).toFixed(2)}`;

    quantityControls.appendChild(quantity);
    quantityControls.appendChild(incrementBtn);
    quantityControls.appendChild(price);
    quantityControls.appendChild(decrementBtn);


    cartItem.appendChild(itemname);
    cartItem.appendChild(quantityControls);

    cartItems.appendChild(cartItem);


    total+=item.price*item.quantity;

})

cartTotal.innerHTML = `<h3>Total: $${total.toFixed(2)}</h3>`;


if (cart.length === 0 && emptyCart) {
    emptyCart.style.display = "block";
  } else {
    emptyCart.style.display = "none";
  }


}


function increaseQuantity(index){
cart[index].quantity++;
updateCart();
}

function decreaseQuantity(index){
    if(cart[index].quantity>1){
        cart[index].quantity--;

    }else{
        cart.splice(index, 1);
    }
updateCart()
}
