const products = [
  {
    id: "gym-001",
    name: "Performance Active Tee",
    category: "gym",
    price: 699,
    image: "assets/product-1.jpg",
    description: "Clean athletic style made for training and everyday wear.",
    sizes: ["S", "M", "L", "XL"]
  },

  {
    id: "men-001",
    name: "Premium Printed Tee",
    category: "men",
    price: 649,
    image: "assets/product-2.jpg",
    description: "A versatile everyday tee with a modern printed design.",
    sizes: ["S", "M", "L", "XL"]
  },

  {
    id: "genz-001",
    name: "Urban Graphic Tee",
    category: "genz",
    price: 749,
    image: "assets/product-3.jpg",
    description: "Modern graphic style built for everyday outfits.",
    sizes: ["S", "M", "L", "XL"]
  }
];


export function getProducts() {
  return products;
}


export function getProductById(id) {
  return products.find(product => product.id === id);
}


export function getProductsByCategory(category) {
  return products.filter(
    product => product.category === category
  );
}
