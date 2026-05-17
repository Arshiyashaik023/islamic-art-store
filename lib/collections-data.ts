export interface CollectionItem {
    id: string;
    slug: string;
    title: string;
    subtitle: string;
    price: number;
    category: string;
    image: string;
    gallery: string[];
    description: string;
    isNew?: boolean;
}

export const collections: CollectionItem[] = [
    {
        id: "1",
        slug: "golden-ayatul-kursi",
        title: "Golden Ayatul Kursi",
        subtitle: "Handcrafted Calligraphy",
        price: 250,
        category: "Arabic Calligraphy",
        image: "/images/collections/products/ayatul-kursi.jpg",
        gallery: [
            "/images/collections/products/ayatul-kursi.jpg",
            "/images/collections/products/zellige-plate.jpg",
            "/images/collections/products/prayer-rug.jpg"
        ],
        description: "A stunning piece of handcrafted calligraphy featuring Ayatul Kursi, finished with elegant gold leaf detailing. This piece brings a sense of divine protection and serenity to any space, meticulously crafted by master artisans.",
        isNew: true
    },
    {
        id: "2",
        slug: "andalusian-zellige-plate",
        title: "Andalusian Zellige Plate",
        subtitle: "Hand-painted Ceramics",
        price: 180,
        category: "Islamic Wall Decor",
        image: "/images/collections/products/zellige-plate.jpg",
        gallery: [
            "/images/collections/products/zellige-plate.jpg",
            "/images/collections/products/wood-panel.jpg",
            "/images/collections/products/iznik-vase.jpg"
        ],
        description: "Traditional Andalusian design meets modern elegance. This hand-painted zellige plate features intricate geometric patterns inspired by the Alhambra, perfect as a centerpiece or wall display."
    },
    {
        id: "3",
        slug: "silk-prayer-rug",
        title: "Silk Prayer Rug",
        subtitle: "Woven Turkish Silk",
        price: 450,
        category: "Fine Artwork",
        image: "/images/collections/products/prayer-rug.jpg",
        gallery: [
            "/images/collections/products/prayer-rug.jpg",
            "/images/collections/products/cashmere-throw.jpg"
        ],
        description: "Experience the ultimate comfort and spiritual connection with this exquisite silk prayer rug. Woven by skilled artisans in Turkey, it features a traditional Mihrab design with exceptionally soft texture."
    },
    {
        id: "4",
        slug: "geometric-wood-panel",
        title: "Geometric Wood Panel",
        subtitle: "Carved Walnut",
        price: 320,
        category: "Islamic Wall Decor",
        image: "/images/collections/products/wood-panel.jpg",
        gallery: [
            "/images/collections/products/wood-panel.jpg",
            "/images/collections/products/astrolabe.jpg"
        ],
        description: "A masterful display of Islamic geometric principles carved into solid walnut. This decorative panel creates mesmerizing shadow plays and adds a profound sense of mathematical harmony to your home.",
        isNew: true
    },
    {
        id: "5",
        slug: "blue-kufic-canvas",
        title: "Blue Kufic Canvas",
        subtitle: "Modern Kufic Script",
        price: 210,
        category: "Canvas Paintings",
        image: "/images/collections/products/blue-kufic.jpg",
        gallery: [
            "/images/collections/products/blue-kufic.jpg",
            "/images/collections/products/ayatul-kursi.jpg"
        ],
        description: "Contemporary interpretation of classic Kufic script in deep indigo and gold. This canvas bridges the gap between ancient tradition and modern interior design."
    },
    {
        id: "6",
        slug: "iznik-floral-vase",
        title: "Iznik Floral Vase",
        subtitle: "Traditional Glaze",
        price: 290,
        category: "Fine Artwork",
        image: "/images/collections/products/iznik-vase.jpg",
        gallery: [
            "/images/collections/products/iznik-vase.jpg",
            "/images/collections/products/zellige-plate.jpg"
        ],
        description: "Inspired by the legendary Iznik pottery of the Ottoman Empire, this vase features vibrant turquoise and ruby red floral motifs beneath a flawless glass-like glaze."
    },
    {
        id: "7",
        slug: "cashmere-throw",
        title: "Embroidered Cashmere Throw",
        subtitle: "Hand-embroidered Details",
        price: 380,
        category: "Fine Artwork",
        image: "/images/collections/products/cashmere-throw.jpg",
        gallery: [
            "/images/collections/products/cashmere-throw.jpg",
            "/images/collections/products/prayer-rug.jpg",
            "/images/collections/products/astrolabe.jpg"
        ],
        description: "Luxuriously soft cashmere adorned with subtle, hand-embroidered arabesque patterns. A perfect blend of warmth, comfort, and understated artistic elegance."
    },
    {
        id: "8",
        slug: "brass-astrolabe",
        title: "Decorative Brass Astrolabe",
        subtitle: "Historical Replica",
        price: 540,
        category: "Fine Artwork",
        image: "/images/collections/products/astrolabe.jpg",
        gallery: [
            "/images/collections/products/astrolabe.jpg",
            "/images/collections/products/wood-panel.jpg"
        ],
        description: "A meticulously crafted replica of a medieval Islamic astrolabe. While purely decorative, it stands as a testament to the golden age of scientific and artistic achievement."
    }
];

export const CATEGORIES = ["All", "Arabic Calligraphy", "Canvas Paintings", "Islamic Wall Decor", "Fine Artwork"];
export const SORT_OPTIONS = [
    { label: "Newest", value: "newest" },
    { label: "Price: Low to High", value: "price-asc" },
    { label: "Price: High to Low", value: "price-desc" }
];
