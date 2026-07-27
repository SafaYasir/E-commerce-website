const products = [

    {
        id:1,
        name:"Crochet Gajra",
        description:"Beautiful handmade crochet gajra for weddings and special occasions.",
        price:12,
        category:"Gajras",
        image:"https://images.unsplash.com/photo-1528825871115-3581a5387919?w=700"
    },

    {
        id:2,
        name:"Crochet Keychain",
        description:"Cute handmade crochet keychain for bags, keys and gifts.",
        price:7,
        category:"Keychains",
        image:"https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=700"
    },

    {
        id:3,
        name:"Crochet Hand Bag",
        description:"Stylish handmade crochet handbag for everyday use.",
        price:25,
        category:"Bags",
        image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700"
    },

    {
        id:4,
        name:"Crochet Flower",
        description:"Beautiful handmade crochet flower for decoration and gifts.",
        price:8,
        category:"Flowers",
        image:"https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=700"
    },

    {
        id:5,
        name:"Crochet Flower Bouquet",
        description:"Lovely handmade crochet flower bouquet made with care.",
        price:30,
        category:"Bouquets",
        image:"https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=700"
    },

    {
        id:6,
        name:"Crochet Gift Box",
        description:"Cute handmade crochet gift collection for special people.",
        price:35,
        category:"Gifts",
        image:"https://images.unsplash.com/photo-1513883049090-d0b7439799bf?w=700"
    },

    {
        id:7,
        name:"Crochet Hair Bow",
        description:"Cute handmade crochet hair bow for a lovely hairstyle.",
        price:6,
        category:"Hair Accessories",
        image:"https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=700"
    },

    {
        id:8,
        name:"Pink Crochet Gajra",
        description:"Beautiful pink crochet gajra with a soft handmade design.",
        price:14,
        category:"Gajras",
        image:"https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=700"
    },

    {
        id:9,
        name:"Crochet Bunny Keychain",
        description:"Adorable bunny crochet keychain for bags and accessories.",
        price:9,
        category:"Keychains",
        image:"https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=700"
    },

    {
        id:10,
        name:"Crochet Shoulder Bag",
        description:"Elegant handmade crochet shoulder bag for everyday outfits.",
        price:28,
        category:"Bags",
        image:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=700"
    },

    {
        id:11,
        name:"Crochet Rose",
        description:"Handmade crochet rose for decoration and gifting.",
        price:10,
        category:"Flowers",
        image:"https://images.unsplash.com/photo-1496062031456-07b8f162a322?w=700"
    },

    {
        id:12,
        name:"Crochet Rose Bouquet",
        description:"Pretty crochet rose bouquet perfect for birthdays and gifts.",
        price:32,
        category:"Bouquets",
        image:"https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=700"
    },

    {
        id:13,
        name:"Crochet Birthday Gift Set",
        description:"Special handmade crochet gift set for birthdays and celebrations.",
        price:40,
        category:"Gifts",
        image:"https://images.unsplash.com/photo-1512909006721-3d6018887383?w=700"
    },

    {
        id:14,
        name:"Crochet Hair Clip",
        description:"Cute crochet hair clip with a soft handmade finish.",
        price:7,
        category:"Hair Accessories",
        image:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=700"
    },

    {
        id:15,
        name:"White Crochet Gajra",
        description:"Elegant white crochet gajra suitable for weddings and events.",
        price:15,
        category:"Gajras",
        image:"https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=700"
    },

    {
        id:16,
        name:"Crochet Star Keychain",
        description:"Cute handmade crochet star keychain for your bag or keys.",
        price:8,
        category:"Keychains",
        image:"https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=700"
    },

    {
        id:17,
        name:"Crochet Tote Bag",
        description:"Spacious handmade crochet tote bag for shopping and daily use.",
        price:30,
        category:"Bags",
        image:"https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=700"
    },

    {
        id:18,
        name:"Crochet Sunflower",
        description:"Bright handmade crochet sunflower for decoration and gifts.",
        price:11,
        category:"Flowers",
        image:"https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=700"
    },

    {
        id:19,
        name:"Crochet Mixed Flower Bouquet",
        description:"Beautiful mixed crochet flower bouquet made specially by hand.",
        price:38,
        category:"Bouquets",
        image:"https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=700"
    },

    {
        id:20,
        name:"Crochet Gift Hamper",
        description:"Lovely crochet gift hamper containing handmade decorative items.",
        price:45,
        category:"Gifts",
        image:"https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=700"
    }

];


// ==========================================
// CART
// ==========================================

let cart = [];


// ==========================================
// SHOW PRODUCTS
// ==========================================

let container = document.getElementById("main");

let html = "";


for(let i = 0; i < products.length; i++){

    html += `

        <div class="product-card">

            <div class="product-image">

                <img
                    src="${products[i].image}"
                    alt="${products[i].name}"
                >

                <button
                    class="heart"
                    onclick="likeProduct(this)">

                    <i class="fa-regular fa-heart"></i>

                </button>

            </div>


            <div class="product-info">

                <span class="category-name">
                    ${products[i].category}
                </span>

                <h3>
                    ${products[i].name}
                </h3>

                <p>
                    ${products[i].description}
                </p>

                <div class="rating">
                    ★★★★★
                </div>


                <div class="bottom">

                    <span class="price">
                        £${products[i].price}
                    </span>


                    <button
                        class="cart-btn"
                        onclick="addToCart(${products[i].id})">

                        <i class="fa-solid fa-cart-plus"></i>

                        Add To Cart

                    </button>

                </div>

            </div>

        </div>

    `;

}


container.innerHTML = html;



// ==========================================
// ADD TO CART
// ==========================================

function addToCart(id){

    let product = products.find(function(item){

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



// ==========================================
// UPDATE CART
// ==========================================

function updateCart(){

    let cartItems =
        document.getElementById("cartItems");


    let cartTotal =
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


    for(let i = 0; i < cart.length; i++){

        total += cart[i].price;


        cartItems.innerHTML += `

            <div class="cart-item">

                <img
                    src="${cart[i].image}"
                    alt="${cart[i].name}"
                >


                <div class="cart-info">

                    <h3>
                        ${cart[i].name}
                    </h3>

                    <p>
                        £${cart[i].price}
                    </p>

                </div>


                <button
                    class="remove-btn"
                    onclick="removeFromCart(${i})">

                    Remove

                </button>

            </div>

        `;

    }


    cartTotal.textContent =
        total.toFixed(2);

}



// ==========================================
// REMOVE FROM CART
// ==========================================

function removeFromCart(index){

    cart.splice(index,1);

    updateCart();

}



// ==========================================
// HEART
// ==========================================

function likeProduct(button){

    let icon =
        button.querySelector("i");


    icon.classList.toggle("fa-regular");

    icon.classList.toggle("fa-solid");

}



// ==========================================
// ORDER DONE → WHATSAPP
// ==========================================

function orderDone(){

    if(cart.length === 0){

        alert(
            "Please add a product to your cart first."
        );

        return;

    }


    let message =
        "Hello! I want to order:%0A%0A";


    let total = 0;


    for(let i = 0; i < cart.length; i++){

        message +=
            `${i + 1}. ${cart[i].name} - £${cart[i].price}%0A`;

        total += cart[i].price;

    }


    message +=
        `%0ATotal: £${total.toFixed(2)}`;


    // AAPKA WHATSAPP NUMBER

    let whatsappNumber =
        "923153500874";


    let whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${message}`;


    window.open(
        whatsappURL,
        "_blank"
    );

}