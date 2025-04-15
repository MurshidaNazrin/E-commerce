function CartItems() {
    console.log(localStorage.length);

    if (localStorage.length === 0 ) {
        alert("cart is empty!");
    }


    let cartItems = ``;
    let TotalBill= ``;
    let TotalPrice = 0;


    for( let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        console.log(key);
        const item = JSON.parse(localStorage.getItem(key));
        // const item = JSON.parse(localStorage.getItem(key));
        console.log(item);
        console.log(localStorage.length);
        
        
        TotalPrice += item.price ;

    cartItems += `
    <div class="cartitem d-flex border rounded p-3 mb-3 align-items-center gap-3" >
    
       <div class="col-12 col-md-3 text-center mb-3 mb-md-0">
         <img src="${item.image}" alt="" height="100px" width="100px">
       </div>  

       <div class="col-12 col-md-9">
          <h6 class="mb-2">${item.title}</h6>
          <p class="text-muted mb-2 descrption">${item.description}</p>
          <b class="mb-1 p-1 border rounded bg-primary align-items-center text-light"> ${item.rating.rate} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
           </svg></b><br>
          <b class="mb-1">₹${item.price}</b><br>
          

    <div class="d-flex align-items-center mb-2">
    <button class="btn btn-outline-secondary btn-sm" id="lessBtn-${key}">-</button>
    <span class="mx-2" id="qnty-${key}">1</span>
    <button class="btn btn-outline-secondary btn-sm" id="plusBtn-${key}">+</button>
    </div>
          

           <button class="btn btn-danger btn-sm"onclick="Removebtn('${key}')">Remove</button>
        </div>  
    </div>  
    `;


   setTimeout(() => {
    let count = item.quantity;

    document.getElementById(`plusBtn-${key}`).addEventListener("click", () => {
        count++;
        document.getElementById(`qnty-${key}`).textContent = count;
        item.quantity = count;
        localStorage.setItem(key,JSON.stringify(item));
    });

   document.getElementById(`lessBtn-${key}`).addEventListener("click", () => {
    if(count > 1) {
    count--;
    document.getElementById(`qnty-${key}`).textContent = count;
    item.quantity = count;
    localStorage.setItem(key,JSON.stringify(item));
    }
   });
 }, 0);

    }
 
 TotalBill = `
 
        <h4 class="billing-title">PRICE DETAILS</h4><hr class="hrtag">
        <span  class="billing-details">Price<span style="margin-left:160px;">₹${TotalPrice}</span></span><br>
        <span class="billing-details">Discount</span> 
        <span style="margin-left:130px;">₹20</span> 
        <br>
        <span  class="billing-details">Delivery Charge</span>
        <span style="margin-left:85px;">₹20<span>
        <br>

        <hr style="border: 1px; border-style: dashed; ">
        <h4 style="font-size: 15px;">Total Amount  <span style="margin-left:90px;">₹${TotalPrice + 20 + 20}</span></h4>
        <hr style="border: 1px; border-style: dashed; ">
        <div style="align-items: center; margin-left: 80px;width: 285px; ">
           <button class="btn btn-warning" style="padding: 3px; border-style: none;" onclick="PlaceOrder()">PLACE ORDER</button>
        </div>  
`


    document.getElementById('cart').innerHTML = cartItems;
    document.getElementById('billing').innerHTML = TotalBill;
    
}
CartItems();

function Removebtn(key) {
localStorage.removeItem(key);
CartItems();
};
function PlaceOrder() {
    alert("Your Order Has been Placed....!");
    localStorage.clear();
    location.reload();
}

