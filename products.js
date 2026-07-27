const products = [
  {
    id: 1,
    name: "Crochet Teddy Bear",
    price: 25,
    description: "Soft handmade crochet teddy bear, perfect for gifting and decoration.",
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Crochet Bunny",
    price: 22,
    description: "Cute handmade crochet bunny with a soft and adorable design.",
    image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Crochet Flower",
    price: 8,
    description: "Beautiful handmade crochet flower for decoration and gifts.",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    name: "Crochet Handbag",
    price: 35,
    description: "Stylish handmade crochet handbag suitable for everyday use.",
    image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    name: "Crochet Tote Bag",
    price: 30,
    description: "Beautiful crochet tote bag with a simple handmade design.",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    name: "Crochet Baby Blanket",
    price: 45,
    description: "Warm and soft crochet baby blanket made with cozy yarn.",
    image: "https://images.unsplash.com/photo-1580301762395-21ce6a05f7e0?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 7,
    name: "Crochet Scarf",
    price: 20,
    description: "Warm handmade crochet scarf with a comfortable soft texture.",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 8,
    name: "Crochet Beanie",
    price: 18,
    description: "Cozy crochet beanie that keeps you warm and looks stylish.",
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 9,
    name: "Crochet Headband",
    price: 12,
    description: "Cute handmade crochet headband with a comfortable fit.",
    image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 10,
    name: "Crochet Coaster Set",
    price: 15,
    description: "Set of handmade crochet coasters for your dining table.",
    image: "https://images.unsplash.com/photo-1603199506016-b9a594b593c0?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 11,
    name: "Crochet Basket",
    price: 28,
    description: "Handmade crochet basket for organizing small household items.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 12,
    name: "Crochet Cushion Cover",
    price: 24,
    description: "Decorative crochet cushion cover with a beautiful handmade pattern.",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 13,
    name: "Crochet Keychain",
    price: 7,
    description: "Small handmade crochet keychain that makes a lovely little gift.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 14,
    name: "Crochet Wallet",
    price: 20,
    description: "Compact handmade crochet wallet for carrying cards and cash.",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 15,
    name: "Crochet Pouch",
    price: 16,
    description: "Cute crochet pouch for storing cosmetics, accessories and small items.",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 16,
    name: "Crochet Phone Bag",
    price: 19,
    description: "Small crochet crossbody phone bag with a handmade finish.",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 17,
    name: "Crochet Flower Bouquet",
    price: 32,
    description: "Handmade crochet flower bouquet that stays beautiful for a long time.",
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 18,
    name: "Crochet Gajra",
    price: 10,
    description: "Beautiful handmade crochet gajra for traditional and festive looks.",
    image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 19,
    name: "Crochet Hair Clip",
    price: 9,
    description: "Pretty handmade crochet hair clip decorated with yarn details.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 20,
    name: "Crochet Mug Cozy",
    price: 11,
    description: "Cute crochet mug cozy that adds a handmade touch to your coffee cup.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 21,
    name: "Crochet Plant Holder",
    price: 21,
    description: "Handmade crochet plant holder for decorating your home with plants.",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 22,
    name: "Crochet Table Runner",
    price: 38,
    description: "Elegant handmade crochet table runner for beautiful home decoration.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 23,
    name: "Crochet Baby Booties",
    price: 17,
    description: "Soft handmade crochet baby booties designed for little feet.",
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 24,
    name: "Crochet Baby Hat",
    price: 15,
    description: "Warm and adorable handmade crochet hat for babies.",
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 25,
    name: "Crochet Slippers",
    price: 26,
    description: "Comfortable handmade crochet slippers perfect for relaxing at home.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 26,
    name: "Crochet Flower Pot Cover",
    price: 18,
    description: "Decorative crochet cover designed to make your plant pots look beautiful.",
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 27,
    name: "Crochet Doll",
    price: 29,
    description: "Adorable handmade crochet doll made with soft colorful yarn.",
    image: "https://images.unsplash.com/photo-1594784058519-2c2c2c6a0b0a?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 28,
    name: "Crochet Cat",
    price: 23,
    description: "Cute handmade crochet cat toy with a charming handmade design.",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 29,
    name: "Crochet Mushroom",
    price: 14,
    description: "Cute handmade crochet mushroom decoration for your room or desk.",
    image: "https://images.unsplash.com/photo-1504545102780-26774c1bb073?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 30,
    name: "Crochet Heart",
    price: 10,
    description: "Sweet handmade crochet heart decoration that makes a lovely gift.",
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=600&q=80"
  }
];
let html = '';

