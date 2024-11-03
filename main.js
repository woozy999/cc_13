fetch('https://www.course-api.com/javascript-store-products')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        displayProducts(data);
    })
    .catch(error => {
        handleError(error);
    });

function displayProducts(products) {
    const productContainer = document.getElementById('product-container');
    
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const companyName = document.createElement('h2');
        companyName.textContent = product.fields.company;

        const productName = document.createElement('h3');
        productName.textContent = product.fields.name;

        const productPrice = document.createElement('p');
        productPrice.textContent = `Price: $${product.fields.price}`;

        const productImage = document.createElement('img');
        productImage.src = product.fields.image[0].url;
        productImage.alt = product.fields.name;

        productDiv.appendChild(companyName);
        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(productImage);

        productContainer.appendChild(productDiv);
    });
}

function handleError(error) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = 'Failed to load products. Please try again later.';
    errorMessage.style.display = 'block';
    console.error('Fetch error:', error);
}