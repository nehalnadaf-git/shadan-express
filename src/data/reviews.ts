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
  { id: 1,  name: 'Rahul Patil',        location: 'Hubli', rating: 5, text: 'The taste is on point — fresh food every time. Quick service and good hygiene. Chicken biryani is absolutely loving it!' },
  { id: 2,  name: 'Faiz Ahmed',         location: 'Hubli', rating: 5, text: 'Best biryani in Hubli without a doubt. Shadan\'s special biryani is a must try. Authentic Hyderabadi flavour every single time.' },
  { id: 3,  name: 'Priya Desai',        location: 'Hubli', rating: 5, text: 'Beautiful restaurant with a great atmosphere. Staff are very knowledgeable and helpful. Chicken 65 and rolls are amazing!' },
  { id: 4,  name: 'Siddharth Kulkarni', location: 'Vidya Nagar, Hubli', rating: 5, text: 'Especially chicken biryani — loving it! Fresh, flavourful and perfectly spiced. Comes back here every week.' },
  { id: 5,  name: 'Noor Shaikh',        location: 'Hubli', rating: 5, text: 'Affordable prices and genuine taste. The chicken biryani at ₹125 is unbeatable value. Portions are decent for the price.' },
  { id: 6,  name: 'Manjunath Hegde',    location: 'Hubli', rating: 4, text: 'Nice casual spot with quick service. Gobi Manchurian and Chicken Kabab are worth coming back for. Always fresh.' },
  { id: 7,  name: 'Asha Reddy',         location: 'Hubli', rating: 5, text: 'Great service, friendly staff and clean premises. Egg biryani was delicious. One of the best biryani places in Hubli.' },
  { id: 8,  name: 'Imran Pasha',        location: 'Chalukya Nagar, Hubli', rating: 5, text: 'Tried the Chalukya Nagar outlet — same amazing quality. Chicken roll is a crowd-pleaser. Great street-style food at restaurant hygiene standards.' },
  { id: 9,  name: 'Kavya Joshi',        location: 'Hubli', rating: 4, text: 'Perfect for a quick family meal. Biryani is flavourful and fresh. Staff were prompt. Would love slightly bigger portions but overall great experience.' },
  { id: 10, name: 'Suresh Naik',        location: 'Hubli', rating: 5, isLocalGuide: true, text: 'Shadan\'s is consistently good — one of the top biryani spots in Hubli alongside Hayat and Al-Madina. Hyderabadi flavour stands out. Highly recommend.' },
  { id: 11, name: 'Divya Rao',          location: 'Hubli', rating: 5, text: 'Loved the paneer roll! Very tasty and filling. The veg options here are better than most biryani places. Clean and hygienic kitchen.' },
  { id: 12, name: 'Arjun Mehta',        location: 'Hubli', rating: 4, text: 'Good food at honest prices. Chicken biryani and garlic chicken are the highlights. Service is fast even during busy dinner hours.' },
  { id: 13, name: 'Sameer Khan',        location: 'Vidya Nagar, Hubli', rating: 5, text: 'Authentic taste, fresh ingredients, and great value. Shadan\'s has become our family\'s go-to place for biryani on weekends.' },
  { id: 14, name: 'Rekha Patil',        location: 'Hubli', rating: 5, text: 'Quick delivery on Swiggy too! Food arrived hot and tasted just like dining in. The egg biryani is underrated — try it.' },
  { id: 15, name: 'Tanveer Hussain',    location: 'Hubli', rating: 4, text: 'Best chicken biryani for the price in this area. Atmosphere is casual and clean. Friendly staff make it a pleasant experience every time.' },
  { id: 16, name: 'Pooja Shetti',       location: 'Hubli', rating: 5, text: 'The rolls here are amazing — especially the chicken roll. Crispy, spicy and fresh. A must-try if you are in Vidya Nagar!' },
]
