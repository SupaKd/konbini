export const CATEGORIES = [
  { id: "ramen", name: "Ramen" },
  { id: "snacks", name: "Snacks" },
  { id: "drinks", name: "Boissons" },
  { id: "sauces", name: "Sauces" },
  { id: "frozen", name: "Surgelés" },
  { id: "desserts", name: "Desserts" }
];

export const PRODUCTS = [
  { id: 1, slug: "ramen-miso", title: "Ramen Miso", price: 6.9, compareAt: 7.9, img: "/ramenmiso.jpeg", category: "ramen", tag: "Best-seller", desc: "Bouillon miso profond, nouilles élastiques, toppings au choix.", stock: 42, rating: { avg: 4.8, count: 132 }, origin: "Japon" },
  { id: 2, slug: "ramen-shoyu", title: "Ramen Shoyu", price: 6.5, img: "/ramenpoulet.jpeg", category: "ramen", desc: "Bouillon clair et équilibré, notes de sauce soja.", stock: 30, rating: { avg: 4.6, count: 98 }, origin: "Japon" },
  { id: 3, slug: "pocky-fraise", title: "Pocky Fraise", price: 2.8, compareAt: 3.2, img: "/pocky.jpeg", category: "snacks", tag: "Nouveau", desc: "Bâtonnets croustillants à la crème de fraise.", stock: 120, rating: { avg: 4.7, count: 210 }, origin: "Japon" },
  { id: 4, slug: "calpis", title: "Calpis", price: 2.5, img: "https://images.unsplash.com/photo-1587314168485-3236d6710814", category: "drinks", desc: "Boisson douce et rafraîchissante, légère acidité.", stock: 60, rating: { avg: 4.5, count: 76 }, origin: "Japon" },
  { id: 5, slug: "ramune-classique", title: "Ramune", price: 3.2, img: "/ramune.jpeg", category: "drinks", desc: "Soda japonais avec bille. Expérience ludique.", stock: 95, rating: { avg: 4.6, count: 154 }, origin: "Japon" },
  { id: 6, slug: "sauce-soja-kikkoman", title: "Sauce Soja Kikkoman", price: 4.9, img: "/kikkoman.jpeg", category: "sauces", desc: "Umami équilibré pour cuisine et assaisonnement.", stock: 70, rating: { avg: 4.9, count: 305 }, origin: "Japon" },
  { id: 7, slug: "gyoza-legumes", title: "Gyoza Légumes (12pcs)", price: 5.5, img: "gyoza.jpeg", category: "frozen", desc: "Raviolis japonais aux légumes, prêts en 5 minutes.", stock: 50, rating: { avg: 4.4, count: 89 }, origin: "Japon" },
  { id: 8, slug: "mochi-glace-the-vert", title: "Mochi Glacé Thé Vert (6pcs)", price: 6.2, img: "mochi.jpeg", category: "desserts", desc: "Glace au thé matcha enrobée de pâte de riz.", stock: 40, rating: { avg: 4.7, count: 143 }, origin: "Japon" },
  { id: 9, slug: "kit-kat-matcha", title: "Kit Kat Matcha", price: 3.8, img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc", category: "snacks", desc: "Chocolat croustillant au matcha.", stock: 80, rating: { avg: 4.5, count: 201 }, origin: "Japon" },
  { id: 10, slug: "ramen-tonkotsu", title: "Ramen Tonkotsu", price: 7.5, img: "/ramen.png", category: "ramen", desc: "Bouillon riche à l'os de porc, crémeux et intense.", stock: 25, rating: { avg: 4.8, count: 165 }, origin: "Japon" },
  { id: 11, slug: "yakitori-poulet", title: "Yakitori Poulet (5pcs)", price: 4.5, img: "https://images.unsplash.com/photo-1553621042-f6e147245754", category: "frozen", desc: "Brochettes de poulet sauce sucrée salée.", stock: 55, rating: { avg: 4.6, count: 132 }, origin: "Japon" },
  { id: 12, slug: "dorayaki-haricot-rouge", title: "Dorayaki Haricot Rouge", price: 3.5, img: "/doroyaki.jpeg", category: "desserts", desc: "Pancakes fourrés à la pâte de haricots rouges.", stock: 65, rating: { avg: 4.7, count: 174 }, origin: "Japon" }
];
