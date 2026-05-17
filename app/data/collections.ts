export interface Collection {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  image: string;
  href: string;
}

export const collections: Collection[] = [
  {
    id: "arabic-calligraphy",
    label: "Collection",
    title: "Arabic Calligraphy",
    subtitle: "Handcrafted masterpieces in timeless script",
    image: "/images/collections/arabic calligraphy.jpg",
    href: "/collections?category=Arabic+Calligraphy",
  },
  {
    id: "canvas-paintings",
    label: "Collection",
    title: "Canvas Paintings",
    subtitle: "Contemporary art meets Islamic tradition",
    image: "/images/collections/Islamic paintings.jpg",
    href: "/collections?category=Canvas+Paintings",
  },
  {
    id: "islamic-wall-decor",
    label: "Collection",
    title: "Islamic Wall Decor",
    subtitle: "Elevate your space with sacred artistry",
    image: "/images/collections/islamic wall decor.png",
    href: "/collections?category=Islamic+Wall+Decor",
  },
  {
    id: "artwork",
    label: "Collection",
    title: "Fine Artwork",
    subtitle: "Curated pieces for the discerning collector",
    image: "/images/collections/Artwork.jpg",
    href: "/collections?category=Fine+Artwork",
  },
];
