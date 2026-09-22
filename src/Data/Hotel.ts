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
    id: 7,
    name: "Tara Angkor Hotel",
    type: "Hotel",
    stars: 5,
    location: "Siem Reap",
    price: 85,
    rating: 4.6,
    reviewer: 120,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxQQXbSFjv38ezaARdMujP1S1Vmr6dUaE-2EO9G0BXjg&s=10",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2DpGVFC5EXfLofHkUWnJsA9r-NVcRQKccaxkUtoYd5Q&s=10",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk44agieLI-Te-aHxIIRtHQw_zUZkUPCoHSSW_evHZgg&s=10",
    bookings: []
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs2Sns9knawdF_Y4Bxf_s_hia6mqCFhmaWXnrziHE3b5E_rl-MkKoIqwhb&s=10",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmELYcy1mzY5XJmx4KQoKcZXJ1wyU1XnQx3uU3EfTbbQ&s=10",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnS2LUHSkWl1ZElgzPNc2v_BtcZf-vKGg3ZQAiGtHTYQ&s=10",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbp8SRPv90UO4l4D3ZDVT6cabLJAmsUzl2l0_4QMimYg&s=10",
    bookings: []
  },
  {
    id: 17,
name: "Regency Angkor Hotel",
    type: "Hotel",
    stars: 4,
    location: "Siem Reap",
    price: 75,
    rating: 4.6,
    reviewer: 148,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJyR9FEN3GqMRTzSA0zlcC_kOwqPFP6UU4IqODKYGyow&s=10",
    bookings: []
  },
  {
    id: 18,
name: "Steung Siemreap Thmey Hotel",
    type: "Hotel",
    stars: 4,
    location: "Siem Reap",
    price: 85,
    rating: 4.5,
    reviewer: 142,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZuASbcs09l2r24IMG-x3TTS8xHmFOtjxmtfIv4i7wAA&s=10",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGQPHc3pYB5eupYMbJ-qVsd0AC2pchqQCmhpXZfbPBYw&s=10",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDZrohtbuVEuaoKR7tStGn5eVhn2DO_H2DITMh9jEYCw&s=10",
    bookings: [{ checkIn: "2026-10-10", checkOut: "2026-10-12" }]
  },
  {
    id: 22,
    name: "Angkor Hotel",
    type: "Hotel",
    stars: 4,
    location: "Siem Reap",
    price: 65,
    rating: 4.4,
    reviewer: 145,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnxMfUGJTEyxmPiNf3zmuYXhP_dzQwVL92tSa2rhklKw&s=10",
    bookings: []
  },
  {
    id: 23,
name: "Angkor Century Resort & Spa",
    type: "Resort",
    stars: 5,
    location: "Siem Reap",
    price: 120,
    rating: 4.7,
    reviewer: 195,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4f_UOoM5-BGLXg2ybKkNEV960Lf334BoIsqSFlEv0PQ&s=10",
    bookings: []
  },
  {
    id: 24,
name: "Pavillon d'Orient Villa",
    type: "Boutique",
    stars: 4,
    location: "Siem Reap",
    price: 55,
    rating: 4.4,
    reviewer: 82,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSms4bJQr3Fm8bsNlVDmhe-tOjfzF6iHz5n1YeUD1WpgA&s=10",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPwTeULMvRjAsb0tTHGHbd62QkZwJNoH7JLuYxwjE40w&s=10",
    bookings: []
  },
  {
    id: 27,
    name: "TUI BLUE Angkor Grace",
    type: "Resort",
    stars: 5,
    location: "Siem Reap",
    price: 95,
    rating: 4.7,
    reviewer: 210,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFicJy2sOWyRzV1tIt6XxM4cB5dae7jLP5PcV3ReP-Qw&s=10",
    bookings: []
  },
  {
    id: 28,
    name: "Aborest Tropical Hostel",
    type: "Homestay",
    stars: 2,
    location: "Siem Reap",
    price: 15,
    rating: 4.3,
    reviewer: 95,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGGOP3PL5DKv48tRqjP2Q2JT3NzxqwbeLiVbQOw05NQw&s=10",
    bookings: []
  },
  {
    id: 29,
    name: "Indochine Hotel Group SiemReap",
    type: "Hotel",
    stars: 4,
    location: "Siem Reap",
    price: 55,
    rating: 4.5,
    reviewer: 130,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4UVU3vlRC7MvnDyLre7egg3CMkPx_CQ7F65I6nZA6z8Vcp2Ujiicq7wE&s=10",
    bookings: []
  },
  {
    id: 30,
    name: "Lotus Blanc Hotel & Resort",
    type: "Resort",
    stars: 5,
    location: "Siem Reap",
    price: 110,
    rating: 4.8,
    reviewer: 240,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP44aMot5pWYEgLie1ZLgLLCAqKkKgiZ_HSBmfLN742g&s=10",
    bookings: []
  },
  {
    id: 31,
    name: "Angkor Mansion & Residence",
    type: "Villa",
    stars: 4,
    location: "Siem Reap",
    price: 85,
    rating: 4.6,
    reviewer: 115,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCdvc6WP7tcBzJkRdNdE_mbssPkUSraCcDxjFUbDJzIA&s=10",
    bookings: []
  },
  {
    id: 32,
    name: "RITHY RINE Angkor Residence",
    type: "Boutique",
    stars: 4,
    location: "Siem Reap",
    price: 65,
    rating: 4.5,
    reviewer: 100,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf8HDTenn_0NHAlu5qYRiZAKIadVQL9rPe9HN3Kw38gQ&s",
    bookings: []
  },
  {
    id: 33,
    name: "Lub d Experience",
    type: "Boutique",
    stars: 4,
    location: "Siem Reap",
    price: 50,
    rating: 4.4,
    reviewer: 185,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9YDh8rp59ONFESEXb-gKtSDrOyEFfyA5mfBFOtckUww&s=10",
    bookings: []
  },
  {
    id: 34,
    name: "Hotel Atelier Siem Reap",
    type: "Boutique",
    stars: 4,
    location: "Siem Reap",
    price: 70,
    rating: 4.6,
    reviewer: 120,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTn8ISqWb1wAPeKfj_NqUCd9NL_GfS9vsZNOFtnbnd-Q&s=10",
    bookings: []
  },
  {
    id: 35,
    name: "Bronam Residence & Spa",
    type: "Boutique",
    stars: 5,
    location: "Siem Reap",
    price: 120,
    rating: 4.8,
    reviewer: 155,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjnQe9Dbn0PmuABXW9EkG6BHnPxC5aoVgBzw9Fc0gbYg&s=10",
    bookings: []
  },
  {
    id: 36,
    name: "Twizt.hotel",
    type: "Boutique",
    stars: 3,
    location: "Siem Reap",
    price: 40,
    rating: 4.3,
    reviewer: 90,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStZVs8PGM9NW5UCS0Z5EdYNAwVheImkkjl0jzCIe17vA&s=10",
    bookings: []
  },
  {
    id: 37,
    name: "The Palace Indochine Hotel",
    type: "Hotel",
    stars: 5,
    location: "Siem Reap",
    price: 135,
    rating: 4.9,
    reviewer: 175,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPm2ITckZdxmlQ1mz8adwdZrR8vk8L6BHk-nvCdnIJvQ&s=10",
    bookings: []
  },
  {
    id: 38,
    name: "Mohasal Angkor Boutique",
    type: "Boutique",
    stars: 4,
    location: "Siem Reap",
    price: 75,
    rating: 4.6,
    reviewer: 105,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6nDHiNixgQdGxIsQvGe3-gh5XJ4OeFNkPFCxqo52sSA&s",
    bookings: []
  },
  {
    id: 39,
    name: "Angkor Channary Hotel",
    type: "Hotel",
    stars: 4,
    location: "Siem Reap",
    price: 60,
    rating: 4.5,
    reviewer: 140,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhFNfDW41SyXGRKgRAyFihMC_pBW8NfdRalpJPFfZBFw&s",
    bookings: []
  },
  {
    id: 40,
    name: "Asanak D'Angkor Boutique",
    type: "Boutique",
    stars: 4,
    location: "Siem Reap",
    price: 55,
    rating: 4.4,
    reviewer: 110,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4UDxaRvRNQxMYETYtjEs-ZUXB2fnR-kG7Oab2nshp0Q&s=10",
    bookings: []
  }
]