let cart = [];

const whatsappNumber = "923001234567";


/* ADD TO CART */

document.querySelectorAll(".cart-btn").forEach(function(button){

    button.addEventListener("click",function(){

        const card =
            button.closest(".product-card");

        const productName =
            card.querySelector("h3").textContent;

        const productPrice =
            card.querySelector(".price").textContent;

        const productImage =
            card.querySelector("img").src;


        cart.push({

            name:productName,
            price:productPrice,
            image:productImage

        });


        updateCart();


        document.getElementById("cart").scrollIntoView({
            behavior:"smooth"
        });

    });

});


/* UPDATE CART */

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
        `
        <p class="empty-cart">
            Your cart is empty.
        </p>
        `;

        cartTotal.textContent = "0";

        return;
    }


    let total = 0;


    cartItems.innerHTML =
        cart.map(function(item,index){

            let price =
                parseFloat(
                    item.price.replace("£","")
                );

            total += price;


            return `

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
                        ${item.price}
                    </p>

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


/* REMOVE ITEM */

function removeItem(index){

    cart.splice(index,1);

    updateCart();

}


/* SEARCH */

function searchProducts(){

    const search =
        document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const products =
        document.querySelectorAll(".product-card");


    products.forEach(function(product){

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


document
.getElementById("searchInput")
.addEventListener("keyup",function(event){

    if(event.key === "Enter"){

        searchProducts();

    }

});


/* FILTER */

function filterProducts(category,button){

    const products =
        document.querySelectorAll(".product-card");

    const buttons =
        document.querySelectorAll(".filter-buttons button");


    buttons.forEach(function(btn){

        btn.classList.remove("active");

    });


    button.classList.add("active");


    products.forEach(function(product){

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


/* WISHLIST */

document
.querySelectorAll(".wishlist")
.forEach(function(button){

    button.addEventListener("click",function(){

        const icon =
            button.querySelector("i");

        icon.classList.toggle("fa-regular");
        icon.classList.toggle("fa-solid");

    });

});


/* ORDER DONE */

function orderDone(){

    if(cart.length === 0){

        alert(
            "Please add a bag to your cart first."
        );

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