let container = document.getElementById('work');

for(let i=0; i<products.length; i++){

  html +=`
    <div class="product-card" data-category="gajras">

            <div class="product-image">

                <img
                src="https://images.unsplash.com/photo-1528825871115-3581a5387919?w=700"
                alt="Crochet Gajra">

                <button class="heart">
                    <i class="fa-regular fa-heart"></i>
                </button>

            </div>

            <div class="product-info">

                <span class="category-name">
                    Gajras
                </span>

                <h3>Crochet Gajra</h3>

                <p>
                    Beautiful handmade crochet gajra.
                </p>

                <div class="rating">
                    ★★★★★
                </div>

                <div class="bottom">

                    <span class="price">
                        £12
                    </span>

                    <button class="cart-btn">
                        <i class="fa-solid fa-cart-plus"></i>
                    </button>

                </div>

            </div>

        </div>

  `

}

container.innerHTML = html;
let cart = [];

const whatsappNumber = "923001234567";


/* ADD TO CART */

document.querySelectorAll(".cart-btn").forEach(function(button){

    button.addEventListener("click", function(){

        const card = button.closest(".product-card");

        const productName =
            card.querySelector("h3").textContent;

        const productPrice =
            card.querySelector(".price").textContent;

        const productImage =
            card.querySelector("img").src;


        cart.push({
            name: productName,
            price: productPrice,
            image: productImage
        });


        updateCart();


        /* Product add hone ke baad Cart par le jayega */

        document.getElementById("cart").scrollIntoView({
            behavior: "smooth"
        });

    });

});


/* CART SHOW */

function updateCart(){

    const cartItems =
        document.getElementById("cartItems");

    const cartCount =
        document.getElementById("cartCount");

    const cartTotal =
        document.getElementById("cartTotal");


    cartCount.textContent = cart.length;


    if(cart.length === 0){

        cartItems.innerHTML =
        `<p class="empty-cart">
            Your cart is empty.
        </p>`;

        cartTotal.textContent = "0";

        return;
    }


    let total = 0;


    cartItems.innerHTML = cart.map(function(item,index){

        let price =
            parseFloat(
                item.price.replace("£","")
            );


        total += price;


        return `

        <div class="cart-item">

            <img src="${item.image}" alt="${item.name}">

            <div class="cart-item-info">

                <h3>${item.name}</h3>

                <p>${item.price}</p>

            </div>

            <button
                class="remove-btn"
                onclick="removeItem(${index})">

                Remove

            </button>

        </div>

        `;

    }).join("");


    cartTotal.textContent =
        total.toFixed(2);

}


/* REMOVE PRODUCT */

function removeItem(index){

    cart.splice(index,1);

    updateCart();

}


/* ORDER DONE */

function orderDone(){

    if(cart.length === 0){

        alert("Please add a product to your cart first.");

        return;

    }


    let message =
        "Hello! I want to order:%0A%0A";


    cart.forEach(function(item,index){

        message +=
        `${index + 1}. ${item.name} - ${item.price}%0A`;

    });


    let total =
        cart.reduce(function(sum,item){

            return sum +
            parseFloat(
                item.price.replace("£","")
            );

        },0);


    message +=
    `%0ATotal: £${total.toFixed(2)}`;


    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${message}`;


    window.open(
        whatsappURL,
        "_blank"
    );

}
