// function Data() {
//     fetch('https://fakestoreapi.com/products')
//     .then(response => response.json())
//     .then(data => {

//     });

// Data();

let url = "http://fakestoreapi.com/products";

fetch(url) 
.then(data =>  data.json()) 
.then(json => console.log(json));

function Data() {
        let product = data;
        let output = '';
        product.forEach((product, index) => {
            if (index < 3) {
                output.innerHTML += `
            <div class="category-card">
                <div class="category__card-image">
                    <img src="${product.image}"/>
            </div>
            <div class="category-card-content">
            <p class="category-card-title">${product.title}</p>
            <p class="category-card-price">$${product.price}</p>
            </div>

        <p class="category">${product.category}</p>
    </div>
    `
    }
});


Data();

}