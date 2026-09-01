export type MenuItem = { name: string; isVeg: boolean; price?: string; priceHalf?: string; description?: string; image?: string }
export type MenuCategory = { slug: string; name: string; tagline: string; image: string; items: MenuItem[] }

export const menuCategories: MenuCategory[] = [
  {
    slug: 'rice-biryani', name: 'Rice & Biryani', tagline: "Authentic Hyderabadi dum biryani & rice — Shadan's signature",
    image: '/images/food/102-chicken-dum-biryani.webp',
    items: [
      { name: 'Chicken Biryani', isVeg: false, price: '₹125', image: '/images/food/102-chicken-dum-biryani.webp' },
      { name: 'Veg Biryani', isVeg: true, price: '₹90', image: '/images/food/106-veg-biryani.webp' },
      { name: 'Egg Biryani', isVeg: false, price: '₹100', image: '/images/food/114-egg-manchurian-fried-rice.webp' },
      { name: 'Kushka Rice', isVeg: true, price: '₹70', image: '/images/food/108-ghee-rice.webp' },
    ],
  },
  {
    slug: 'veg-starters', name: 'Veg Starters', tagline: 'Crispy, flavourful vegetarian Indian-Chinese starters',
    image: '/images/food/021-gobi-manchurian.webp',
    items: [
      { name: 'Gobi Manchurian', isVeg: true, price: '₹130', image: '/images/food/021-gobi-manchurian.webp' },
      { name: 'Gobi Chilli', isVeg: true, price: '₹130', image: '/images/food/022-gobi-chilli.webp' },
      { name: 'Gobi 65', isVeg: true, price: '₹130', image: '/images/food/022-gobi-chilli.webp' },
      { name: 'Baby Corn Manchurian', isVeg: true, price: '₹140', image: '/images/food/018-mushroom-manchurian.webp' },
      { name: 'Baby Corn Chilli', isVeg: true, price: '₹140', image: '/images/food/019-mushroom-chilli.webp' },
      { name: 'Baby Corn 65', isVeg: true, price: '₹135', image: '/images/food/020-mushroom-65.webp' },
      { name: 'Paneer Chilli', isVeg: true, price: '₹150', image: '/images/food/017-paneer-chilli.webp' },
      { name: 'Paneer Manchurian', isVeg: true, price: '₹145', image: '/images/food/016-paneer-manchurian.webp' },
      { name: 'Paneer 65', isVeg: true, price: '₹145', image: '/images/food/015-paneer-65.webp' },
    ],
  },
  {
    slug: 'non-veg-starters', name: 'Non-Veg Starters', tagline: 'Sizzling Indian-Chinese chicken starters made fresh',
    image: '/images/food/028-chicken-65.webp',
    items: [
      { name: 'Chicken Kabab', isVeg: false, price: '₹145', image: '/images/food/025-chicken-fried-kabab.webp' },
      { name: 'Chicken 65', isVeg: false, price: '₹165', image: '/images/food/028-chicken-65.webp' },
      { name: 'Chicken Manchurian', isVeg: false, price: '₹160', image: '/images/food/031-chicken-manchurian.webp' },
      { name: 'Chicken Chilli', isVeg: false, price: '₹160', image: '/images/food/029-chicken-chilli.webp' },
      { name: 'Garlic Chicken', isVeg: false, price: '₹160', image: '/images/food/037-chicken-garlic.webp' },
      { name: 'Lemon Chicken', isVeg: false, price: '₹155', image: '/images/food/038-chicken-honey-lemon.webp' },
      { name: 'Pepper Chicken', isVeg: false, price: '₹155', image: '/images/food/030-chicken-pepper.webp' },
      { name: 'Kabab Chilli', isVeg: false, price: '₹155', image: '/images/food/025-chicken-fried-kabab.webp' },
      { name: 'Tandoori Chicken', isVeg: false, price: '₹220', image: '/images/food/028-chicken-65.webp' },
    ],
  },
  {
    slug: 'rolls', name: 'Rolls', tagline: 'Quick, packed rolls — the perfect grab-and-go bite',
    image: '/images/food/034-chicken-crispy.webp',
    items: [
      { name: 'Paneer Roll', isVeg: true, price: '₹115', image: '/images/food/014-paneer-tikka.webp' },
      { name: 'Egg Roll', isVeg: false, price: '₹105', image: '/images/food/039-chicken-popcorn.webp' },
      { name: 'Chicken Roll', isVeg: false, price: '₹120', image: '/images/food/034-chicken-crispy.webp' },
    ],
  },
  {
    slug: 'main-course', name: 'Main Course (Curries)', tagline: 'Rich, aromatic gravies and curries',
    image: '/images/food/066-chicken-butter-masala.webp',
    items: [
      { name: 'Butter Chicken', isVeg: false, price: '₹180', image: '/images/food/077-murgh-makhani.webp' },
      { name: 'Chicken Hyderabadi', isVeg: false, price: '₹175', image: '/images/food/070-chicken-kolhapuri.webp' },
      { name: 'Paneer Butter Masala', isVeg: true, price: '₹160', image: '/images/food/087-paneer-butter-masala.webp' },
    ],
  },
  {
    slug: 'breads', name: 'Breads', tagline: 'Fresh breads hot from the tandoor',
    image: '/images/food/099-dal-tadka.webp',
    items: [
      { name: 'Paratha', isVeg: true, price: '₹30', image: '/images/food/099-dal-tadka.webp' },
      { name: 'Tandoori Bread (varieties)', isVeg: true, price: '₹40', image: '/images/food/099-dal-tadka.webp' },
    ],
  },
  {
    slug: 'fried-rice-noodles', name: 'Fried Rice & Noodles', tagline: 'Wok-tossed perfection',
    image: '/images/food/114-egg-manchurian-fried-rice.webp',
    items: [
      { name: 'Egg Fried Rice', isVeg: false, price: '₹120', image: '/images/food/114-egg-manchurian-fried-rice.webp' },
    ],
  },
  {
    slug: 'accompaniments', name: 'Accompaniments', tagline: 'The perfect additions to your meal',
    image: '/images/food/109-jeera-rice.webp',
    items: [
      { name: 'Raita', isVeg: true, price: '₹30', image: '/images/food/109-jeera-rice.webp' },
      { name: 'Gravy', isVeg: true, price: '₹40', image: '/images/food/066-chicken-butter-masala.webp' },
    ],
  },
]

export const signatureDishes = [
  { name: 'Chicken Biryani', isVeg: false, description: "Authentic Hyderabadi-style chicken biryani — fragrant, perfectly spiced, and Shadan's undisputed crown jewel", image: '/images/food/102-chicken-dum-biryani.webp' },
  { name: 'Chicken Kabab', isVeg: false, description: 'Juicy, crispy chicken kababs served fresh — a fan-favourite starter that keeps guests coming back', image: '/images/food/025-chicken-fried-kabab.webp' },
  { name: 'Chicken 65', isVeg: false, description: 'Spicy, golden-fried chicken 65 — perfectly seasoned with our house blend of spices', image: '/images/food/028-chicken-65.webp' },
  { name: 'Chicken Roll', isVeg: false, description: 'A loaded chicken roll packed with flavour — the go-to quick bite at Biryani Express', image: '/images/food/034-chicken-crispy.webp' },
]
