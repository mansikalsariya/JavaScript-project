let slider = {
    slides: document.querySelectorAll('.slide'),
    currentslide: 0,
    intervalId: null, // To store the interval ID for clearing it later

    init: function () {
        if (!this.slides.length) {
            console.log("No slides found");
            return;
        }
        this.showSlide(this.currentslide);
        this.startAutoSlide(); // Start automatic sliding
    },

    showSlide: function (index) {
        this.slides.forEach((slide) => {
            slide.classList.remove('active');
        });
        this.slides[index].classList.add('active');
    },

    prev: function () {
        this.currentslide = (this.currentslide - 1 + this.slides.length) % this.slides.length;
        this.showSlide(this.currentslide);
    },

    next: function () {
        this.currentslide = (this.currentslide + 1) % this.slides.length;
        this.showSlide(this.currentslide);
    },

    startAutoSlide: function () {
        // Clear any existing interval to avoid multiple intervals running
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
        // Set an interval to automatically change slides every 3 seconds
        this.intervalId = setInterval(() => this.next(), 5000);
    },

    stopAutoSlide: function () {
        // Clear the interval to stop automatic sliding
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }
};



//   loder

document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');

    // Simulate a delay (e.g., data fetching or content rendering)
    setTimeout(() => {
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';
        content.style.display = 'block';
    }, 2000); // Adjust the delay as needed (2000ms = 2 second)
});



document.addEventListener('DOMContentLoaded', () => {
    slider.init();
});

const products = [
    {
        id: 1,
        name: 'Trendsetter Threads',
        price: 80,
        category: 'best sellers',
        inStock: false,
        image: 'image/special_product_1.jpg'
    },

    {
        id: 2,
        name: 'Radiant Rose',
        price: 90,
        category: 'best sellers',
        inStock: false,
        image: 'image/special_product_2.jpg'
    },

    {
        id: 3,
        name: 'Sassy & Sophisticated',
        price: 80,
        category: 'best sellers',
        inStock: false,
        image: 'image/special_product_3.jpg'
    },

    {
        id: 4,
        name: 'Divine Drape_kurti',
        price: 90,
        category: 'best sellers',
        inStock: false,
        image: 'image/special_product_4.jpg'
    },

    {
        id: 5,
        name: 'Femme Flair',
        price: 80,
        category: 'best sellers',
        inStock: false,
        image: 'image/plaza.webp'

    },

    {
        id: 6,
        name: 'Urban Elegance',
        price: 90,
        category: 'best sellers',
        inStock: false,
        image: 'image/kurta.webp'
    },


    {
        id: 7,
        name: 'Chic Avenue',
        price: 80,
        category: 'best sellers',
        inStock: false,
        image: 'image/bombay1.webp'
    },
    {
        id: 8,
        name: 'Formalwear',
        price: 90,
        category: 'best sellers',
        inStock: false,
        image: 'image/women.webp'
    },
    {
        id: 9,
        name: 'Black_shirt',
        price: 25,
        category: 'Featured',
        inStock: true,
        image: 'image/men1.webp'
    },

    {
        id: 10,
        name: 'Bold Attire',
        price: 60,
        category: 'Featured',
        inStock: true,
        image: 'image/men2.webp'
    },

    {
        id: 11,
        name: 'Maverick Styles',
        price: 25,
        category: 'Featured',
        inStock: true,
        image: 'image/men4.webp'
    },

    {
        id: 12,
        name: 'Prestige Formalwear',
        price: 40,
        category: 'Featured',
        inStock: true,
        image: 'image/men8.webp'
    },

    {
        id: 13,
        name: 'T-shirt_men',
        price: 60,
        category: 'New Arrival',
        inStock: true,
        image: 'image/men4.webp'

    },
    {
        id: 14,
        name: 'Executive Couture',
        price: 50,
        category: 'New Arrival',
        inStock: true,
        image: 'image/men5.webp'
    },

    {
        id: 15,
        name: 'Noble Threads',
        price: 60,
        category: 'New Arrival',
        inStock: true,
        image: 'image/men6.webp'
    },

    {
        id: 16,
        name: 'Premier Formals',
        price: 40,
        category: 'New Arrival',
        inStock: true,
        image: 'image/men7.webp'
    },

    {
        id: 17,
        name: 'Little Trendsetters',
        price: 90,
        category: 'New Arrival',
        inStock: false,
        image: 'image/kids1.webp'
    },

    {
        id: 18,
        name: 'Tiny Treasures',
        price: 90,
        category: 'New Arrival',
        inStock: false,
        image: 'image/kids2.webp'
    },

    {
        id: 19,
        name: 'Kiddos Couture',
        price: 90,
        category: 'Featured',
        inStock: false,
        image: 'image/kids3.webp'
    },

    {
        id: 20,
        name: 'Playful Threads',
        price: 70,
        category: 'Featured',
        inStock: false,
        image: 'image/kids4.webp'
    },

    {
        id: 21,
        name: 'Mini Marvels',
        price: 90,
        category: 'New Arrival',
        inStock: false,
        image: 'image/kid5.webp'
    },

    {
        id: 22,
        name: 'Kiddo Kingdom',
        price: 90,
        category: 'New Arrival',
        inStock: false,
        image: 'image/kids6.webp'
    },

    {
        id: 23,
        name: 'Joyful Jumpsuits',
        price: 90,
        category: 'Featured',
        inStock: false,
        image: 'image/kids7.webp'
    },

    {
        id: 24,
        name: 'T-shirt_men',
        price: 70,
        category: 'Charming Cubs',
        inStock: false,
        image: 'image/kind3.webp'
    },

];

