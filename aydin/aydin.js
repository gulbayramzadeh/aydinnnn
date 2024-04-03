 //TASK 1

// Mehsullari gosteren bir array
let products = [
    {
        name: "Telefon",
        price: 1000 
    },
    { 
        name: "Notebook", 
        price: 1500 
    },
    {
         name: "Planset",
          price: 700 
        },
    { 
        name: "Kamera",
         price: 800 
        },
    {
         name: "Qulaqlıq", 
         price: 200 
        }
];

// Mehsullari qiymetine göre sırala (ucuzdan bahalıya)
products.sort(function(a, b) {
    return a.price - b.price;
});

// Sıralanmış mehsullari göster
console.log("Mehsullari qiymetine göre sıralı siyahisi:");
products.forEach(function(product) {
    console.log(product.name + " - " + product.price + " AZN");
});




 //TASK 2

 // Beş random eded cixarmaq  ucun bir funksiya
function randomEdedCixar() {
    return Math.floor(Math.random() * 100) + 1; // 1 ile 100 arasında random eded cixarir
}

// Beş random ededden ibaret bir list yaradaq 
let ededler = [];
for (let i = 0; i < 5; i++) {
    sayilar.push(randomEdedCixar());
}

// Listdeki ededleri konsola yazdırmaq
console.log("Yaradilmis beş random eded: " + ededler);

// Listdeki ededlerin ceminin  tapilmasi
let cem = 0;
for (let j = 0; j < ededler.length; j++) {
    cem += ededler[j];
}

// Toplamı konsola yazdırma
console.log("Ededlerin cemi: " + cemi);






























