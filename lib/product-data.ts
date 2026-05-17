export interface Product {
    id: string;
    slug: string;
    title: string;
    subtitle: string;
    price: number;
    category: string;
    description: string;
    dimensions: string;
    materials: string;
    artisan: string;
    images: string[];
    isNew?: boolean;
    isFeatured?: boolean;
    originalPrice?: number;
}

export const products: Product[] = [
    {
        id: "prod-001",
        slug: "golden-ayatul-kursi",
        title: "Ayatul Kursi Masterpiece",
        subtitle: "A divine reflection in fluid script",
        price: 1250,
        category: "Arabic Calligraphy",
        description: "This monumental piece renders the Verse of the Throne in exquisite Thuluth script. The sweeping curves and structured balance invite contemplation and bring a sense of profound serenity to any living space. Each stroke is deliberately placed, creating a visual harmony that mirrors the spiritual depth of the verse.",
        dimensions: "36 x 48 inches",
        materials: "Acrylic and 24k gold leaf on museum-grade canvas",
        artisan: "Crafted by Master Calligrapher Hasan Al-Khatib, an artisan with over three decades of dedication to classical Islamic scripts.",
        images: [
            "/images/calligraphy/ayatul-kursi-1.jpg",
            "/images/calligraphy/ayatul-kursi-2.jpg",
            "/images/calligraphy/ayatul-kursi-3.jpg",
            "/images/calligraphy/ayatul-kursi-4.jpg"
        ],
        isNew: true,
        isFeatured: true
    },
    {
        id: "prod-002",
        slug: "andalusian-zellige-plate",
        title: "Andalusian Star",
        subtitle: "Mathematical harmony visualized",
        price: 850,
        category: "Islamic Geometry",
        description: "Inspired by the timeless architecture of the Alhambra, this geometric study explores the interconnected nature of the twelve-pointed star. The interlocking shapes represent the infinite nature of creation, grounded in earthy tones that warm any interior.",
        dimensions: "24 x 24 inches",
        materials: "Natural pigments and walnut ink on handmade archival paper",
        artisan: "Designed by Yasmin Tariq, a geometrician focused on reviving historical Andalusian patterns using traditional compass and straightedge techniques.",
        images: [
            "/images/geometry/andalusian-star-1.jpg",
            "/images/geometry/andalusian-star-2.jpg",
            "/images/geometry/andalusian-star-3.jpg"
        ]
    },
    {
        id: "prod-003",
        slug: "silk-prayer-rug",
        title: "Desert Dusk",
        subtitle: "A modern homage to tranquil horizons",
        price: 1600,
        category: "Canvas Paintings",
        description: "Capturing the fleeting moments of Maghrib in the vast desert, this abstract piece utilizes layers of rich textures and warm neutral tones. Subtle gold accents catch the light, mimicking the last rays of the sun across sweeping dunes.",
        dimensions: "40 x 60 inches",
        materials: "Oil, textured paste, and metallic leaf on deep-edge canvas",
        artisan: "Painted by contemporary artist Sami El-Amin, known for his atmospheric, landscape-inspired minimalism.",
        images: [
            "/images/canvas/desert-dusk-1.jpg",
            "/images/canvas/desert-dusk-2.jpg",
            "/images/canvas/desert-dusk-3.jpg"
        ],
        isFeatured: true
    },
    {
        id: "prod-004",
        slug: "geometric-wood-panel",
        title: "Illuminated Bismillah",
        subtitle: "The beautiful beginning",
        price: 920,
        category: "Gold Foil Art",
        description: "A breathtaking rendition of the Basmalah, heavily adorned with intricate tezhip (illumination) work. The gold foil meticulously frames the central script, creating a radiant focal point that celebrates the starting of all blessed endeavors.",
        dimensions: "18 x 24 inches",
        materials: "Genuine 22k gold foil, gouache, and sumi ink on treated parchment",
        artisan: "Hand-illuminated by Zeynep Yilmaz, a traditional tezhip artist trained in Istanbul.",
        images: [
            "/images/gold-foil/illuminated-bismillah-1.jpg",
            "/images/gold-foil/illuminated-bismillah-2.jpg",
            "/images/gold-foil/illuminated-bismillah-3.jpg",
            "/images/gold-foil/illuminated-bismillah-4.jpg"
        ],
        isNew: true
    },
    {
        id: "prod-005",
        slug: "blue-kufic-canvas",
        title: "The Silent Dhikr",
        subtitle: "Movement and stillness captured",
        price: 1100,
        category: "Canvas Paintings",
        description: "An evocative impressionist portrait of a whirling dervish. The blurred edges and central focus beautifully express the spiritual state of achieving inner peace through movement. A quiet, contemplative piece for a modern study or living room.",
        dimensions: "30 x 40 inches",
        materials: "Acrylic and charcoal on linen canvas",
        artisan: "Created by Leyla Qasim, an artist who translates spiritual poetry into visual media.",
        images: [
            "/images/canvas/sufi-whirling-1.jpg",
            "/images/canvas/sufi-whirling-2.jpg",
            "/images/canvas/sufi-whirling-3.jpg"
        ]
    },
    {
        id: "prod-006",
        slug: "iznik-floral-vase",
        title: "Kufic Shahada Panel",
        subtitle: "Architectural script in deep onyx",
        price: 780,
        category: "Arabic Calligraphy",
        description: "A stark, modern take on traditional Kufic script. The Shahada is interwoven into a perfect square grid, offering a minimalist and highly structural aesthetic. The bold contrast of onyx black on warm cream makes a striking statement.",
        dimensions: "20 x 20 inches",
        materials: "Archival pigment ink on cold-pressed cotton paper",
        artisan: "Crafted by the Aynn Design Studio, focusing on minimalist interpretations of classic scripts.",
        images: [
            "/images/calligraphy/kufic-shahada-1.jpg",
            "/images/calligraphy/kufic-shahada-2.jpg",
            "/images/calligraphy/kufic-shahada-3.jpg"
        ]
    },
    {
        id: "prod-007",
        slug: "cashmere-throw",
        title: "Sacred Hexagons",
        subtitle: "The building blocks of nature",
        price: 640,
        category: "Islamic Geometry",
        description: "A mesmerizing array of interlocking hexagons expanding from a central seed of life. This piece reflects the ubiquitous presence of sacred geometry in the natural world, rendered in soft sage greens and warm taupe.",
        dimensions: "16 x 20 inches",
        materials: "Watercolor and gold acrylic on handmade paper",
        artisan: "Designed by Yasmin Tariq.",
        images: [
            "/images/geometry/sacred-hexagons-1.jpg",
            "/images/geometry/sacred-hexagons-2.jpg",
            "/images/geometry/sacred-hexagons-3.jpg"
        ]
    },
    {
        id: "prod-008",
        slug: "brass-astrolabe",
        title: "Golden Arabesque",
        subtitle: "Nature stylized in gold",
        price: 1450,
        category: "Gold Foil Art",
        description: "A lavish display of classic Rumi and Hatayi floral motifs flowing in an endless, rhythmic curve. The raised gold application adds a tactile, three-dimensional quality that shifts beautifully as light moves across the room.",
        dimensions: "24 x 36 inches",
        materials: "Raised gesso, 24k gold leaf, and acrylic on wood panel",
        artisan: "Hand-crafted by Zeynep Yilmaz, blending traditional motifs with modern gallery presentation.",
        images: [
            "/images/gold-foil/golden-arabesque-1.jpg",
            "/images/gold-foil/golden-arabesque-2.jpg",
            "/images/gold-foil/golden-arabesque-3.jpg",
            "/images/gold-foil/golden-arabesque-4.jpg"
        ],
        isFeatured: true
    }
];
