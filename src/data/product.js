export const CATEGORIES = [
  { id: "classics", name: "Classiques" },
  { id: "sugarfree", name: "Sans Sucre" },
  { id: "editions", name: "Éditions Spéciales" },
  { id: "packs", name: "Packs" }
];

export const PRODUCTS = [
  {
    id: 1,
    slug: "redbull-classic-250ml",
    title: "Red Bull Classic 250ml",
    price: 2.2,
    img: "/nature.jpeg",
    category: "classics",
    tag: "Best-seller",
    desc: "Énergie iconique, goût original. Canette 250ml.",
    stock: 120,
    rating: { avg: 4.9, count: 520 },
    origin: "Autriche"
  },
  {
    id: 2,
    slug: "redbull-coco-250ml",
    title: "Red Bull Coco 250ml",
    price: 3.8,
    img: "/coco.jpeg",
    category: "editions",
    desc: "Format grand pour une dose d’énergie prolongée.",
    stock: 80,
    rating: { avg: 4.8, count: 310 },
    origin: "Autriche"
  },
  {
    id: 6,
    slug: "redbull-watermelon-edition",
    title: "Red Bull Watermelon Edition",
    price: 2.6,
    img: "/fraise.jpeg",
    category: "editions",
    desc: "Édition Pastèque – goût rafraîchissant et fruité.",
    stock: 90,
    rating: { avg: 4.9, count: 310 },
    origin: "Autriche"
  },
  {
    id: 5,
    slug: "redbull-tropical-edition",
    title: "Red Bull Tropical Edition",
    price: 2.6,
    compareAt: 2.9,
    img: "/tropi.jpeg",
    category: "editions",
    tag: "Nouveau",
    desc: "Édition Tropicale – goût fruit de la passion.",
    stock: 95,
    rating: { avg: 4.8, count: 275 },
    origin: "Autriche"
  },
  {
    id: 3,
    slug: "redbull-sugarfree-250ml",
    title: "Red Bull Sugarfree 250ml",
    price: 2.3,
    img: "/sugar.jpeg",
    category: "sugarfree",
    desc: "Même énergie, sans sucre. Goût léger et frais.",
    stock: 100,
    rating: { avg: 4.7, count: 180 },
    origin: "Autriche"
  },
  
 

  {
    id: 7,
    slug: "redbull-blue-edition",
    title: "Red Bull Blue Edition",
    price: 2.6,
    img: "/turk.jpeg",
    category: "editions",
    desc: "Édition Myrtille – goût doux et acidulé.",
    stock: 85,
    rating: { avg: 4.8, count: 290 },
    origin: "Autriche"
  },
  {
    id: 8,
    slug: "redbull-coconut-edition",
    title: "Red Bull Coconut Edition",
    price: 2.6,
    img: "/violet.jpeg",
    category: "editions",
    desc: "Édition Coco & Açaï – saveur exotique et onctueuse.",
    stock: 70,
    rating: { avg: 4.7, count: 205 },
    origin: "Autriche"
  },
  {
    id: 9,
    slug: "pack-redbull-classic-6x250ml",
    title: "Pack Red Bull Classic (6x250ml)",
    price: 11.9,
    img: "/vert.jpeg",
    category: "packs",
    desc: "Pack de 6 canettes de Red Bull Classic 250ml.",
    stock: 60,
    rating: { avg: 4.9, count: 340 },
    origin: "Autriche"
  },
  {
    id: 10,
    slug: "pack-redbull-mix-6x250ml",
    title: "Pack Mix Red Bull (6x250ml)",
    price: 12.5,
    img: "/vert1.jpeg",
    category: "packs",
    desc: "Pack découverte avec 6 éditions Red Bull différentes.",
    stock: 45,
    rating: { avg: 4.8, count: 410 },
    origin: "Autriche"
  },
  {
    id: 4,
    slug: "redbull-zero-250ml",
    title: "Red Bull Zero 250ml",
    price: 2.4,
    img: "/sugar.jpeg",
    category: "sugarfree",
    desc: "Version sans sucre et sans calorie du Red Bull original.",
    stock: 75,
    rating: { avg: 4.6, count: 150 },
    origin: "Autriche"
  }
];
