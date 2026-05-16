export type Review = {
  id: number
  name: string
  location: string
  rating: number
  text: string
  isLocalGuide?: boolean
  avatar?: string
}

export const reviews: Review[] = [
  { id: 1,  name: 'Nachiket Jewaria',     location: 'Hubballi', rating: 5, text: 'Excellent taste, superb fast service, elegant ambience — must try restaurant.' },
  { id: 2,  name: 'Waseem Shaikh',        location: 'Hubballi', rating: 5, text: 'Empire Family Restaurant is one of the best places for a family dining experience. The food quality is excellent, with rich taste and good portion sizes.' },
  { id: 3,  name: 'Muskaan Muski',        location: 'Hubballi', rating: 5, text: 'One of the best experiences in Hubli. Lovely food, good interior design, and the best place for family time.' },
  { id: 4,  name: 'Lohit Naidu',          location: 'Hubballi', rating: 5, text: 'Both veg and non-veg dishes were perfectly cooked — full of flavor and freshness.' },
  { id: 5,  name: 'Rushikesh D. Ghodke',  location: 'Hubballi', rating: 5, text: 'Excellent food taste and pocket-friendly restaurant. Service was also best.' },
  { id: 6,  name: 'G.R. Santosh',         location: 'Hubballi', rating: 5, text: 'Every food tasted worth the money. Hygienic service, good staff, and good atmosphere.' },
  { id: 7,  name: 'Utkarsh Singh',        location: 'Hubballi', rating: 5, text: 'Amazing taste and cozy ambiance.' },
  { id: 8,  name: 'Vivekananda H K',      location: 'Hubballi', rating: 5, text: 'Fantastic experience with food and hospitality. Healthy and natural taste. Superb ambience.' },
  { id: 9,  name: 'Anita Choudhury',      location: 'Hubballi', rating: 5, text: 'Food is delicious and the staff is very kind-hearted.' },
  { id: 10, name: 'Ujwal Sharma',         location: 'Hubballi', rating: 5, isLocalGuide: true, text: 'Very enriching experience with tasty and quality food. Galawti Kabab and Nihari are must try.' },
  { id: 11, name: 'Krtin E.S.',           location: 'Hubballi', rating: 5, text: 'Loved the Mandi biryani, great desserts, and friendly atmosphere.' },
  { id: 12, name: 'Michael Cain',         location: 'Hubballi', rating: 5, text: 'Superb experience and excellent food. Loved the Chicken Dum Biryani.' },
  { id: 13, name: 'Mohammed A. Inamdar',  location: 'Hubballi', rating: 5, text: 'Awesome ambience and high-quality food. Worth it.' },
  { id: 14, name: 'Gururaj Konnur',       location: 'Hubballi', rating: 5, text: 'Fabulous taste and friendly owner.' },
  { id: 15, name: 'Raghavendra P',        location: 'Hubballi', rating: 5, text: 'Tried the newly launched Chicken Mandi Special — it was awesome.' },
  { id: 16, name: 'Neha Kousar',          location: 'Hubballi', rating: 5, text: 'Taste in every bite.' },
]
