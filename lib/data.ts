import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Capsules",
      email: "nanacapsules@gmail.com",
      password: bcrypt.hashSync("awesome2024"),
      isAdmin: true,
    },
    {
      name: "Klay",
      email: "user@example.com",
      password: bcrypt.hashSync("12345"),
      isAdmin: false,
    },
  ],
  product: [
    {
      name: "Free Shirt",
      slug: "free-shirt",
      category: "shirts",
      image: "/images/shirts1.webp",
      price: 70,
      brand: "Nike",
      rating: 4.5,
      numReview: 8,
      countInStock: 20,
      description: "A popular shirt",
      isFeatured: true,
      banner: "/images/banner1.webp",
    },
    {
      name: "Fit Shirt",
      slug: "fit-shirt",
      category: "shirts",
      image: "/images/shirts2.webp",
      price: 80,
      brand: "Adidas",
      rating: 4.8,
      numReview: 10,
      countInStock: 25,
      description: "A popular shirt",
      isFeatured: true,
      banner: "/images/banner2.jpg",
    },
    {
      name: "Slim Shirt",
      slug: "slim-shirt",
      category: "shirts",
      image: "/images/shirts3.avif",
      price: 60,
      brand: "Raymond",
      rating: 4.2,
      numReview: 7,
      countInStock: 22,
      description: "A popular shirt",
      isFeatured: true,
    },
    {
      name: "Golf Pants",
      slug: "golf-pants",
      category: "pants",
      image: "/images/pants1.webp",
      price: 64,
      brand: "Oliver",
      rating: 3.5,
      numReview: 10,
      countInStock: 10,
      description: "Smart looking pants",
      isFeatured: true,
    },
    {
      name: "Fit Pants",
      slug: "fit-pants",
      category: "pants",
      image: "/images/pants2.jpg",
      price: 64,
      brand: "Zara",
      rating: 4.8,
      numReview: 15,
      countInStock: 15,
      description: "A popular pants",
      isFeatured: true,
    },
    {
      name: "Classic Pants",
      slug: "classic-pants",
      category: "pants",
      image: "/images/pants3.webp",
      price: 100,
      brand: "Versace",
      rating: 4.5,
      numReview: 20,
      countInStock: 9,
      description: "A popular pants",
      isFeatured: true,
    },
    {
      name: "Nike Sneakers",
      slug: "nike-sneakers",
      category: "shoes",
      image: "/images/shoes1.png",
      price: 250,
      brand: "Nike",
      rating: 4.5,
      numReview: 20,
      countInStock: 25,
      description: "A popular sneakers",
      isFeatured: true,
    },
    {
      name: "Adidas Sneakers",
      slug: "adidas-sneakers",
      category: "shoes",
      image: "/images/shoes2.webp",
      price: 200,
      brand: "Adidas",
      rating: 4.4,
      numReview: 20,
      countInStock: 10,
      description: "A popular sneakers",
      isFeatured: true,
    },
  ],
};
export default data;