function displayProducts(productsToDisplay) {
    const productList = document.getElementById('productList');
    productList.innerHTML = ''; // Clear previous list

    productsToDisplay.forEach(product => {
        const productItem = document.createElement('li');

        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div><strong>${product.name}</strong></div>
            <div>Price: $${product.price}</div>
            <div>Category: ${product.category}</div>
            <div>
          <div class="product-actions">
    <a href="product.html?id=${product.id}" class="btn btn-primary">View Details</a>
    <button class="add-to-cart btn btn-primary" data-product-id="${product.id}" data-product-name="${product.name}" data-product-price="${product.price}" data-product-image="${product.image}">Add to Cart</button>
</div>

             `;

        productList.appendChild(productItem);
    });
}




function filterProducts(category) {
    let filteredProducts;
    if (category === 'All') {
        filteredProducts = products;
    } else {
        filteredProducts = products.filter(product => product.category === category);
    }
    updateProductList(filteredProducts);
}

function updateProductList(productsToDisplay) {
    let displayedProducts = productsToDisplay;

    const searchValue = document.getElementById('search-name').value.toLowerCase();
    displayedProducts = displayedProducts.filter(product => product.name.toLowerCase().includes(searchValue));

    const sortOrder = document.getElementById('sort-price').value;
    displayedProducts = displayedProducts.sort((a, b) => {
        return sortOrder === 'asc' ? a.price - b.price : (sortOrder === 'desc' ? b.price - a.price : 0);
    });

    displayProducts(displayedProducts);
}

document.getElementById('search-name').addEventListener('input', function () {
    updateProductList(products);
});

document.getElementById('sort-price').addEventListener('change', function () {
    updateProductList(products);
});

document.querySelectorAll('.productList').forEach(button => {
    button.addEventListener('click', () => {
        filterProducts(button.getAttribute('data-filter').replace('.', ''));
    });
});

displayProducts(products);

// add tocart 

function addToCart(productId, productName, productPrice, productImage) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let existingProductIndex = cart.findIndex(item => item.id === productId);

    if (existingProductIndex !== -1) {
        alert('Product already added');
        return;
    }

    cart.push({
        id: productId,
        name: productName,
        price: productPrice,
        image: productImage,
        quantity: 1
    });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cartCount').innerText = cart.length;
}

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        let productId = button.getAttribute('data-product-id');
        let productName = button.getAttribute('data-product-name');
        let productPrice = button.getAttribute('data-product-price');
        let productImage = button.getAttribute('data-product-image');
        addToCart(productId, productName, productPrice, productImage);
    });
});

updateCartCount(); // Initialize cart count

