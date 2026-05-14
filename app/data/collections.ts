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
    image: "/images/collections/Arabic calligraphy.jpg",
    href: "/collections/arabic-calligraphy",
  },
  {
    id: "canvas-paintings",
    label: "Collection",
    title: "Canvas Paintings",
    subtitle: "Contemporary art meets Islamic tradition",
    image: "/images/collections/Islamic paintings.jpg",
    href: "/collections/canvas-paintings",
  },
  {
    id: "islamic-wall-decor",
    label: "Collection",
    title: "Islamic Wall Decor",
    subtitle: "Elevate your space with sacred artistry",
    image: "/images/collections/islamic wall decor.png",
    href: "/collections/islamic-wall-decor",
  },
  {
    id: "artwork",
    label: "Collection",
    title: "Fine Artwork",
    subtitle: "Curated pieces for the discerning collector",
    image: "/images/collections/Artwork.jpg",
    href: "/collections/artwork",
  },
];
