export type GalleryItem = {
  id: number
  src: string
  alt: string
  caption: string
  category: 'interior' | 'ambience' | 'entrance'
  rotation: number
}

export const galleryItems: GalleryItem[] = [
  { id: 1,  src: '/images/restaurant/1.webp', alt: 'Empire Family Restaurant Interior',         caption: 'Empire Entrance', category: 'interior',  rotation: -2   },
  { id: 2,  src: '/images/restaurant/2new.webp', alt: 'Empire Restaurant AC Dining Section',       caption: 'Empire AC Section', category: 'interior',  rotation: 1.5  },
  { id: 3,  src: '/images/restaurant/3.webp', alt: 'Family Dining at Empire Restaurant',        caption: 'Empire Dining',    category: 'ambience',  rotation: -1   },
  { id: 5,  src: '/images/restaurant/5.webp', alt: 'Empire Family Restaurant Front Entrance',   caption: 'Ambience',         category: 'entrance',  rotation: 2    },
  { id: 6,  src: '/images/restaurant/6.webp', alt: 'Empire Restaurant Warm Ambience',           caption: 'Outside',          category: 'ambience',  rotation: 1    },
]


export const galleryCategories = ['All', 'Interior', 'Ambience', 'Entrance'] as const
export type GalleryCategory = typeof galleryCategories[number]
