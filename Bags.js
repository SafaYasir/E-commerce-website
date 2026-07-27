/* =========================================
   BAG PRODUCTS ARRAY OF OBJECTS
========================================= */

const products = [

    {
        id:1,
        name:"Pink Crochet Hand Bag",
        description:"Beautiful handmade pink crochet handbag for everyday use.",
        price:25,
        category:"handbag",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaC-nzDT5Oz4OOiLqW6ykY31w6TIexCRPaMS8eW7BUQ&s=10"
    },

    {
        id:2,
        name:"Crochet Shoulder Bag",
        description:"Elegant crochet shoulder bag with a beautiful handmade design.",
        price:28,
        category:"shoulder",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8TpFwDa0qurwXZbFylUzcvM6P9LDB9I2_uvUZ0TOvtg&s=10"
    },

    {
        id:3,
        name:"Crochet Tote Bag",
        description:"Spacious handmade crochet tote bag for shopping and daily use.",
        price:30,
        category:"tote",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx5nCnTq_6A4rKf0F8XGPEE_FYvuqxdvyq4Aip8c8yJQ&s"
    },

    {
        id:4,
        name:"Mini Crochet Bag",
        description:"Cute mini crochet bag perfect for small essentials.",
        price:18,
        category:"mini",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgghOlz-3L6qZ5vJHLs0vX9Rm_6MJ89rotGB5tLXFSUg&s=10"
    },

    {
        id:5,
        name:"Cream Crochet Hand Bag",
        description:"Soft cream crochet handbag with a simple aesthetic style.",
        price:27,
        category:"handbag",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu78qVm9jQsCFJSEDvXQRENqyoXJmetyp034zcVjv7aQ&s=10"
    },

    {
        id:6,
        name:"Crochet Crossbody Bag",
        description:"Stylish handmade crochet crossbody bag for casual outfits.",
        price:24,
        category:"shoulder",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD6WdmZKJry7urx2BnQGPWe8oYip8OGgfEBpyKc4-Nlw&s=10"
    },

    {
        id:7,
        name:"White Crochet Tote",
        description:"Beautiful white crochet tote bag with plenty of space.",
        price:32,
        category:"tote",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmQYqv_Neqv3A-j2VafNF0b94WpLcFWXY6jK9H6tL4VA&s=10"
    },

    {
        id:8,
        name:"Small Crochet Purse",
        description:"Adorable small crochet purse for your daily essentials.",
        price:16,
        category:"mini",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLHgqP4RGTLlLS6V7nxifeugCMjYiDc8hbcZa9ndnyUnkfJsw2FCTHmu5S&s=10"
    },

    {
        id:9,
        name:"Brown Crochet Bag",
        description:"Classic brown crochet handbag with a handmade finish.",
        price:29,
        category:"handbag",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSaGZ508ZwdO1OyAJxjOAZc5rm1WpJd2DworopKg45mA&s=10"
    },

    {
        id:10,
        name:"Crochet Chain Shoulder Bag",
        description:"Pretty crochet shoulder bag with an elegant chain design.",
        price:31,
        category:"shoulder",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRNci2y5AuZDytTwdaeIrW41_eKcnVq0_l2xb2TvWBSQ&s"
    },

    {
        id:18,
        name:"Crochet Sling Bag",
        description:"Cute handmade crochet sling bag for everyday outings.",
        price:23,
        category:"shoulder",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3-mC57vNz6f-3Gb8g5HsnNiDDBDbD4Fje0C5w9Y_20g&s"
    },

    {
        id:19,
        name:"Natural Crochet Tote",
        description:"Natural-style crochet tote bag made for daily shopping.",
        price:33,
        category:"tote",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVq1UlzU43L_IKWD4jzy6AHLEiMRK3hPu_XIVyQUbBqQ&s=10"
    },

  

];



/* =========================================
   CART
========================================= */

let cart = [];

const whatsappNumber = "923001234567";



/* =========================================
   SHOW PRODUCTS
========================================= */

const productsGrid =
    document.getElementById("productsGrid");


let html = "";


