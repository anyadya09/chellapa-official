document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
 
        items: [
            { id: 1, name: 'chellapa1', img: '1.jpg', price: 2000 },
            { id: 2, name: 'chellapa2', img: '2.jpg', price: 3000 },
            { id: 3, name: 'chellapa3', img: '3.jpg', price: 4000 },
            { id: 4, name: 'chellapa4', img: '4.jpg', price: 5000 },
        ],
        }));
});