export interface Hotel {
  id: number
  name: string
  type: string
  stars: number
  location: string
  price: number
  rating: number
  image: string
  facilities: string[]
  services: string[]
}

export const hotels: Hotel[] = [
  {
    id: 1,
    name: "Angkor Paradise Hotel",
    type: "Hotel",
    stars: 5,
    location: "Siem Reap",
    price: 80,
    rating: 4.8,
    image: "/images/hotel1.jpg",
    facilities: [
      "Swimming Pool",
      "Free Wi-Fi",
      "Restaurant",
      "Parking"
    ],
    services: [
      "Motorbike Rental",
      "Airport Pickup",
      "Tour Guide"
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
    image: "/images/hotel2.jpg",
    facilities: [
      "Swimming Pool",
      "Free Wi-Fi"
    ],
    services: [
      "Motorbike Rental"
    ]
  },
  {
    id: 3,
    name: "Happy Family Homestay",
    type: "Homestay",
    stars: 3,
    location: "Siem Reap",
    price: 25,
    rating: 4.5,
    image: "/images/hotel3.jpg",
    facilities: [
      "Free Wi-Fi",
      "Parking"
    ],
    services: [
      "Motorbike Rental"
    ]
  },
  {
    id: 3,
    name: "Happy Family Homestay",
    type: "Homestay",
    stars: 3,
    location: "Siem Reap",
    price: 25,
    rating: 4.5,
    image: "/images/hotel3.jpg",
    facilities: [
      "Free Wi-Fi",
      "Parking"
    ],
    services: [
      "Motorbike Rental"
    ]
  }
]