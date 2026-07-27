const products = [
  {
    id: 1,
    title: "Phone",
    icon: "📞",
    value: "+92 300 1234567"
  },
  {
    id: 2,
    title: "Email",
    icon: "📧",
    value: "crochetbags@gmail.com"
  },
  {
    id: 3,
    title: "Address",
    icon: "📍",
    value: "Clifton, Karachi, Pakistan"
  },
  {
    id: 4,
    title: "WhatsApp",
    icon: "💬",
    value: "+92 300 1234567"
  },
  {
    id: 5,
    title: "Instagram",
    icon: "📸",
    value: "@crochetbags"
  },
  {
    id: 6,
    title: "Facebook",
    icon: "📘",
    value: "Crochet Bags Store"
  },
  {
    id: 7,
    title: "TikTok",
    icon: "🎵",
    value: "@crochetbags"
  },
  {
    id: 8,
    title: "Business Hours",
    icon: "🕒",
    value: "Monday - Saturday | 9:00 AM - 7:00 PM"
  }
];
let html = '';

let container = document.getElementById('work');

for(let i=0; i<products.length; i++){

  html +=`
   <div class="card">
      <div class="img-container">
        <img src="${products[i].image}" alt="">
      </div>
      <div class="content">
        <span class="price">${products[i].price}</span>
        <h3>${products[i].name}t</h3>
        <p class="descript">${products[i].description}</p>
        
        <!-- WhatsApp Order Link (Replace 923001234567 with your actual WhatsApp number) -->
        <a href="https://wa.me/923001234567?text=Hi!%20I%20want%20to%20order%20Simply%20Crochet" target="_blank" class="order-btn">Order Now</a>
      </div>
    </div>
  `

}

container.innerHTML = html;
