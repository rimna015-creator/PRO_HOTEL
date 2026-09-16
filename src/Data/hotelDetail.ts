export interface HotelDetail {
  id: number
  name: string
  type: string
  stars: number
  location: string
  address: string
  price: number
  reviewer: number
  rating: number
  image: string
  gallery: string[]
  description: string
  facilities: string[]
  services: string[]
  furniture: string[]
  roomTypes: RoomType[]
  checkIn: string
  checkOut: string
  policies: string[]
  contact: HotelContact
}

export interface HotelContact {
  hotline: string
  facebook: string
  tiktok: string
  instagram: string
}

export interface RoomType {
  name: string
  price: number
  capacity: number
  description: string
  available: number
}

export const hotelDetails: HotelDetail[] = [
  {
    id: 1,
    name: "Angkor Paradise Hotel",
    type: "Hotel",
    stars: 5,
    location: "Siem Reap",
    address: "National Road No. 6, Siem Reap, Cambodia",
    price: 80,
    reviewer: 19,
    rating: 4.8,
    image: "https://www.cambotours.com/userfiles/hotels/angkor-paradise-hotel.jpg",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7ffITnypl34Q8pl1GPOdM7pooU_lJH2ClkxqA6Fb75QE9OdZyTXqSVGm&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBYYSBMPrm-Z_Xc4Zsal_DHu6J4p3LAlksca2sD_0WMA&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeZao2sh8et_Gcjjrl6Q63BthR7u0rB_8ljQr1em9_NQ&s=10"
    ],
    description:
      "Angkor Paradise Hotel offers luxurious accommodation in the heart of Siem Reap. Featuring a stunning outdoor pool, on-site restaurant, and spa, it is just minutes away from the famous Angkor Wat temple complex.",
    facilities: [
      "Swimming Pool",
      "Free Wi-Fi",
      "Restaurant",
      "Parking",
      "Spa",
      "Fitness Center",
      "Room Service",
      "Concierge"
    ],
    services: [
      "Motorbike Rental",
      "Airport Pickup",
      "Tour Guide",
      "Laundry",
      "Airport Shuttle"
    ],
    furniture: [
      "King Bed",
      "Air Conditioning",
      "Flat-screen TV",
      "Mini Bar",
      "Safety Deposit Box",
      "Work Desk",
      "Wardrobe",
      "Balcony"
    ],
    roomTypes: [
      {
        name: "Standard Room",
        price: 80,
        capacity: 2,
        description: "Comfortable room with king bed, air conditioning, and city view.",
        available: 5
      },
      {
        name: "Deluxe Room",
        price: 120,
        capacity: 2,
        description: "Spacious room with balcony, minibar, and pool view.",
        available: 3
      },
      {
        name: "Suite",
        price: 200,
        capacity: 4,
        description: "Premium suite with separate living area, jacuzzi, and panoramic view.",
        available: 1
      }
    ],
    checkIn: "14:00",
    checkOut: "12:00",
    policies: [
      "No smoking in rooms",
      "Pets are not allowed",
      "Cancellation must be made 24 hours before check-in",
      "Valid ID required at check-in"
    ],
    contact: {
      hotline: "+855 12 345 678",
      facebook: "https://facebook.com/AngkorParadiseHotel",
      tiktok: "https://tiktok.com/@AngkorParadiseHotel",
      instagram: "https://instagram.com/AngkorParadiseHotel"
    }
  },
  {
    id: 2,
    name: "Siem Reap Boutique Villa",
    type: "Boutique",
    stars: 4,
    location: "Siem Reap",
    address: "Charles de Gaulle Boulevard, Siem Reap, Cambodia",
    price: 45,
    reviewer: 25,
    rating: 4.6,
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/13/49/f9/hotel-building-view-at.jpg?w=900&h=500&s=1",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeMbQln2vnn8jKi9ZqdaxeebY0RYlxv9ZzYmoXUl0cdA&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5lDtwjouXeimPiAB_CpLSicCz_1f_eRV-IkQPXIcZww&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrzqSAHVe7_GbqYGYhRdahIesHdXOGbZ68oVVAHGEZaA&s"
    ],
    description:
      "A charming boutique villa nestled in a quiet area of Siem Reap. Enjoy a peaceful retreat with beautiful garden views, personalized service, and easy access to local attractions.",
    facilities: [
      "Swimming Pool",
      "Free Wi-Fi",
      "Garden",
      "Terrace"
    ],
    services: [
      "Motorbike Rental",
      "Bicycle Rental",
      "Breakfast Included"
    ],
    furniture: [
      "Queen Bed",
      "Air Conditioning",
      "Ceiling Fan",
      "Wardrobe",
      "Work Desk",
      "Tea & Coffee Set"
    ],
    roomTypes: [
      {
        name: "Garden Room",
        price: 45,
        capacity: 2,
        description: "Cozy room overlooking the garden with modern amenities.",
        available: 4
      },
      {
        name: "Pool View Room",
        price: 65,
        capacity: 2,
        description: "Elegant room with direct pool access and private balcony.",
        available: 2
      }
    ],
    checkIn: "14:00",
    checkOut: "11:00",
    policies: [
      "No smoking in rooms",
      "Quiet hours after 22:00"
    ],
    contact: {
      hotline: "+855 12 987 654",
      facebook: "https://facebook.com/SiemReapBoutiqueVilla",
      tiktok: "https://tiktok.com/@SiemReapBoutiqueVilla",
      instagram: "https://instagram.com/SiemReapBoutiqueVilla"
    }
  },
  {
    id: 4,
    name: "Sokha Angkor Resort",
    type: "Resort",
    stars: 5,
    location: "Siem Reap",
    address: "Road No. 6, Wat Chork Village, Siem Reap, Cambodia",
    price: 120,
    reviewer: 88,
    rating: 4.7,
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/795373876.jpg?k=64bd4f9ec523d50e4eed77928a11ea1b9ecd6691558c65c17845ea9e945445f0&o=",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNSABitookVrqSAcgN9c5Kc5f0HIBPqbGEFrl3Or9ZfQ&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw3hyauhFuMCjf6ir8Dki4LV1E2_t_n7To1Gn1WVbs4w&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUoTtwwwI_E5YOIa_oTZbYy_99zRAmzASM5r9gzGSx6HzHlvWDUexNpBo&s=10"
    ],
    description:
      "Sokha Angkor Resort is a lavish five-star resort surrounded by lush tropical gardens. Featuring multiple outdoor pools, a private lake, world-class spa, and fine-dining restaurants, it delivers an unforgettable luxury escape just minutes from Angkor Wat.",
    facilities: [
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Pool Bar",
      "Fitness Center",
      "Kids Club",
      "Free Wi-Fi",
      "Tennis Court"
    ],
    services: [
      "Motorbike Rental",
      "Airport Pickup",
      "Tour Guide",
      "Laundry",
      "Breakfast Included"
    ],
    furniture: [
      "King Bed",
      "Air Conditioning",
      "Flat-screen TV",
      "Mini Bar",
      "Safety Deposit Box",
      "Work Desk",
      "Balcony",
      "Bathtub"
    ],
    roomTypes: [
      {
        name: "Deluxe Garden Room",
        price: 120,
        capacity: 2,
        description: "Elegant room with garden views, king bed, and private balcony.",
        available: 6
      },
      {
        name: "Lake View Villa",
        price: 220,
        capacity: 2,
        description: "Spacious villa overlooking the resort lake with private terrace.",
        available: 3
      },
      {
        name: "Presidential Suite",
        price: 450,
        capacity: 4,
        description: "Ultimate luxury suite with separate living area, jacuzzi, and butler service.",
        available: 1
      }
    ],
    checkIn: "14:00",
    checkOut: "12:00",
    policies: [
      "No smoking in rooms",
      "Pets are not allowed",
      "Cancellation must be made 48 hours before check-in",
      "Valid ID required at check-in"
    ],
    contact: {
      hotline: "+855 63 969 888",
      facebook: "https://facebook.com/SokhaAngkorResort",
      tiktok: "https://tiktok.com/@SokhaAngkorResort",
      instagram: "https://instagram.com/SokhaAngkorResort"
    }
  },
  {
    id: 5,
    name: "Park Hyatt Siem Reap",
    type: "Hotel",
    stars: 3,
    location: "Siem Reap",
    address: "Sivatha Boulevard, Svay Dangkum, Siem Reap, Cambodia",
    price: 35,
    reviewer: 41,
    rating: 4.4,
    image: "https://media.privateupgrades.com/_data/default-hotel_image/11/58709/park-hyatt-siem-reap-20_1400x1400_auto.jpg",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJV9lSgHRAKek_xeoh6ILhXicnmH4RL_E625txMTpeUw&s=10",
      "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2017/10/03/1018/Park-Hyatt-Siem-Reap-P201-Check-In-Lounge.jpg/Park-Hyatt-Siem-Reap-P201-Check-In-Lounge.16x9.jpg?imwidth=2560",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwO5ckG1_A5PEZCuUw0NrjbJ3wHFE2eRY_Dbj0rGnGMg&s"
    ],
    description:
      "Park Hyatt Siem Reap reimagines Angkor-inspired elegance with contemporary comfort. Set amid tropical gardens in the heart of Siem Reap, it offers refined rooms, a serene pool, and warm Khmer hospitality just minutes from the temple complex.",
    facilities: [
      "Swimming Pool",
      "Restaurant",
      "Bar",
      "Spa",
      "Fitness Center",
      "Free Wi-Fi",
      "Garden",
      "Parking"
    ],
    services: [
      "Airport Pickup",
      "Concierge",
      "Tour Desk",
      "Laundry",
      "Breakfast Included"
    ],
    furniture: [
      "King Bed",
      "Air Conditioning",
      "Flat-screen TV",
      "Mini Bar",
      "Work Desk",
      "Safety Deposit Box"
    ],
    roomTypes: [
      {
        name: "Park Room",
        price: 35,
        capacity: 2,
        description: "Elegant room with modern amenities and garden views.",
        available: 8
      },
      {
        name: "Deluxe Pool View Room",
        price: 55,
        capacity: 2,
        description: "Spacious room overlooking the tropical garden and pool.",
        available: 5
      }
    ],
    checkIn: "14:00",
    checkOut: "12:00",
    policies: [
      "No smoking in rooms",
      "Valid ID required at check-in",
      "Cancellation must be made 24 hours before check-in"
    ],
    contact: {
      hotline: "+855 63 211 234",
      facebook: "https://facebook.com/ParkHyattSiemReap",
      tiktok: "https://tiktok.com/@ParkHyattSiemReap",
      instagram: "https://instagram.com/ParkHyattSiemReap"
    }
  },

  {
    id: 7,
    name: "Tara Angkor Hotel",
    type: "Hotel",
    stars: 5,
    location: "Siem Reap",
    address: "National Road No. 6, Sok San Village, Siem Reap, Cambodia",
    price: 85,
    reviewer: 120,
    rating: 4.6,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxQQXbSFjv38ezaARdMujP1S1Vmr6dUaE-2EO9G0BXjg&s=10",
    gallery: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/02/5b/d0/7c/pool.jpg?w=900&h=-1&s=1",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMUa-VkmJuAnPM3gUB-RKE249t8hEFWLLkiGmWiIYkg&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnnoqilhTLTEWIpbX2oLHRQUj7Kv5EmGjveR1BCMS9nQ&s=10"
    ],
    description:
      "Tara Angkor Hotel blends traditional Khmer elegance with modern comfort. Set in lush gardens near the city center, it offers a serene pool, refined dining, and warm hospitality close to the Angkor temples.",
    facilities: [
      "Swimming Pool",
      "Free Wi-Fi",
      "Restaurant",
      "Spa",
      "Fitness Center",
      "Garden",
      "Parking",
      "Room Service"
    ],
    services: [
      "Airport Pickup",
      "Tour Guide",
      "Laundry",
      "Breakfast Included"
    ],
    furniture: [
      "King Bed",
      "Air Conditioning",
      "Flat-screen TV",
      "Mini Bar",
      "Safety Deposit Box",
      "Balcony"
    ],
    roomTypes: [
      {
        name: "Deluxe Room",
        price: 85,
        capacity: 2,
        description: "Elegant room with king bed, garden view, and private balcony.",
        available: 6
      },
      {
        name: "Pool Access Room",
        price: 120,
        capacity: 2,
        description: "Ground-floor room with direct access to the main pool.",
        available: 4
      },
      {
        name: "Family Suite",
        price: 180,
        capacity: 4,
        description: "Spacious suite with two bedrooms and a living area.",
        available: 2
      }
    ],
    checkIn: "14:00",
    checkOut: "12:00",
    policies: [
      "No smoking in rooms",
      "Pets are not allowed",
      "Cancellation must be made 24 hours before check-in",
      "Valid ID required at check-in"
    ],
    contact: {
      hotline: "+855 63 760 777",
      facebook: "https://facebook.com/TaraAngkorHotel",
      tiktok: "https://tiktok.com/@TaraAngkorHotel",
      instagram: "https://instagram.com/TaraAngkorHotel"
    }
  },
  {
    id: 8,
    name: "Angkor Pearl Hotel",
    type: "Hotel",
    stars: 4,
    location: "Siem Reap",
    address: "Wat Bo Village, Salakamreuk, Siem Reap, Cambodia",
    price: 48,
    reviewer: 76,
    rating: 4.3,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2DpGVFC5EXfLofHkUWnJsA9r-NVcRQKccaxkUtoYd5Q&s=10",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFBc8VxnFXicd0SsH7cWeAPIdYz-GxxQiJameML67nPQ&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKcxL02DaHnmrmi-adOfM5_kT14mh5T6cT1kG8qUvNFQ&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZFY07hxWbgbi1HK00dWix6tAT5oCBiJw73FRvD_z78Q&s=10"
    ],
    description:
      "Angkor Pearl Hotel offers affordable, comfortable stays in a prime location near Pub Street and the Old Market. Friendly staff, clean rooms, and a rooftop restaurant make it a traveler favorite.",
    facilities: [
      "Free Wi-Fi",
      "Rooftop Restaurant",
      "Air Conditioning",
      "24-hour Front Desk",
      "Tuk-tuk Service"
    ],
    services: [
      "Tour Desk",
      "Laundry",
      "Airport Shuttle",
      "Breakfast Included"
    ],
    furniture: [
      "Queen Bed",
      "Air Conditioning",
      "Flat-screen TV",
      "Wardrobe",
      "Work Desk"
    ],
    roomTypes: [
      {
        name: "Standard Room",
        price: 48,
        capacity: 2,
        description: "Clean and cozy room with air conditioning and city view.",
        available: 5
      },
      {
        name: "Superior Room",
        price: 62,
        capacity: 2,
        description: "Larger room with window seating and pool view.",
        available: 3
      }
    ],
    checkIn: "14:00",
    checkOut: "12:00",
    policies: [
      "No smoking in rooms",
      "Quiet hours after 22:00",
      "Cancellation must be made 24 hours before check-in"
    ],
    contact: {
      hotline: "+855 63 966 555",
      facebook: "https://facebook.com/AngkorPearlHotel",
      tiktok: "https://tiktok.com/@AngkorPearlHotel",
      instagram: "https://instagram.com/AngkorPearlHotel"
    }
  },
  {
    id: 9,
    name: "Golden Temple Villa",
    type: "Boutique",
    stars: 4,
    location: "Siem Reap",
    address: "Angkor High School Road, Krong Siem Reap, Cambodia",
    price: 70,
    reviewer: 210,
    rating: 4.7,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk44agieLI-Te-aHxIIRtHQw_zUZkUPCoHSSW_evHZgg&s=10",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRiIGCZDpaPEUJz-FBkHJ2G_HbNvOuaum0dOX85Pi00A&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSopHJL4J49Wxge3DTawDzkc8xcQSW2bsWvuNlZi3A9w&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6zZhNotczy4Tad-vDRI0TcQ2Se1mYX7KXdQMX_8AuFQ&s=10"
    ],
    description:
      "A beautifully restored wooden villa combining traditional architecture with boutique luxury. Set among tropical gardens, it features a stunning pool, open-air restaurant, and an award-winning spa.",
    facilities: [
      "Swimming Pool",
      "Free Wi-Fi",
      "Restaurant",
      "Spa",
      "Garden",
      "Bar",
      "Terrace"
    ],
    services: [
      "Airport Pickup",
      "Bicycle Rental",
      "Tuk-tuk Service",
      "Breakfast Included",
      "Spa Treatment"
    ],
    furniture: [
      "King Bed",
      "Air Conditioning",
      "Wooden Furniture",
      "Flat-screen TV",
      "Mini Bar",
      "Terrace"
    ],
    roomTypes: [
      {
        name: "Deluxe Room",
        price: 70,
        capacity: 2,
        description: "Wood-paneled room with garden views and handcrafted furnishings.",
        available: 6
      },
      {
        name: "Superior Pool View",
        price: 95,
        capacity: 2,
        description: "Bright room overlooking the pool with a private terrace.",
        available: 4
      },
      {
        name: "Family Suite",
        price: 150,
        capacity: 4,
        description: "Two-bedroom suite with shared lounge and mini kitchen.",
        available: 2
      }
    ],
    checkIn: "14:00",
    checkOut: "12:00",
    policies: [
      "No smoking in rooms",
      "Children welcome under adult supervision",
      "Cancellation must be made 24 hours before check-in"
    ],
    contact: {
      hotline: "+855 63 760 882",
      facebook: "https://facebook.com/GoldenTempleVilla",
      tiktok: "https://tiktok.com/@GoldenTempleVilla",
      instagram: "https://instagram.com/GoldenTempleVilla"
    }
  },
  {
    id: 12,
    name: "Somadevi Angkor Resort & Spa",
    type: "Resort",
    stars: 4,
    location: "Siem Reap",
    address: "National Road No. 6, Khum Svay Dangkom, Siem Reap, Cambodia",
    price: 95,
    reviewer: 180,
    rating: 4.5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs2Sns9knawdF_Y4Bxf_s_hia6mqCFhmaWXnrziHE3b5E_rl-MkKoIqwhb&s=10",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2M6-T_vng4BuGQhvlk75EWvKROsLqds--tcbQu0fI7w&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsAlArvIQ5wO72gdbiMrLbMhuFC0jd3YHLmxrYSlee6A&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWXHZ8COKZpZjTLY6mO6F2lieJDcqFdB7Ny0QcxWGfpQ&s=10"
    ],
    description:
      "Situated along the Siem Reap river, Somadevi Angkor Resort & Spa combines colonial charm with modern resort amenities, a riverside pool, and an acclaimed Khmer fine-dining restaurant.",
    facilities: [
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Riverside Terrace",
      "Fitness Center",
      "Free Wi-Fi",
      "Parking"
    ],
    services: [
      "Airport Pickup",
      "Motorboat River Tour",
      "Laundry",
      "Room Service",
      "Breakfast Included"
    ],
    furniture: [
      "King Bed",
      "Air Conditioning",
      "Flat-screen TV",
      "Mini Bar",
      "Daybed",
      "Balcony"
    ],
    roomTypes: [
      {
        name: "Superior Room",
        price: 95,
        capacity: 2,
        description: "Comfortable room with river views and luxury bedding.",
        available: 8
      },
      {
        name: "Deluxe Garden Room",
        price: 115,
        capacity: 2,
        description: "Garden-facing room with private balcony and daybed.",
        available: 5
      },
      {
        name: "Riverside Suite",
        price: 190,
        capacity: 4,
        description: "Spacious suite with living area and riverside terrace.",
        available: 3
      }
    ],
    checkIn: "14:00",
    checkOut: "12:00",
    policies: [
      "No smoking in rooms",
      "Pets are not allowed",
      "Cancellation must be made 24 hours before check-in"
    ],
    contact: {
      hotline: "+855 63 967 333",
      facebook: "https://facebook.com/SomadeviAngkorResort",
      tiktok: "https://tiktok.com/@SomadeviAngkor",
      instagram: "https://instagram.com/SomadeviAngkor"
    }
  },
  {
    id: 13,
    name: "Angkor Village Resort & Spa",
    type: "Resort",
    stars: 5,
    location: "Siem Reap",
    address: "Road to Angkor, Siem Reap, Cambodia",
    price: 140,
    reviewer: 260,
    rating: 4.8,
    image: "vhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE0oh6E1y_dKZ49OQY0Tvnvym8yFColawP8R81vGTbfA&s",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRunIZoVlfOwygrxIbJ4OGufbL16dtfN4M0qAxKSkNJeg&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmmNDUuxP1tEg6qrQ6QpJIQMpFfcJIjyn8idj-XGhrjw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHpxjXE5GBWvCXD3FpA5kPkyELXu32g0LoFSxA19n1Hg&s"
    ],
    description:
      "Inspired by traditional Khmer village architecture, this intimate five-star resort features saltwater pools, lush tropical gardens, and world-class service only a few minutes from Angkor Wat.",
    facilities: [
      "Saltwater Pool",
      "Spa",
      "Restaurant",
      "Aqua Bar",
      "Garden",
      "Free Wi-Fi",
      "Bicycle Parking"
    ],
    services: [
      "Airport Pickup",
      "Complimentary Temple Shuttle",
      "Cultural Dance Evening",
      "Laundry",
      "Breakfast Included"
    ],
    furniture: [
      "Four-poster Bed",
      "Air Conditioning",
      "Handcrafted Khmer Furniture",
      "Safety Deposit Box",
      "Private Patio"
    ],
    roomTypes: [
      {
        name: "Superior Room",
        price: 140,
        capacity: 2,
        description: "Traditional-style room with private patio and pond views.",
        available: 6
      },
      {
        name: "Villa with Pool",
        price: 260,
        capacity: 3,
        description: "Standalone villa with private saltwater plunge pool.",
        available: 3
      }
    ],
    checkIn: "14:00",
    checkOut: "12:00",
    policies: [
      "No smoking in rooms",
      "Complimentary shuttle seats reserved on first-come basis",
      "Cancellation must be made 48 hours before check-in"
    ],
    contact: {
      hotline: "+855 63 963 561",
      facebook: "https://facebook.com/AngkorVillageResortSpa",
      tiktok: "https://tiktok.com/@AngkorVillageResort",
      instagram: "https://instagram.com/AngkorVillageResort"
    }
  },
  {
    id: 15,
    name: "The Privilege Floor",
    type: "Boutique",
    stars: 5,
    location: "Siem Reap",
    address: "Sok San Road, Svay Dangkum, Siem Reap, Cambodia",
    price: 150,
    reviewer: 140,
    rating: 4.9,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnS2LUHSkWl1ZElgzPNc2v_BtcZf-vKGg3ZQAiGtHTYQ&s=10",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8nkR6PE9XazPkLYX6UWhIaZdmomUXVShERxIQ_5y64A&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-nv8IQCzi_1AZiFrJJnis1zweOxueMlXGuy0AJjzSw&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-dSGhaF5tB-h8FvEJE3cHDd3RCUKamswzqU4XILLaSg&s=10"
    ],
    description:
      "An intimate all-suite boutique hotel with only nine residences, each offering butler service, private balconies, and award-winning rooftop dining. Expect uncompromising privacy and five-star pampering.",
    facilities: [
      "Rooftop Pool",
      "Spa & Wellness",
      "Fine Dining Restaurant",
      "Rooftop Bar",
      "Free Wi-Fi",
      "Concierge",
      "Panoramic City Views"
    ],
    services: [
      "Butler Service",
      "Airport Pickup",
      "Private Tuk-tuk",
      "In-room Dining",
      "Breakfast Included"
    ],
    furniture: [
      "King Bed",
      "Air Conditioning",
      "Smart TV",
      "Mini Bar",
      "Walk-in Wardrobe",
      "Butler Call Button",
      "Balcony"
    ],
    roomTypes: [
      {
        name: "Panorama Residence",
        price: 150,
        capacity: 2,
        description: "Spacious suite with panoramic views and walk-in rain shower.",
        available: 4
      },
      {
        name: "Deluxe Residence",
        price: 210,
        capacity: 2,
        description: "Corner suite with private balcony and separate lounge.",
        available: 3
      },
      {
        name: "Privilege Suite",
        price: 320,
        capacity: 4,
        description: "The signature residence with dining area, jacuzzi, and butler.",
        available: 2
      }
    ],
    checkIn: "14:00",
    checkOut: "12:00",
    policies: [
      "Adults only (16+)",
      "No smoking in rooms",
      "Butler service available 24/7",
      "Cancellation must be made 48 hours before check-in"
    ],
    contact: {
      hotline: "+855 63 964 666",
      facebook: "https://facebook.com/ThePrivilegeFloor",
      tiktok: "https://tiktok.com/@ThePrivilegeFloor",
      instagram: "https://instagram.com/ThePrivilegeFloor"
    }
  },
  {
    id: 16,
    name: "Central Boutique Angkor Hotel",
    type: "Boutique",
    stars: 4,
    location: "Siem Reap",
    address: "Wat Bo Road, Salakamreuk, Siem Reap, Cambodia",
    price: 50,
    reviewer: 88,
    rating: 4.4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbp8SRPv90UO4l4D3ZDVT6cabLJAmsUzl2l0_4QMimYg&s=10",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4-ZyV6qCluhzgeDz-Nfk6LpzvsOHdeba-V1p-6jjASw&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTQaVw-yKm-n4Vd6v-K52q20VAkfnZ95ba-sZAFHcQYw&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEBJ7EdUKlN_7VdLH1bIKxL3YL_7TY-eUkl1rrMZDLSA&s=10"
    ],
    description:
      "A stylish boutique hotel in the beating heart of Siem Reap, steps from Pub Street and the Night Market. Modern design, a vibrant pool bar, and energetic atmosphere make it a hotspot for young travelers.",
    facilities: [
      "Swimming Pool",
      "Pool Bar",
      "Free Wi-Fi",
      "Restaurant",
      "Rooftop Terrace",
      "24-hour Front Desk"
    ],
    services: [
      "Tour Desk",
      "Tuk-tuk Service",
      "Laundry",
      "Breakfast Included"
    ],
    furniture: [
      "Queen Bed",
      "Air Conditioning",
      "Flat-screen TV",
      "Mini Bar",
      "Shared Balcony"
    ],
    roomTypes: [
      {
        name: "City Room",
        price: 50,
        capacity: 2,
        description: "Compact modern room with pool or city views.",
        available: 6
      },
      {
        name: "Pool View Room",
        price: 68,
        capacity: 2,
        description: "Room overlooking the pool with a shared balcony.",
        available: 4
      }
    ],
    checkIn: "14:00",
    checkOut: "12:00",
    policies: [
      "No smoking in rooms",
      "Quiet hours after 23:00",
      "Cancellation must be made 24 hours before check-in"
    ],
    contact: {
      hotline: "+855 63 969 444",
      facebook: "https://facebook.com/CentralBoutiqueAngkor",
      tiktok: "https://tiktok.com/@CentralBoutiqueAngkor",
      instagram: "https://instagram.com/CentralBoutiqueAngkor"
    }
  },
  {
    id: 17,
    name: "Regency Angkor Hotel",
    type: "Hotel",
    stars: 4,
    location: "Siem Reap",
    address: "National Road No. 6, Krowob Village, Siem Reap, Cambodia",
    price: 75,
    reviewer: 148,
    rating: 4.5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJyR9FEN3GqMRTzSA0zlcC_kOwqPFP6UU4IqODKYGyow&s=10",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKcF0ztvELsbk_GosXNWDeL3aeOqRqtx9GEMNvDClsjg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2IX1qRUBQmgS-TCZqKKmyeKfgBvomT-_9nyjX2ukVZw&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZPCr-RFOVz1jFxfPZM1Si5HgFUTXnqVi4URBCJP-kWg&s=10"
    ],
    description:
      "Regency Angkor Hotel offers a refined stay with a grand lobby, shimmering pool, and attentive service. Conveniently located on the main road, it's a perfect base for exploring Angkor Wat.",
    facilities: [
      "Swimming Pool",
      "Restaurant",
      "Bar",
      "Spa",
      "Fitness Center",
      "Business Center",
      "Free Wi-Fi",
      "Parking"
    ],
    services: [
      "Airport Pickup",
      "Tour Desk",
      "Room Service",
      "Breakfast Included",
      "Laundry"
    ],
    furniture: [
      "King Bed",
      "Air Conditioning",
      "Flat-screen TV",
      "Work Desk",
      "Safety Deposit Box",
      "Seating Area"
    ],
    roomTypes: [
      {
        name: "Superior Room",
        price: 75,
        capacity: 2,
        description: "Elegant room with city views and premium amenities.",
        available: 8
      },
      {
        name: "Deluxe Room",
        price: 95,
        capacity: 2,
        description: "Spacious room with pool views and seating area.",
        available: 5
      },
      {
        name: "Executive Suite",
        price: 165,
        capacity: 3,
        description: "Suite with separate lounge, work desk, and club access.",
        available: 3
      }
    ],
    checkIn: "14:00",
    checkOut: "12:00",
    policies: [
      "No smoking in rooms",
      "Pets are not allowed",
      "Cancellation must be made 24 hours before check-in",
      "Valid ID required at check-in"
    ],
    contact: {
      hotline: "+855 63 760 311",
      facebook: "https://facebook.com/RegencyAngkorHotel",
      tiktok: "https://tiktok.com/@RegencyAngkorHotel",
      instagram: "https://instagram.com/RegencyAngkorHotel"
    }
  },
  {
    id: 18,
    name: "Steung Siemreap Thmey Hotel",
    type: "Hotel",
    stars: 4,
    location: "Siem Reap",
    address: "Prah Sihanouk Avenue, Krong Siem Reap, Cambodia",
    price: 85,
    reviewer: 142,
    rating: 4.1,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZuASbcs09l2r24IMG-x3TTS8xHmFOtjxmtfIv4i7wAA&s=10",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLmv_zRI5ELGXzqvIy9AzZYDc9BFGVDAcFy2ye66Tyfw&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_NWd2ZzDNhDZrsSJpNGpILSmpyX-mzoISO-jgaPwDWw&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO5DeEvVbSSQFlC27EOj3pISSanyh6yGCqGPZgAL8HNw&s"
    ],
    description:
      "A welcoming hotel facing the Siem Reap river with comfortable rooms, a rooftop terrace for sunset views, and a helpful staff that goes the extra mile — an ideal base for exploring Angkor Wat.",
    facilities: [
      "Free Wi-Fi",
      "Rooftop Terrace",
      "Restaurant",
      "Air Conditioning",
      "Motorbike Parking"
    ],
    services: [
      "Tour Booking",
      "Laundry",
      "Airport Drop-off",
      "Breakfast Included"
    ],
    furniture: [
      "Double Bed",
      "Air Conditioning",
      "Wardrobe",
      "Writing Desk",
      "Coffee Table"
    ],
    roomTypes: [
      {
        name: "Standard Room",
        price: 85,
        capacity: 2,
        description: "Simple room with A/C, hot shower, and river view.",
        available: 6
      },
      {
        name: "Family Room",
        price: 110,
        capacity: 4,
        description: "Room with two double beds and extra space for kids.",
        available: 3
      }
    ],
    checkIn: "14:00",
    checkOut: "12:00",
    policies: [
      "No smoking in rooms",
      "Reception open from 06:00 to 23:00",
      "Cancellation must be made 24 hours before check-in"
    ],
    contact: {
      hotline: "+855 12 900 111",
      facebook: "https://facebook.com/SteungSiemreapThmey",
      tiktok: "https://tiktok.com/@SteungSiemreapThmey",
      instagram: "https://instagram.com/SteungSiemreapThmey"
    }
  },
  {
    id: 19,
    name: "Memoire d'Angkor Boutique Hotel",
    type: "Boutique",
    stars: 5,
    location: "Siem Reap",
    address: "Stone Bridge Street, Krong Siem Reap, Cambodia",
    price: 110,
    reviewer: 175,
    rating: 4.7,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGQPHc3pYB5eupYMbJ-qVsd0AC2pchqQCmhpXZfbPBYw&s=10",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkQfGOkcnVDbke843PPh9GQ9XAneAuHwqEkLf_yFV_hQ&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTawfLRYiUKXYkrBWrYbtdJSLnjwoSRkstrZ7bH3iJpeQ&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS90agZMb6lKc545RMPzetBsIG2-lLFsr6qq6TdFyzenw&s=10"
    ],
    description:
      "Memoire d'Angkor is a sophisticated boutique retreat where French Indochine elegance meets Khmer craftsmanship. Expect art-filled interiors, a serene courtyard pool, and chef-driven dining.",
    facilities: [
      "Courtyard Pool",
      "Fine Dining Restaurant",
      "Library Lounge",
      "Spa",
      "Art Gallery",
      "Free Wi-Fi",
      "Concierge"
    ],
    services: [
      "Airport Pickup",
      "Cultural Workshops",
      "Temple Shuttle",
      "Breakfast Included",
      "Laundry"
    ],
    furniture: [
      "King Bed",
      "Air Conditioning",
      "Smart TV",
      "Mini Bar",
      "Antique Furniture",
      "Balcony"
    ],
    roomTypes: [
      {
        name: "Deluxe Room",
        price: 110,
        capacity: 2,
        description: "Artful room with courtyard views and handcrafted decor.",
        available: 6
      },
      {
        name: "Junior Suite",
        price: 155,
        capacity: 2,
        description: "Suite with separate lounge and private terrace.",
        available: 4
      },
      {
        name: "Signature Suite",
        price: 240,
        capacity: 4,
        description: "Luxury suite with dining area, balcony, and spa bath.",
        available: 2
      }
    ],
    checkIn: "14:00",
    checkOut: "12:00",
    policies: [
      "No smoking in rooms",
      "Quiet hours after 22:00",
      "Cancellation must be made 48 hours before check-in"
    ],
    contact: {
      hotline: "+855 63 965 555",
      facebook: "https://facebook.com/MemoiredAngkor",
      tiktok: "https://tiktok.com/@MemoiredAngkor",
      instagram: "https://instagram.com/MemoiredAngkor"
    }
  },
  {
    id: 21,
    name: "Palm Village Residence & Spa",
    type: "Villa",
    stars: 4,
    location: "Siem Reap",
    address: "Road No. 6, Phum Khrus, Siem Reap, Cambodia",
    price: 90,
    reviewer: 130,
    rating: 4.5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDZrohtbuVEuaoKR7tStGn5eVhn2DO_H2DITMh9jEYCw&s=10",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1jQquTstUWlAEWuuLBEJoZlBDnKmJ-AjXV_b7Bp97RQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLx3cVHlmq5zSDmGFqVKJAASGGj51ozKfKK0N2KU4QJg&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92rCco5LrafBWaiAZ30685XpnQwGjggCegUNi1tYWKA&s"
    ],
    description:
      "A peaceful residential-style spa village lined with palm trees. Enjoy spacious garden villas, an award-winning spa using local organic ingredients, and relaxing pool-side sun loungers.",
    facilities: [
      "Swimming Pool",
      "Garden Spa",
      "Restaurant",
      "Yoga Pavilion",
      "Free Wi-Fi",
      "Parking"
    ],
    services: [
      "Spa Treatment",
      "Yoga Classes",
      "Airport Pickup",
      "Breakfast Included",
      "Laundry"
    ],
    furniture: [
      "King Bed",
      "Air Conditioning",
      "Daybed",
      "Safety Deposit Box",
      "Terrace"
    ],
    roomTypes: [
      {
        name: "Garden Villa",
        price: 90,
        capacity: 2,
        description: "Private villa with tropical garden and daybed.",
        available: 6
      },
      {
        name: "Spa Villa",
        price: 120,
        capacity: 2,
        description: "Villa with in-room massage table and whirlpool tub.",
        available: 4
      },
      {
        name: "Family Residence",
        price: 165,
        capacity: 5,
        description: "Two-bedroom residence with kitchenette and terrace.",
        available: 2
      }
    ],
    checkIn: "14:00",
    checkOut: "12:00",
    policies: [
      "No smoking in rooms",
      "Spa appointments recommended in advance",
      "Cancellation must be made 24 hours before check-in"
    ],
    contact: {
      hotline: "+855 63 964 888",
      facebook: "https://facebook.com/PalmVillageResidence",
      tiktok: "https://tiktok.com/@PalmVillageResidence",
      instagram: "https://instagram.com/PalmVillageResidence"
    }
  },
  {
    id: 22,
    name: "Angkor Hotel",
    type: "Hotel",
    stars: 4,
    location: "Siem Reap",
    address: "Siem Reap River Road, Krong Siem Reap, Cambodia",
    price: 65,
    reviewer: 145,
    rating: 4.4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnxMfUGJTEyxmPiNf3zmuYXhP_dzQwVL92tSa2rhklKw&s=10",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPWSxht11EzXJ7FwbD0qhgc0Gw_-QV6OOzNSur74cVdg&s=10",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/40612450.jpg?k=969859e1d54f331fca354c2efd99c5c81982d032b02ba2ac82405b42df9cea62&o=",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS40BxLi08sZlpHIPnF_4RJjgKIeWltM9lVKtyFeH4ZJg&s"
    ],
    description:
      "Famous for its riverside sunset views, Angkor Hotel invites guests to watch the sky turn golden over the Siem Reap river. Comfortable rooms and a laid-back riverside bar round out the charm.",
    facilities: [
      "Riverside Pool",
      "Sunset Bar",
      "Restaurant",
      "Free Wi-Fi",
      "Garden",
      "Communal Fire Pit"
    ],
    services: [
      "Sunset Cruise Booking",
      "Bicycle Rental",
      "Laundry",
      "Breakfast Included"
    ],
    furniture: [
      "Queen Bed",
      "Air Conditioning",
      "Ceiling Fan",
      "Wardrobe",
      "Balcony"
    ],
    roomTypes: [
      {
        name: "Garden Room",
        price: 65,
        capacity: 2,
        description: "Room with quiet garden view and queen bed.",
        available: 6
      },
      {
        name: "River View Room",
        price: 82,
        capacity: 2,
        description: "Room with balcony overlooking the Siem Reap river.",
        available: 4
      }
    ],
    checkIn: "14:00",
    checkOut: "12:00",
    policies: [
      "No smoking in rooms",
      "Quiet hours after 22:00",
      "Cancellation must be made 24 hours before check-in"
    ],
    contact: {
      hotline: "+855 63 760 999",
      facebook: "https://facebook.com/SunsetGroveAngkor",
      tiktok: "https://tiktok.com/@SunsetGroveAngkor",
      instagram: "https://instagram.com/SunsetGroveAngkor"
    }
  },
  {
    id: 23,
    name: "Angkor Century Resort & Spa",
    type: "Resort",
    stars: 5,
    location: "Siem Reap",
    address: "National Road No. 6, Phum Brey, Siem Reap, Cambodia",
    price: 120,
    reviewer: 195,
    rating: 4.6,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4f_UOoM5-BGLXg2ybKkNEV960Lf334BoIsqSFlEv0PQ&s=10",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxruhx8I0_F3HRIzzYQh8gUm0CRS_g9OPy-P2CFZEWHg&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUnnwWU2759fzknqjSysHiOTmE9BNqzaHGmLjmhcUgQ&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTljy-Q-zEAP_y6B7DrIvktsMgx1qqJwdyOmVp32oICxg&s=10"
    ],
    description:
      "A grand five-star resort surrounded by tropical gardens, lakes, and fountains. Angkor Century features an enormous freeform pool, family-friendly facilities, and easy access to the Angkor temples.",
    facilities: [
      "Freeform Pool",
      "Kids Pool",
      "Spa & Sauna",
      "Restaurant & Bar",
      "Tennis Court",
      "Playground",
      "Free Wi-Fi",
      "Parking"
    ],
    services: [
      "Kids Club",
      "Airport Pickup",
      "Tour Desk",
      "Laundry",
      "Breakfast Included"
    ],
    furniture: [
      "King Bed",
      "Air Conditioning",
      "Flat-screen TV",
      "Mini Bar",
      "Safety Deposit Box",
      "Bathtub"
    ],
    roomTypes: [
      {
        name: "Superior Room",
        price: 120,
        capacity: 2,
        description: "Comfortable room with garden views and premium bedding.",
        available: 10
      },
      {
        name: "Deluxe Garden Room",
        price: 140,
        capacity: 2,
        description: "Larger room with courtyard and lake views.",
        available: 6
      },
      {
        name: "Century Suite",
        price: 200,
        capacity: 4,
        description: "Suite with living room, dining area, and bathtub.",
        available: 3
      }
    ],
    checkIn: "14:00",
    checkOut: "12:00",
    policies: [
      "No smoking in rooms",
      "Children must be supervised at the pools",
      "Cancellation must be made 48 hours before check-in",
      "Valid ID required at check-in"
    ],
    contact: {
      hotline: "+855 63 966 222",
      facebook: "https://facebook.com/AngkorCenturyResort",
      tiktok: "https://tiktok.com/@AngkorCenturyResort",
      instagram: "https://instagram.com/AngkorCenturyResort"
    }
  },
  {
    id: 24,
    name: "Pavillon d'Orient Villa",
    type: "Boutique",
    stars: 4,
    location: "Siem Reap",
    address: "Taphul Village, Svay Dangkum, Siem Reap, Cambodia",
    price: 55,
    reviewer: 82,
    rating: 4.8,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSms4bJQr3Fm8bsNlVDmhe-tOjfzF6iHz5n1YeUD1WpgA&s=10",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTtZxooWGHJufbUJiKUZZscPO7jQ9egmczfEnBdOqa_g&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ6tiBe6Dp5D4kL3nZoryupCjZ_rLrt-sxqp_Fn49gmA&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW5XNrOkLj5F7JREXl1ka1cZfHX-Ti6q2dXJgzAL0t1A&s=10"
    ],
    description:
      "A refined colonial villa turned boutique sanctuary, with ornate Indochine decor, a lap pool among frangipani trees, and personalized concierge that remembers your favorite drink.",
    facilities: [
      "Lap Pool",
      "Restaurant",
      "Wine Cellar",
      "Spa",
      "Free Wi-Fi",
      "Garden",
      "Private Dining"
    ],
    services: [
      "Personal Concierge",
      "Airport Pickup",
      "Limousine Service",
      "In-room Dining",
      "Breakfast Included"
    ],
    furniture: [
      "Four-poster Bed",
      "Air Conditioning",
      "Antique Furniture",
      "Mini Bar",
      "Safety Deposit Box",
      "Veranda"
    ],
    roomTypes: [
      {
        name: "Colonial Room",
        price: 55,
        capacity: 2,
        description: "Heritage-style room with four-poster bed and antiques.",
        available: 5
      },
      {
        name: "Executive Villa",
        price: 85,
        capacity: 2,
        description: "Villa wing with private lounge and garden courtyard.",
        available: 3
      },
      {
        name: "The Orient Suite",
        price: 120,
        capacity: 4,
        description: "Signature suite with terrace, plunge pool, and pantry.",
        available: 2
      }
    ],
    checkIn: "14:00",
    checkOut: "12:00",
    policies: [
      "No smoking in rooms",
      "Elegant attire recommended in dining areas",
      "Cancellation must be made 48 hours before check-in"
    ],
    contact: {
      hotline: "+855 63 765 111",
      facebook: "https://facebook.com/PavillonDOrientVilla",
      tiktok: "https://tiktok.com/@PavillonDOrient",
      instagram: "https://instagram.com/PavillonDOrient"
    }
  },
  {
    id: 26,
    name: "Banteay Srey Boutique Villa & Spa",
    type: "Boutique",
    stars: 4,
    location: "Siem Reap",
    address: "Sok San Road, Group 10, Krong Siem Reap, Cambodia",
    price: 60,
    reviewer: 160,
    rating: 4.5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPwTeULMvRjAsb0tTHGHbd62QkZwJNoH7JLuYxwjE40w&s=10",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROEI29pTTH3h3zepf5WpTjpas3Igm9AN0ez35ijoNsyw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdQtalBXfwE2kiACzefozduvrEZS8Mc_dwYFbVkApprA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1ScTaBQbBjKZy9wN1k0quBPKX9fULxjHTkw4gWUo66Q&s=10"
    ],
    description:
      "Named after the famous 'Citadel of Women', this boutique villa & spa offers intimate luxury with a tranquil spa, elegant Khmer interiors, and a spa garden shaded by frangipani trees.",
    facilities: [
      "Swimming Pool",
      "Spa & Sauna",
      "Restaurant",
      "Free Wi-Fi",
      "Garden",
      "Sun Deck"
    ],
    services: [
      "Spa Packages",
      "Airport Pickup",
      "Temple Shuttle",
      "Breakfast Included",
      "Laundry"
    ],
    furniture: [
      "King Bed",
      "Air Conditioning",
      "Flat-screen TV",
      "Khmer Handcrafted Furniture",
      "Private Patio"
    ],
    roomTypes: [
      {
        name: "Deluxe Room",
        price: 60,
        capacity: 2,
        description: "Elegant room with Khmer textiles and garden views.",
        available: 6
      },
      {
        name: "Garden Villa",
        price: 90,
        capacity: 2,
        description: "Standalone villa with private patio and outdoor tub.",
        available: 4
      },
      {
        name: "Spa Suite",
        price: 130,
        capacity: 3,
        description: "Suite with in-room spa corner and private terrace.",
        available: 2
      }
    ],
    checkIn: "14:00",
    checkOut: "12:00",
    policies: [
      "No smoking in rooms",
      "Spa daily specials available",
      "Cancellation must be made 24 hours before check-in"
    ],
    contact: {
      hotline: "+855 63 765 444",
      facebook: "https://facebook.com/BanteaySreyBoutique",
      tiktok: "https://tiktok.com/@BanteaySreyBoutique",
      instagram: "https://instagram.com/BanteaySreyBoutique"
    }
  },
  {
    id: 27,
    name: "TUI BLUE Angkor Grace",
    type: "Resort",
    stars: 5,
    location: "Siem Reap",
    address: "Road No. 6, Krous Village, Svay Dangkum, Siem Reap, Cambodia",
    price: 95,
    reviewer: 210,
    rating: 4.7,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFicJy2sOWyRzV1tIt6XxM4cB5dae7jLP5PcV3ReP-Qw&s=10",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx2foqdYSgg-cuH7eNMR8X6B8vbgmM9lj_rE-q2TWiBQ&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBcmfOovrbrm2SWCxOXUrtdZxvCZGNlLfM8kHeTvhoRQ&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQACZ2uLR8yb3NQ9IUdPP87SgJfb3WCpfoXBq2Ar8SCPQ&s=10"
    ],
    description:
      "TUI BLUE Angkor Grace is a contemporary wellness resort where modern design meets traditional Khmer hospitality. With a lagoon-style pool, vibrant dining venues, and dedicated fitness programming, it offers an energetic yet relaxing escape minutes from Angkor Wat.",
    facilities: [
      "Lagoon Pool",
      "Fitness Center",
      "Restaurant",
      "Pool Bar",
      "Spa",
      "Kids Club",
      "Free Wi-Fi",
      "Parking"
    ],
    services: [
      "Airport Pickup",
      "Tour Desk",
      "Yoga Classes",
      "Laundry",
      "Breakfast Included"
    ],
    furniture: [
      "King Bed",
      "Air Conditioning",
      "Flat-screen TV",
      "Mini Bar",
      "Safety Deposit Box",
      "Balcony"
    ],
    roomTypes: [
      {
        name: "Grace Room",
        price: 95,
        capacity: 2,
        description: "Bright contemporary room with pool or garden views.",
        available: 8
      },
      {
        name: "Deluxe Pool View",
        price: 125,
        capacity: 2,
        description: "Spacious room overlooking the lagoon pool with private balcony.",
        available: 6
      },
      {
        name: "Family Room",
        price: 165,
        capacity: 4,
        description: "Two-bedroom room with shared living space and garden terrace.",
        available: 3
      }
    ],
    checkIn: "14:00",
    checkOut: "12:00",
    policies: [
      "No smoking in rooms",
      "Pets are not allowed",
      "Cancellation must be made 48 hours before check-in",
      "Valid ID required at check-in"
    ],
    contact: {
      hotline: "+855 63 969 777",
      facebook: "https://facebook.com/TUIBlueAngkorGrace",
      tiktok: "https://tiktok.com/@TUIBlueAngkorGrace",
      instagram: "https://instagram.com/TUIBlueAngkorGrace"
    }
  },
  {
    id: 28,
    name: "Aborest Tropical Hostel",
    type: "Homestay",
    stars: 2,
    location: "Siem Reap",
    address: "Phsa Krom Road, Krong Siem Reap, Cambodia",
    price: 15,
    reviewer: 95,
    rating: 4.3,
    image: "",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThbXaGKNBeZKwu8KvX2Yb4uYv3tBUmsHyS3JBSuELXLg&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRda7MSJcA1bDiSe_NCcJHYvql7U9yYW7LGJce1-Jqg3A&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO-GqTxBrZ37wsK9ly3rIsh_aQjnuZrNN7KOhnq22nZg&s=10"
    ],
    description:
      "Aborest Tropical Hostel puts you in the heart of Siem Reap's backpacker scene. Set in a garden of tropical plants, it offers comfy dorms, a lively common lounge, bicycle hire, and easy walks to Pub Street and the Old Market.",
    facilities: [
      "Free Wi-Fi",
      "Dormitory Beds",
      "Garden",
      "Communal Kitchen",
      "Lounge",
      "Bicycle Parking"
    ],
    services: [
      "Bicycle Rental",
      "Tour Booking",
      "Laundry",
      "Airport Shuttle"
    ],
    furniture: [
      "Bunk Bed",
      "Lockers",
      "Ceiling Fan",
      "Reading Lamp"
    ],
    roomTypes: [
      {
        name: "Shared Dorm",
        price: 15,
        capacity: 1,
        description: "Comfortable bunk in a clean, air-conditioned shared dorm.",
        available: 12
      },
      {
        name: "Private Twin Room",
        price: 35,
        capacity: 2,
        description: "Ensuite twin room with garden view and private bathroom.",
        available: 4
      }
    ],
    checkIn: "13:00",
    checkOut: "11:00",
    policies: [
      "No smoking inside the hostel",
      "Quiet hours after 23:00",
      "Lockers available for deposit"
    ],
    contact: {
      hotline: "+855 12 800 222",
      facebook: "https://facebook.com/AborestTropicalHostel",
      tiktok: "https://tiktok.com/@AborestTropicalHostel",
      instagram: "https://instagram.com/AborestTropicalHostel"
    }
  },
  {
    id: 29,
    name: "Indochine Hotel Group SiemReap",
    type: "Hotel",
    stars: 4,
    location: "Siem Reap",
    address: "National Road No. 6, Sala Kamreuk, Siem Reap, Cambodia",
    price: 55,
    reviewer: 130,
    rating: 4.5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4UVU3vlRC7MvnDyLre7egg3CMkPx_CQ7F65I6nZA6z8Vcp2Ujiicq7wE&s=10",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlR-vXldkrIrw1z69LiPfnFurREyWQBJ_9T4wwnSmYcw&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpgcuGZ_trTqYf0pKBGcdiZ5WRk5pSi8r94UyOeZo4Dw&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR25RHLX5o07b-PVfQOo5NGiF9Evjk2J3FsJuJeoV_ITg&s=10"
    ],
    description:
      "Indochine Hotel Group SiemReap blends classic Indochine architecture with modern comforts. Guests enjoy a grand central pool, an acclaimed Khmer restaurant, and warm, professional service within easy reach of the Angkor temples.",
    facilities: [
      "Swimming Pool",
      "Restaurant",
      "Bar",
      "Spa",
      "Garden",
      "Free Wi-Fi",
      "Parking"
    ],
    services: [
      "Airport Pickup",
      "Tour Desk",
      "Room Service",
      "Laundry",
      "Breakfast Included"
    ],
    furniture: [
      "King Bed",
      "Air Conditioning",
      "Flat-screen TV",
      "Mini Bar",
      "Safety Deposit Box",
      "Work Desk"
    ],
    roomTypes: [
      {
        name: "Superior Room",
        price: 55,
        capacity: 2,
        description: "Comfortable room with garden views and modern amenities.",
        available: 7
      },
      {
        name: "Deluxe Room",
        price: 75,
        capacity: 2,
        description: "Spacious room with pool views and seating area.",
        available: 5
      },
      {
        name: "Executive Suite",
        price: 135,
        capacity: 3,
        description: "Suite with separate lounge, work desk, and balcony.",
        available: 2
      }
    ],
    checkIn: "14:00",
    checkOut: "12:00",
    policies: [
      "No smoking in rooms",
      "Cancellation must be made 24 hours before check-in",
      "Valid ID required at check-in"
    ],
    contact: {
      hotline: "+855 63 760 123",
      facebook: "https://facebook.com/IndochineHotelGroupSiemReap",
      tiktok: "https://tiktok.com/@IndochineHotelGroup",
      instagram: "https://instagram.com/IndochineHotelGroup"
    }
  },
  {
    id: 30,
    name: "Lotus Blanc Hotel & Resort",
    type: "Resort",
    stars: 5,
    location: "Siem Reap",
    address: "National Road No. 6, Kasekam Village, Siem Reap, Cambodia",
    price: 110,
    reviewer: 240,
    rating: 4.8,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP44aMot5pWYEgLie1ZLgLLCAqKkKgiZ_HSBmfLN742g&s=10",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJW-RGOrfP9LSPar6IQLJsYVUYlW3xh3SOKz1Zml4SPw&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbd4KmphfyqpHSM0TR8aylmUH3b4UPCweuwF7q3VyeLw&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu3li_XJKw95H-S9e2NYlx4zUMLe743LZ6HNV0-bNiQw&s"
    ],
    description:
      "Lotus Blanc Hotel & Resort is an elegant five-star hideaway surrounded by lotus ponds and lush tropical gardens. The resort features a magnificent infinity pool, world-class spa, and fine dining inspired by Khmer and French cuisine.",
    facilities: [
      "Infinity Pool",
      "Spa",
      "Fine Dining Restaurant",
      "Pool Bar",
      "Fitness Center",
      "Lotus Garden",
      "Free Wi-Fi",
      "Business Center"
    ],
    services: [
      "Airport Pickup",
      "Temple Shuttle",
      "Butler Service",
      "Laundry",
      "Breakfast Included"
    ],
    furniture: [
      "King Bed",
      "Air Conditioning",
      "Smart TV",
      "Mini Bar",
      "Safety Deposit Box",
      "Bathtub",
      "Balcony"
    ],
    roomTypes: [
      {
        name: "Superior Room",
        price: 110,
        capacity: 2,
        description: "Elegant room with lotus garden views and luxury bedding.",
        available: 10
      },
      {
        name: "Deluxe Pool Access",
        price: 150,
        capacity: 2,
        description: "Ground-floor room with direct access to the infinity pool.",
        available: 6
      },
      {
        name: "Lotus Suite",
        price: 240,
        capacity: 4,
        description: "Signature suite with private terrace overlooking the lotus ponds.",
        available: 3
      }
    ],
    checkIn: "14:00",
    checkOut: "12:00",
    policies: [
      "No smoking in rooms",
      "Pets are not allowed",
      "Cancellation must be made 48 hours before check-in",
      "Valid ID required at check-in"
    ],
    contact: {
      hotline: "+855 63 900 888",
      facebook: "https://facebook.com/LotusBlancHotel",
      tiktok: "https://tiktok.com/@LotusBlancHotel",
      instagram: "https://instagram.com/LotusBlancHotel"
    }
  },
  {
    id: 31,
    name: "Angkor Mansion & Residence",
    type: "Villa",
    stars: 4,
    location: "Siem Reap",
    address: "River Road, Krong Siem Reap, Cambodia",
    price: 85,
    reviewer: 115,
    rating: 4.6,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCdvc6WP7tcBzJkRdNdE_mbssPkUSraCcDxjFUbDJzIA&s=10",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKu8m7Nc7R6JYtrITmn3S78rfGCjxnOp31CgF2jNZpPQ&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrlQtw6cnq0u4esQ4FYqJLgGSQSpZDbspdZeziPTIbIQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3cvOfRxrIZJhrhiwtSDXYosDO4hWBCX7Ep3YSc7x7hA&s"
    ],
    description:
      "Angkor Mansion & Residence offers serviced villa-style accommodation along the Siem Reap river. With spacious residences, a serene pool, and a home-away-from-home atmosphere, it is ideal for families and longer stays.",
    facilities: [
      "Swimming Pool",
      "Garden",
      "Restaurant",
      "Living Room",
      "Free Wi-Fi",
      "Parking"
    ],
    services: [
      "Airport Pickup",
      "Housekeeping",
      "Bicycle Rental",
      "Laundry",
      "Breakfast Included"
    ],
    furniture: [
      "King Bed",
      "Air Conditioning",
      "Flat-screen TV",
      "Kitchenette",
      "Dining Table",
      "Sofa"
    ],
    roomTypes: [
      {
        name: "Studio Residence",
        price: 85,
        capacity: 2,
        description: "Compact residence with kitchenette and garden view.",
        available: 6
      },
      {
        name: "One-Bedroom Suite",
        price: 110,
        capacity: 3,
        description: "Suite with separate bedroom, living area, and balcony.",
        available: 4
      },
      {
        name: "Family Residence",
        price: 160,
        capacity: 5,
        description: "Two-bedroom residence with full kitchen and dining space.",
        available: 2
      }
    ],
    checkIn: "14:00",
    checkOut: "12:00",
    policies: [
      "No smoking in rooms",
      "Quiet hours after 22:00",
      "Cancellation must be made 24 hours before check-in"
    ],
    contact: {
      hotline: "+855 63 761 111",
      facebook: "https://facebook.com/AngkorMansionResidence",
      tiktok: "https://tiktok.com/@AngkorMansion",
      instagram: "https://instagram.com/AngkorMansion"
    }
  },
  {
    id: 32,
    name: "RITHY RINE Angkor Residence",
    type: "Boutique",
    stars: 4,
    location: "Siem Reap",
    address: "Wat Bo Village, Salakamreuk, Siem Reap, Cambodia",
    price: 65,
    reviewer: 100,
    rating: 4.5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf8HDTenn_0NHAlu5qYRiZAKIadVQL9rPe9HN3Kw38gQ&s",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNrj1A1ZclEBANv-QvHrjS-eP096TkdUlOdHWA7sxC-g&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4UyKPncshoxN2Jrh_9IJuPR5Yxs-807or0h872efO0A&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGmw1nF6zmkzEBFC8YVq2oSgbAzgfytz_-KD3B121t8g&s"
    ],
    description:
      "RITHY RINE Angkor Residence is a boutique sanctuary blending Khmer artistry with boutique comfort. Set among frangipani trees, it features an intimate pool, a spa, and personalized hospitality a short tuk-tuk ride from the temples.",
    facilities: [
      "Courtyard Pool",
      "Spa",
      "Restaurant",
      "Garden",
      "Free Wi-Fi",
      "Terrace"
    ],
    services: [
      "Airport Pickup",
      "Tuk-tuk Service",
      "Temple Shuttle",
      "Laundry",
      "Breakfast Included"
    ],
    furniture: [
      "King Bed",
      "Air Conditioning",
      "Flat-screen TV",
      "Mini Bar",
      "Khmer Handcrafted Furniture",
      "Private Patio"
    ],
    roomTypes: [
      {
        name: "Deluxe Room",
        price: 65,
        capacity: 2,
        description: "Elegant room with garden views and handcrafted decor.",
        available: 6
      },
      {
        name: "Suite",
        price: 95,
        capacity: 3,
        description: "Spacious suite with separate lounge and pool views.",
        available: 3
      }
    ],
    checkIn: "14:00",
    checkOut: "12:00",
    policies: [
      "No smoking in rooms",
      "Quiet hours after 22:00",
      "Cancellation must be made 24 hours before check-in"
    ],
    contact: {
      hotline: "+855 63 765 666",
      facebook: "https://facebook.com/RITHYRINEAngkorResidence",
      tiktok: "https://tiktok.com/@RithyRineAngkor",
      instagram: "https://instagram.com/RithyRineAngkor"
    }
  },
  {
    id: 33,
    name: "Lub d Experience",
    type: "Boutique",
    stars: 4,
    location: "Siem Reap",
    address: "Wat Bo Road, Krong Siem Reap, Cambodia",
    price: 50,
    reviewer: 185,
    rating: 4.4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9YDh8rp59ONFESEXb-gKtSDrOyEFfyA5mfBFOtckUww&s=10",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhk5sdqMjsX-sbDSuxmUjXVjEBhjfYZDaKfr5yBFXENQ&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQACihcdhAqbypRRYeLfciK1eAMuMrozwyT0Uo8XNM88g&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR83YrxFMpTzS72QxKbsO7nieer4zeOFpFzV7McfsgGQw&s=10"
    ],
    description:
      "Lub d Experience blends the energy of a hostel with the comfort of a boutique hotel. Steps from the night markets, it features a vibrant pool, social bar, and design-forward rooms beloved by young travelers.",
    facilities: [
      "Swimming Pool",
      "Pool Bar",
      "Restaurant",
      "Common Lounge",
      "Social Events",
      "Free Wi-Fi"
    ],
    services: [
      "Tour Booking",
      "Bicycle Rental",
      "Tuk-tuk Service",
      "Laundry",
      "Airport Shuttle"
    ],
    furniture: [
      "Queen Bed",
      "Air Conditioning",
      "Flat-screen TV",
      "Lockers",
      "Reading Lamp"
    ],
    roomTypes: [
      {
        name: "Standard Room",
        price: 50,
        capacity: 2,
        description: "Stylish compact room with modern amenities.",
        available: 8
      },
      {
        name: "Deluxe Pool View",
        price: 70,
        capacity: 2,
        description: "Room overlooking the pool with a private balcony.",
        available: 5
      },
      {
        name: "Family Room",
        price: 110,
        capacity: 5,
        description: "Large room with bunk beds and a queen bed for groups.",
        available: 3
      }
    ],
    checkIn: "14:00",
    checkOut: "12:00",
    policies: [
      "No smoking in rooms",
      "Quiet hours after 23:00",
      "Cancellation must be made 24 hours before check-in"
    ],
    contact: {
      hotline: "+855 63 762 345",
      facebook: "https://facebook.com/LubdExperience",
      tiktok: "https://tiktok.com/@LubdExperience",
      instagram: "https://instagram.com/LubdExperience"
    }
  },
  {
    id: 34,
    name: "Hotel Atelier Siem Reap",
    type: "Boutique",
    stars: 4,
    location: "Siem Reap",
    address: "Sok San Road, Svay Dangkum, Siem Reap, Cambodia",
    price: 70,
    reviewer: 120,
    rating: 4.6,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTn8ISqWb1wAPeKfj_NqUCd9NL_GfS9vsZNOFtnbnd-Q&s=10",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmMDuHYPf-oz1lOvE4eQ4wgjfCBAcj-vBO_SW5L9Itow&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLDMMENfBcmGUDm3rWqe_jSQ04rpbaIWwGZImdMf-CLA&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvf7jk1nssx5sIH4Jb7FMAyuhSi8ujYEm4RBSHcI3s6A&s=10"
    ],
    description:
      "Hotel Atelier Siem Reap is a design-led boutique hotel celebrating the art and craft of Cambodia. Curated artworks, a serene pool courtyard, and creative Khmer dining make it a gallery-like escape in the city center.",
    facilities: [
      "Swimming Pool",
      "Art Gallery",
      "Restaurant",
      "Rooftop Bar",
      "Free Wi-Fi",
      "Garden"
    ],
    services: [
      "Airport Pickup",
      "Art Workshops",
      "Temple Shuttle",
      "Laundry",
      "Breakfast Included"
    ],
    furniture: [
      "King Bed",
      "Air Conditioning",
      "Flat-screen TV",
      "Mini Bar",
      "Designer Lighting",
      "Balcony"
    ],
    roomTypes: [
      {
        name: "Studio Room",
        price: 70,
        capacity: 2,
        description: "Design-forward room with courtyard views.",
        available: 7
      },
      {
        name: "Artwork Suite",
        price: 105,
        capacity: 2,
        description: "Suite featuring curated artwork and private terrace.",
        available: 4
      },
      {
        name: "Rooftop Villa",
        price: 145,
        capacity: 3,
        description: "Private rooftop residence with panoramic city views.",
        available: 2
      }
    ],
    checkIn: "14:00",
    checkOut: "12:00",
    policies: [
      "No smoking in rooms",
      "Quiet hours after 22:00",
      "Cancellation must be made 24 hours before check-in"
    ],
    contact: {
      hotline: "+855 63 765 789",
      facebook: "https://facebook.com/HotelAtelierSiemReap",
      tiktok: "https://tiktok.com/@HotelAtelierSiemReap",
      instagram: "https://instagram.com/HotelAtelierSiemReap"
    }
  },
  {
    id: 35,
    name: "Bronam Residence & Spa",
    type: "Boutique",
    stars: 5,
    location: "Siem Reap",
    address: "Near Angkor Night Market, Krong Siem Reap, Cambodia",
    price: 120,
    reviewer: 155,
    rating: 4.8,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjnQe9Dbn0PmuABXW9EkG6BHnPxC5aoVgBzw9Fc0gbYg&s=10",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAmQANu2oDN2lLj19XPOTNtkGbg2F4CBWndWY9P6F6wQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQnXmy0vAcoIJM7h-otJ0VZmtl5Ft_yM-CywgDDum4Ug&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqbDWRzGdCxCamLWjXuMm1FWPQwnQZwxTeoP272auUxA&s=10"
    ],
    description:
      "Bronam Residence & Spa is an intimate five-star hideaway defined by Khmer-inspired architecture and rejuvenating spa rituals. Every residence is a serene retreat, steps from the Angkor Night Market and steps away from total calm.",
    facilities: [
      "Spa & Sauna",
      "Swimming Pool",
      "Fine Dining Restaurant",
      "Rooftop Bar",
      "Wellness Center",
      "Free Wi-Fi",
      "Concierge"
    ],
    services: [
      "Spa Packages",
      "Butler Service",
      "Airport Pickup",
      "Temple Shuttle",
      "Breakfast Included"
    ],
    furniture: [
      "King Bed",
      "Air Conditioning",
      "Smart TV",
      "Mini Bar",
      "Safety Deposit Box",
      "Jacuzzi Tub",
      "Private Terrace"
    ],
    roomTypes: [
      {
        name: "Deluxe Residence",
        price: 120,
        capacity: 2,
        description: "Elegant residence with spa bath and garden views.",
        available: 6
      },
      {
        name: "Spa Suite",
        price: 165,
        capacity: 2,
        description: "Suite with in-room treatment area and relaxing tub.",
        available: 4
      },
      {
        name: "Royal Villa",
        price: 260,
        capacity: 4,
        description: "Detached villa with private plunge pool and butler.",
        available: 2
      }
    ],
    checkIn: "14:00",
    checkOut: "12:00",
    policies: [
      "Adults only (16+)",
      "No smoking in rooms",
      "Spa appointments recommended in advance",
      "Cancellation must be made 48 hours before check-in"
    ],
    contact: {
      hotline: "+855 63 968 222",
      facebook: "https://facebook.com/BronamResidenceSpa",
      tiktok: "https://tiktok.com/@BronamResidenceSpa",
      instagram: "https://instagram.com/BronamResidenceSpa"
    }
  },
  {
    id: 36,
    name: "Twizt.hotel",
    type: "Boutique",
    stars: 3,
    location: "Siem Reap",
    address: "Taphul Road, Svay Dangkum, Siem Reap, Cambodia",
    price: 40,
    reviewer: 90,
    rating: 4.3,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStZVs8PGM9NW5UCS0Z5EdYNAwVheImkkjl0jzCIe17vA&s=10",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvZhyWoOr_Ess8FGxkZSeejMQHtyeZfK_PQz4RnulLKg&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX1qyHK7L0xPLnE4iz_4Dgn0kTUB49CASfLDZXXDSVfw&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkgH7QcV8b3X5nXgdv94rmvG6IyWvUEGgWaaLkAWaLxw&s=10"
    ],
    description:
      "Twizt.hotel brings playful, quirky design to budget-friendly stays in Siem Reap. Colorful rooms, a lively rooftop bar, and a friendly social atmosphere make it a favorite for budget-conscious travelers who love style.",
    facilities: [
      "Rooftop Bar",
      "Restaurant",
      "Free Wi-Fi",
      "Common Lounge",
      "Rooftop Pool",
      "Air Conditioning"
    ],
    services: [
      "Tour Desk",
      "Bicycle Rental",
      "Laundry",
      "Airport Shuttle"
    ],
    furniture: [
      "Queen Bed",
      "Air Conditioning",
      "Flat-screen TV",
      "Colorful Decor",
      "Lockers"
    ],
    roomTypes: [
      {
        name: "Standard Room",
        price: 40,
        capacity: 2,
        description: "Quirky compact room with colorful art and city views.",
        available: 8
      },
      {
        name: "Superior Room",
        price: 58,
        capacity: 2,
        description: "Larger room with seating area and rooftop view.",
        available: 5
      }
    ],
    checkIn: "14:00",
    checkOut: "12:00",
    policies: [
      "No smoking in rooms",
      "Quiet hours after 23:00",
      "Cancellation must be made 24 hours before check-in"
    ],
    contact: {
      hotline: "+855 12 770 050",
      facebook: "https://facebook.com/TwiztHotel",
      tiktok: "https://tiktok.com/@TwiztHotel",
      instagram: "https://instagram.com/TwiztHotel"
    }
  },
  {
    id: 37,
    name: "The Palace Indochine Hotel",
    type: "Hotel",
    stars: 5,
    location: "Siem Reap",
    address: "National Road No. 6, Phum Krouk, Siem Reap, Cambodia",
    price: 135,
    reviewer: 175,
    rating: 4.9,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPm2ITckZdxmlQ1mz8adwdZrR8vk8L6BHk-nvCdnIJvQ&s=10",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRohZ5-EFZtfflyvk6YtKf5zvWrVxjgepMhLSSnjbIy1A&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjYI6jbLa2M5ZsekBb8P3k8SjeRwgeayExexR9mAaMcA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK3XWCsNkqOjb35M1hA2URixiDQfgUB1UloAwo9SkNDQ&s=10"
    ],
    description:
      "The Palace Indochine Hotel is a majestic colonial-era palace reimagined as a luxurious five-star hotel. Gilded interiors, sweeping gardens, an ornate pool, and regal service capture the grandeur of classic Indochine.",
    facilities: [
      "Ornate Pool",
      "Grand Restaurant",
      "Bar",
      "Spa",
      "Ballroom",
      "Fitness Center",
      "Free Wi-Fi",
      "24-hour Concierge"
    ],
    services: [
      "Butler Service",
      "Airport Pickup",
      "Limousine Service",
      "Temple Tours",
      "Breakfast Included"
    ],
    furniture: [
      "King Bed",
      "Air Conditioning",
      "Flat-screen TV",
      "Mini Bar",
      "Safety Deposit Box",
      "Antique Furniture",
      "Bathtub"
    ],
    roomTypes: [
      {
        name: "Colonial Room",
        price: 135,
        capacity: 2,
        description: "Heritage room with colonial decor and garden views.",
        available: 10
      },
      {
        name: "Regal Suite",
        price: 210,
        capacity: 2,
        description: "Suite with separate living area and ornate furnishings.",
        available: 5
      },
      {
        name: "Presidential Palace Suite",
        price: 380,
        capacity: 4,
        description: "Grand suite with dining room, private terrace, and butler.",
        available: 1
      }
    ],
    checkIn: "14:00",
    checkOut: "12:00",
    policies: [
      "No smoking in rooms",
      "Elegant attire recommended in dining areas",
      "Cancellation must be made 48 hours before check-in",
      "Valid ID required at check-in"
    ],
    contact: {
      hotline: "+855 63 969 999",
      facebook: "https://facebook.com/ThePalaceIndochineHotel",
      tiktok: "https://tiktok.com/@PalaceIndochine",
      instagram: "https://instagram.com/PalaceIndochine"
    }
  },
  {
    id: 38,
    name: "Mohasal Angkor Boutique",
    type: "Boutique",
    stars: 4,
    location: "Siem Reap",
    address: "Pokambor Avenue, Krong Siem Reap, Cambodia",
    price: 75,
    reviewer: 105,
    rating: 4.6,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6nDHiNixgQdGxIsQvGe3-gh5XJ4OeFNkPFCxqo52sSA&s",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7bLsuyqMWe4r4GzDVBLo3oBGzYTnE6rdQ4LLeO1EjJg&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoTrr35JzO5uc3IpBF26ne-vzANL5X04f6iRREuBDL2Q&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoHCw3OBgwAh3_JgQG7ept06RklVkkU_eREVwh9MM--g&s=10"
    ],
    description:
      "Mohasal Angkor Boutique is a serene boutique retreat with a distinctive canopy pool, lush gardens, and a spa. Its intimate scale and personal service create a peaceful base on the edge of Siem Reap's vibrant center.",
    facilities: [
      "Canopy Pool",
      "Spa",
      "Restaurant",
      "Garden",
      "Bar",
      "Free Wi-Fi"
    ],
    services: [
      "Airport Pickup",
      "Tuk-tuk Service",
      "Temple Shuttle",
      "Laundry",
      "Breakfast Included"
    ],
    furniture: [
      "King Bed",
      "Air Conditioning",
      "Flat-screen TV",
      "Mini Bar",
      "Safety Deposit Box",
      "Private Terrace"
    ],
    roomTypes: [
      {
        name: "Deluxe Room",
        price: 75,
        capacity: 2,
        description: "Comfortable room with pool or garden views.",
        available: 7
      },
      {
        name: "Villa",
        price: 115,
        capacity: 2,
        description: "Standalone villa with private terrace and outdoor tub.",
        available: 4
      },
      {
        name: "Family Suite",
        price: 150,
        capacity: 4,
        description: "Spacious suite with two bedrooms and a shared lounge.",
        available: 2
      }
    ],
    checkIn: "14:00",
    checkOut: "12:00",
    policies: [
      "No smoking in rooms",
      "Quiet hours after 22:00",
      "Cancellation must be made 24 hours before check-in"
    ],
    contact: {
      hotline: "+855 63 763 333",
      facebook: "https://facebook.com/MohasalAngkorBoutique",
      tiktok: "https://tiktok.com/@MohasalAngkor",
      instagram: "https://instagram.com/MohasalAngkor"
    }
  },
  {
    id: 39,
    name: "Angkor Channary Hotel",
    type: "Hotel",
    stars: 4,
    location: "Siem Reap",
    address: "Wat Bo Village, Salakamreuk, Siem Reap, Cambodia",
    price: 60,
    reviewer: 140,
    rating: 4.5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhFNfDW41SyXGRKgRAyFihMC_pBW8NfdRalpJPFfZBFw&s",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNV-YWLNbKIF7Y9iuhNIXyMdXE2xRZnDFhBJqos7Vf1Q&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8nj3nB9fFcTe-jRMZETjl_qv4sBatLF4-IvchQ9Pbyg&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcNGhkKw6Yy0VSds0Y4GbLdMy7BZpjUyWnaNTY71CtbA&s"
    ],
    description:
      "Angkor Channary Hotel combines friendly Khmer hospitality with comfortable, well-appointed rooms near Wat Bo. A refreshing pool, Khmer restaurant, and easy access to the temples make it a dependable city favorite.",
    facilities: [
      "Swimming Pool",
      "Restaurant",
      "Bar",
      "Garden",
      "Free Wi-Fi",
      "Parking"
    ],
    services: [
      "Airport Pickup",
      "Tour Desk",
      "Room Service",
      "Laundry",
      "Breakfast Included"
    ],
    furniture: [
      "King Bed",
      "Air Conditioning",
      "Flat-screen TV",
      "Work Desk",
      "Safety Deposit Box",
      "Wardrobe"
    ],
    roomTypes: [
      {
        name: "Standard Room",
        price: 60,
        capacity: 2,
        description: "Comfortable room with garden views and modern amenities.",
        available: 8
      },
      {
        name: "Superior Room",
        price: 78,
        capacity: 2,
        description: "Larger room with pool views and seating area.",
        available: 6
      },
      {
        name: "Family Room",
        price: 115,
        capacity: 4,
        description: "Room with two double beds and extra space for families.",
        available: 3
      }
    ],
    checkIn: "14:00",
    checkOut: "12:00",
    policies: [
      "No smoking in rooms",
      "Cancellation must be made 24 hours before check-in",
      "Valid ID required at check-in"
    ],
    contact: {
      hotline: "+855 63 966 700",
      facebook: "https://facebook.com/AngkorChannaryHotel",
      tiktok: "https://tiktok.com/@AngkorChannaryHotel",
      instagram: "https://instagram.com/AngkorChannaryHotel"
    }
  },
  {
    id: 40,
    name: "Asanak D'Angkor Boutique",
    type: "Boutique",
    stars: 4,
    location: "Siem Reap",
    address: "Sok San Road, Group 10, Krong Siem Reap, Cambodia",
    price: 55,
    reviewer: 110,
    rating: 4.4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4UDxaRvRNQxMYETYtjEs-ZUXB2fnR-kG7Oab2nshp0Q&s=10",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWHVKNXn17q789ufE8wHJN7--ZB5ouWVKmgeEPJC0avQ&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdVrKarxegzdtyUJTqsc2o1mH5KECs7X9tXpA3fp43bQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL7_DSMf48i9S80hBMsB7YWcYd3CeQYoln61QycbYYpA&s=10"
    ],
    description:
      "Asanak D'Angkor Boutique is a tranquil hideaway blending rustic Khmer design with modern comfort. Wooden accents, a leafy pool area, and heartfelt hospitality offer an authentic Angkor experience at a friendly price.",
    facilities: [
      "Swimming Pool",
      "Restaurant",
      "Garden",
      "Free Wi-Fi",
      "Terrace",
      "Spa"
    ],
    services: [
      "Airport Pickup",
      "Bicycle Rental",
      "Temple Shuttle",
      "Laundry",
      "Breakfast Included"
    ],
    furniture: [
      "King Bed",
      "Air Conditioning",
      "Flat-screen TV",
      "Wooden Furniture",
      "Wardrobe",
      "Balcony"
    ],
    roomTypes: [
      {
        name: "Deluxe Room",
        price: 55,
        capacity: 2,
        description: "Wood-accented room with garden views and modern amenities.",
        available: 7
      },
      {
        name: "Suite",
        price: 82,
        capacity: 3,
        description: "Spacious suite with separate lounge and pool terrace.",
        available: 4
      }
    ],
    checkIn: "14:00",
    checkOut: "12:00",
    policies: [
      "No smoking in rooms",
      "Quiet hours after 22:00",
      "Cancellation must be made 24 hours before check-in"
    ],
    contact: {
      hotline: "+855 63 765 202",
      facebook: "https://facebook.com/AsanakDAngkorBoutique",
      tiktok: "https://tiktok.com/@AsanakDAngkor",
      instagram: "https://instagram.com/AsanakDAngkor"
    }
  }

]