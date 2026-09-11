export interface Booking {
  checkIn: string
  checkOut: string
}

export interface Hotel {
  id: number
  name: string
  type: string
  stars: number
  location: string
  price: number
  reviewer:number
  rating: number
  image: string
  bookings: Booking[]
}

export const hotels: Hotel[] = [
  {
    id: 1,
    name: "Angkor Paradise Hotel",
    type: "Hotel",
    stars: 5,
    location: "Siem Reap",
    price: 80,
reviewer:19,
    rating: 4.8,
    image: "https://www.cambotours.com/userfiles/hotels/angkor-paradise-hotel.jpg",
    bookings: [
      { checkIn: "2026-09-14", checkOut: "2026-09-18" }
    ]
  },

  {
    id: 2,
    name: "Siem Reap Boutique Villa",
    type: "Boutique",
    stars: 4,
    location: "Siem Reap",
    price: 45,
    rating: 4.6,
    reviewer:25,
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/13/49/f9/hotel-building-view-at.jpg?w=900&h=500&s=1",
    bookings: [
      { checkIn: "2026-09-16", checkOut: "2026-09-17" }
    ]
  },
  {
    id: 3,
    name: "Happy Family Hotel",
    type: "Hotel + Motor Rental",
    stars: 3,
    location: "Siem Reap",
    price: 25,
    rating: 4.5,
    reviewer:54,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjC_6mmixCKNDKdjuVDG5Og0Gehfm6cVfKO_PkArtMQXry7Da99NjwNYo&s=10",
    bookings: [
      { checkIn: "2026-09-10", checkOut: "2026-09-15" }
    ]
  },
  {
    id: 4,
    name: "Sokha Angkor Resort",
    type: "Resort",
    stars: 5,
    location: "Siem Reap",
    price: 120,
    rating: 4.7,
    reviewer: 88,
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/795373876.jpg?k=64bd4f9ec523d50e4eed77928a11ea1b9ecd6691558c65c17845ea9e945445f0&o=",
    bookings: [
      { checkIn: "2026-09-21", checkOut: "2026-09-24" }
    ]
  },
  {
    id: 5,
    name: "Park Hyatt Siem Reap",
    type: "Hotel",
    stars: 3,
    location: "Siem Reap",
    price: 35,
    rating: 4.4,
    reviewer: 41,
    image: "https://media.privateupgrades.com/_data/default-hotel_image/11/58709/park-hyatt-siem-reap-20_1400x1400_auto.jpg",
    bookings: [
      { checkIn: "2026-09-14", checkOut: "2026-09-16" }
    ]
  },
  {
    id: 6,
    name: "Siem Reap Boutique Villa",
    type: "Boutique",
    stars: 5,
    location: "Siem Reap",
    price: 65,
    rating: 4.6,
    reviewer:40,
    image: "https://static1.squarespace.com/static/6507f8aa7fb46b61d600fac9/t/6a4cc8fbf82e7b141144414b/1783417083437/2rb--50.jpg?format=1500w",
    bookings: [
      { checkIn: "2026-09-18", checkOut: "2026-09-19" }
    ]
  },
  {
    id: 7,
    name: "Tara Angkor Hotel",
    type: "Hotel",
    stars: 5,
    location: "Siem Reap",
    price: 85,
    rating: 4.6,
    reviewer: 120,
    image: "https://picsum.photos/seed/angkorbc-hotel7/900/600",
    bookings: [{ checkIn: "2026-10-02", checkOut: "2026-10-05" }]
  },
  {
    id: 8,
    name: "Angkor Pearl Hotel",
    type: "Hotel",
    stars: 4,
    location: "Siem Reap",
    price: 48,
    rating: 4.3,
    reviewer: 76,
    image: "https://picsum.photos/seed/angkorbc-hotel8/900/600",
    bookings: []
  },
  {
    id: 9,
    name: "Golden Temple Villa",
    type: "Boutique",
    stars: 4,
    location: "Siem Reap",
    price: 70,
    rating: 4.7,
    reviewer: 210,
    image: "https://picsum.photos/seed/angkorbc-hotel9/900/600",
    bookings: []
  },
  {
    id: 10,
    name: "Ivy Garden Guesthouse",
    type: "Guesthouse",
    stars: 3,
    location: "Siem Reap",
    price: 18,
    rating: 4.4,
    reviewer: 95,
    image: "https://picsum.photos/seed/angkorbc-hotel10/900/600",
    bookings: []
  },
  {
    id: 11,
    name: "The Blue Mango Resort",
    type: "Resort",
    stars: 5,
    location: "Siem Reap",
    price: 130,
    rating: 4.6,
    reviewer: 300,
    image: "https://picsum.photos/seed/angkorbc-hotel11/900/600",
    bookings: [{ checkIn: "2026-11-01", checkOut: "2026-11-04" }]
  },
  {
    id: 12,
    name: "Somadevi Angkor Resort & Spa",
    type: "Resort",
    stars: 4,
    location: "Siem Reap",
    price: 95,
    rating: 4.5,
    reviewer: 180,
    image: "https://picsum.photos/seed/angkorbc-hotel12/900/600",
    bookings: []
  },
  {
    id: 13,
    name: "Angkor Village Resort & Spa",
    type: "Resort",
    stars: 5,
    location: "Siem Reap",
    price: 140,
    rating: 4.8,
    reviewer: 260,
    image: "https://picsum.photos/seed/angkorbc-hotel13/900/600",
    bookings: []
  },
  {
    id: 14,
    name: "Nhok Thom Thom Homestay",
    type: "Homestay",
    stars: 2,
    location: "Siem Reap",
    price: 12,
    rating: 4.2,
    reviewer: 58,
    image: "https://picsum.photos/seed/angkorbc-hotel14/900/600",
    bookings: []
  },
  {
    id: 15,
    name: "The Privilege Floor",
    type: "Boutique",
    stars: 5,
    location: "Siem Reap",
    price: 150,
    rating: 4.9,
    reviewer: 140,
    image: "https://picsum.photos/seed/angkorbc-hotel15/900/600",
    bookings: [{ checkIn: "2026-12-20", checkOut: "2026-12-24" }]
  },
  {
    id: 16,
    name: "Central Boutique Angkor Hotel",
    type: "Boutique",
    stars: 4,
    location: "Siem Reap",
    price: 50,
    rating: 4.4,
    reviewer: 88,
    image: "https://picsum.photos/seed/angkorbc-hotel16/900/600",
    bookings: []
  },
  {
    id: 17,
    name: "Regency Angkor Hotel",
    type: "Hotel",
    stars: 5,
    location: "Siem Reap",
    price: 78,
    rating: 4.5,
    reviewer: 150,
    image: "https://picsum.photos/seed/angkorbc-hotel17/900/600",
    bookings: []
  },
  {
    id: 18,
    name: "Steung Siemreap Thmey Hotel",
    type: "Hotel",
    stars: 3,
    location: "Siem Reap",
    price: 28,
    rating: 4.1,
    reviewer: 110,
    image: "https://picsum.photos/seed/angkorbc-hotel18/900/600",
    bookings: []
  },
  {
    id: 19,
    name: "Memoire d'Angkor Boutique Hotel",
    type: "Boutique",
    stars: 5,
    location: "Siem Reap",
    price: 110,
    rating: 4.7,
    reviewer: 175,
    image: "https://picsum.photos/seed/angkorbc-hotel19/900/600",
    bookings: []
  },
  {
    id: 20,
    name: "Nature Tree Villas",
    type: "Villa",
    stars: 4,
    location: "Siem Reap",
    price: 75,
    rating: 4.6,
    reviewer: 62,
    image: "https://picsum.photos/seed/angkorbc-hotel20/900/600",
    bookings: []
  },
  {
    id: 21,
    name: "Palm Village Residence & Spa",
    type: "Villa",
    stars: 4,
    location: "Siem Reap",
    price: 90,
    rating: 4.5,
    reviewer: 130,
    image: "https://picsum.photos/seed/angkorbc-hotel21/900/600",
    bookings: [{ checkIn: "2026-10-10", checkOut: "2026-10-12" }]
  },
  {
    id: 22,
    name: "Sunset Grove Angkor Hotel",
    type: "Hotel",
    stars: 4,
    location: "Siem Reap",
    price: 65,
    rating: 4.4,
    reviewer: 145,
    image: "https://picsum.photos/seed/angkorbc-hotel22/900/600",
    bookings: []
  },
  {
    id: 23,
    name: "Angkor Century Resort & Spa",
    type: "Resort",
    stars: 5,
    location: "Siem Reap",
    price: 105,
    rating: 4.6,
    reviewer: 220,
    image: "https://picsum.photos/seed/angkorbc-hotel23/900/600",
    bookings: []
  },
  {
    id: 24,
    name: "Pavillon d'Orient Villa",
    type: "Villa",
    stars: 5,
    location: "Siem Reap",
    price: 130,
    rating: 4.8,
    reviewer: 190,
    image: "https://picsum.photos/seed/angkorbc-hotel24/900/600",
    bookings: []
  },
  {
    id: 25,
    name: "Boutique Cambodia Villa",
    type: "Boutique",
    stars: 3,
    location: "Siem Reap",
    price: 40,
    rating: 4.3,
    reviewer: 70,
    image: "https://picsum.photos/seed/angkorbc-hotel25/900/600",
    bookings: []
  },
  {
    id: 26,
    name: "Banteay Srey Boutique Villa & Spa",
    type: "Boutique",
    stars: 4,
    location: "Siem Reap",
    price: 60,
    rating: 4.5,
    reviewer: 160,
    image: "https://picsum.photos/seed/angkorbc-hotel26/900/600",
    bookings: []
  }
]