products.forEach(function(product){

    html += `

        <div
            class="product-card"
            data-category="${product.category}">

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >


                <button
                    class="wishlist"
                    onclick="toggleWishlist(this)">

                    <i class="fa-regular fa-heart"></i>

                </button>

            </div>


            <div class="product-info">

                <span class="category">
                    ${product.category}
                </span>

                <h3>
                    ${product.name}
                </h3>

                <p>
                    ${product.description}
                </p>


                <div class="rating">
                    ★★★★★
                </div>


                <div class="product-bottom">

                    <span class="price">
                        £${product.price}
                    </span>


                    <button
                        class="cart-btn"
                        onclick="addToCart(${product.id})">

                        <i class="fa-solid fa-cart-plus"></i>

                        Add To Cart

                    </button>

                </div>

            </div>

        </div>

    `;

});


productsGrid.innerHTML = html;



/* =========================================
   ADD TO CART
========================================= */

function addToCart(id){

    const product =
        products.find(function(item){

            return item.id === id;

        });


    cart.push(product);


    updateCart();


    document
        .getElementById("cart")
        .scrollIntoView({
            behavior:"smooth"
        });

}



/* =========================================
   UPDATE CART
========================================= */

function updateCart(){

    const cartItems =
        document.getElementById("cartItems");

    const cartTotal =
        document.getElementById("cartTotal");


    if(cart.length === 0){

        cartItems.innerHTML = `

            <p class="empty-cart">
                Your cart is empty.
            </p>

        `;

        cartTotal.textContent = "0";

        return;

    }


    let total = 0;


    cartItems.innerHTML = "";


    cart.forEach(function(item,index){

        total += item.price;


        cartItems.innerHTML += `

            <div class="cart-item">

                <img
                    src="${item.image}"
                    alt="${item.name}"
                >


                <div class="cart-info">

                    <h3>
                        ${item.name}
                    </h3>

                    <p>
                        £${item.price}
                    </p>

                </div>


                <button
                    class="remove-btn"
                    onclick="removeItem(${index})">

                    Remove

                </button>

            </div>

        `;

    });


    cartTotal.textContent =
        total.toFixed(2);

}



/* =========================================
   REMOVE ITEM
========================================= */

function removeItem(index){

    cart.splice(index,1);

    updateCart();

}



/* =========================================
   SEARCH
========================================= */

function searchProducts(){

    const search =
        document
        .getElementById("searchInput")
        .value
        .toLowerCase();


    const productCards =
        document.querySelectorAll(".product-card");


    productCards.forEach(function(product){

        const name =
            product
            .querySelector("h3")
            .textContent
            .toLowerCase();


        if(name.includes(search)){

            product.style.display = "block";

        }else{

            product.style.display = "none";

        }

    });

}



/* SEARCH ON ENTER */

document
    .getElementById("searchInput")
    .addEventListener("keyup",function(event){

        if(event.key === "Enter"){

            searchProducts();

        }

    });



/* =========================================
   FILTER
========================================= */

function filterProducts(category,button){

    const productCards =
        document.querySelectorAll(".product-card");


    const buttons =
        document.querySelectorAll(
            ".filter-buttons button"
        );


    buttons.forEach(function(btn){

        btn.classList.remove("active");

    });


    button.classList.add("active");


    productCards.forEach(function(product){

        if(
            category === "all" ||
            product.dataset.category === category
        ){

            product.style.display = "block";

        }else{

            product.style.display = "none";

        }

    });

}



/* =========================================
   WISHLIST
========================================= */

function toggleWishlist(button){

    const icon =
        button.querySelector("i");


    icon.classList.toggle("fa-regular");

    icon.classList.toggle("fa-solid");

}



/* =========================================
   ORDER DONE → WHATSAPP
========================================= */

function orderDone(){

    if(cart.length === 0){

        alert(
            "Please add a bag to your cart first."
        );

        return;

    }


    let message =
        "Hello! I want to order:%0A%0A";


    let total = 0;


    cart.forEach(function(item,index){

        message +=
            `${index + 1}. ${item.name} - £${item.price}%0A`;

        total += item.price;

    });


    message +=
        `%0ATotal: £${total.toFixed(2)}`;


    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${message}`;


    window.open(
        whatsappURL,
        "_blank"
    );

}