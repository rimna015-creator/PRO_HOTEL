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
    image: "/images/hotel1.jpg",
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
    image: "/images/hotel2.jpg",
    bookings: [
      { checkIn: "2026-09-16", checkOut: "2026-09-17" }
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
    reviewer:54,
    image: "/images/hotel3.jpg",
    bookings: [
      { checkIn: "2026-09-10", checkOut: "2026-09-15" }
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
    reviewer:58,
    image: "/images/hotel3.jpg",
    bookings: [
      { checkIn: "2026-09-20", checkOut: "2026-09-22" }
    ]
  }
]