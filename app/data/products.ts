export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  isNew?: boolean;
}

export const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Ayatul Kursi Masterpiece",
    price: 350,
    image: "/images/products/Ayatul kursi.jpg",
    isNew: true,
  },
  {
    id: "2",
    name: "Ancient Makkah Canvas",
    price: 280,
    originalPrice: 320,
    image: "/images/products/ancient makkah.jpg",
  },
  {
    id: "3",
    name: "Bismillah Calligraphy",
    price: 195,
    image: "/images/products/bismillah.jpg",
  },
  {
    id: "4",
    name: "Makkah Silhouette Art",
    price: 420,
    image: "/images/products/makkah.png",
  },
  {
    id: "5",
    name: "Qul Wood Panel",
    price: 150,
    image: "/images/products/qul.png",
  },
  {
    id: "6",
    name: "Camels Desert Art",
    price: 210,
    originalPrice: 250,
    image: "/images/products/camels art.jpg",
  },
  {
    id: "7",
    name: "Old Makkah Gold Leaf",
    price: 540,
    image: "/images/products/makkah old.jpg",
    isNew: true,
  },
];
