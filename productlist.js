let productslist = [];  //Declare it globally so it's accessible in AddToCart
async function Products() {
    
    try {

        const DummyPrdcts = await fetch(`https://fakestoreapi.com/products`);
        const data = await DummyPrdcts.json();
        productslist = data;  //store globally
        console.log(DummyPrdcts);

        let url = window.location.href;
        let urlparams = new URLSearchParams(url.split('?')[1]);
        let id = urlparams.get("id");
        console.log(id);  
        

        // const Productslist = await DummyPrdcts.json()
        // console.log(Productslist);
        
        jsonToString = ``;
        productslist.map((product) => {
            jsonToString += `
              <div  class="col-xs-6 col-sm-6 col-md-6 col-lg-4 col-xl-3" >
            <div class="card cardstyle">
            <img src="${product.image}" class="card-img-top cardimgtop" alt="..." height="150"  width="150">
            <div class="card-body cardbody">
              <span class="card-title cardtitle">${product.title}</span>
               <span calss="ratingbrd card-title" style=" background-color: #007bff; width:65px;margin-left:40%;padding:3px;color:white;border-radius:3px">
               ${product.rating.rate}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="currentColor" class="bi bi-star-fill text-white" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg></span>
              <b class="">₹${product.price}</b>
            <div>
              <a href="#" class="btn button" onclick="AddToCart(${product.id})">Add To Cart</a>
            </div>

             </div>
            </div>
          </div>
            `;
        }) 
        document.getElementById('productlist').innerHTML = jsonToString;
        
    } catch (error) {
        console.log(error);
        
    }
}
Products();


function AddToCart(productId) {
    const product = productslist.find(p => p.id === productId);
    if (product) {
    localStorage.setItem(`product-${product.id}`,JSON.stringify(product));
    console.log(`product ${product.id} Added to Cart`);
    window.location.href='cart.html';
} else {
  console.log("product not found");
  
}
}