export type GalleryItem = {
  id: number
  src: string
  alt: string
  caption: string
  category: 'interior' | 'ambience' | 'entrance'
  rotation: number
}

export const galleryItems: GalleryItem[] = [
  { id: 1, src: '/images/restaurant/1.webp', alt: "Shadan's Biryani Express Interior",        caption: 'Biryani Express Entrance', category: 'interior', rotation: -2   },
  { id: 2, src: '/images/restaurant/2.webp', alt: "Biryani Express Restaurant Dining Section", caption: 'Dining Area',              category: 'interior', rotation: 1.5  },
  { id: 3, src: '/images/restaurant/3.webp', alt: "Family Dining at Shadan's Biryani Express", caption: 'Family Dining',            category: 'ambience', rotation: -1   },
  { id: 4, src: '/images/restaurant/4.webp', alt: "Shadan's Biryani Express Ambience",         caption: 'Ambience',                 category: 'entrance', rotation: 2    },
]


export const galleryCategories = ['All', 'Interior', 'Ambience', 'Entrance'] as const
export type GalleryCategory = typeof galleryCategories[number]
