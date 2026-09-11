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
    id: 3,
    name: "Happy Family Homestay",
    type: "Hotel + Motor Rental",
    stars: 3,
    location: "Siem Reap",
    address: "Wat Bo Road, Siem Reap, Cambodia",
    price: 25,
    reviewer: 54,
    rating: 4.5,
    image: "/images/hotel3.jpg",
    gallery: [
      "/images/hotel3.jpg",
      "/images/hotel3-room.jpg"
    ],
    description:
      "A warm and welcoming family-run homestay offering an authentic Cambodian experience. Enjoy home-cooked meals, friendly hosts, and a peaceful atmosphere in a local neighborhood.",
    facilities: [
      "Free Wi-Fi",
      "Parking",
      "Shared Kitchen",
      "Garden"
    ],
    services: [
      "Motorbike Rental",
      "Home-cooked Meals",
      "Laundry"
    ],
    roomTypes: [
      {
        name: "Standard Room",
        price: 25,
        capacity: 2,
        description: "Simple and clean room with fan and shared bathroom.",
        available: 6
      },
      {
        name: "Family Room",
        price: 40,
        capacity: 4,
        description: "Large room with private bathroom and extra beds for families.",
        available: 2
      }
    ],
    checkIn: "13:00",
    checkOut: "11:00",
    policies: [
      "No smoking inside rooms",
      "Shoes off at the entrance",
      "Meals available on request"
    ],
    contact: {
      hotline: "+855 12 555 789",
      facebook: "https://facebook.com/HappyFamilyHomestay",
      tiktok: "https://tiktok.com/@HappyFamilyHomestay",
      instagram: "https://instagram.com/HappyFamilyHomestay"
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
    name: "Angkor Motor Villa",
    type: "Hotel",
    stars: 5,
    location: "Siem Reap",
    address: "Taphul Village, Svay Dangkum, Siem Reap, Cambodia",
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
      "Discover Angkor’s wonders in a three-temple adventure with Park Hyatt Siem Reap. Explore Angkor Wat’s grandeur, Bayon’s iconic stone faces and Ta Prohm’s jungle embrace in a journey through history, culture and timeless beauty.",
    facilities: [
      "Free Wi-Fi",
      "Parking",
      "Motorbike Parking",
      "Restaurant",
      "Garden"
    ],
    services: [
      "Motorbike Rental",
      "Bicycle Rental",
      "Self-drive Tours",
      "Laundry",
      "Airport Shuttle"
    ],
    roomTypes: [
      {
        name: "Standard Room",
        price: 35,
        capacity: 2,
        description: "Compact room with air conditioning, fan, and shared terrace.",
        available: 5
      },
      {
        name: "Villa Room",
        price: 55,
        capacity: 3,
        description: "Spacious room with private bathroom, balcony, and river view.",
        available: 3
      }
    ],
    checkIn: "14:00",
    checkOut: "11:00",
    policies: [
      "No smoking in rooms",
      "Motorbike rental requires valid driver's license",
      "Helmets provided with every rental",
      "Cancellation must be made 24 hours before check-in"
    ],
    contact: {
      hotline: "+855 12 777 333",
      facebook: "https://facebook.com/AngkorMotorVilla",
      tiktok: "https://tiktok.com/@AngkorMotorVilla",
      instagram: "https://instagram.com/AngkorMotorVilla"
    }
  },
    {
    id: 6,
    name: "Siem Reap Boutique Villa",
    type: "Boutique",
    stars: 4,
    location: "Siem Reap",
    address: "Charles de Gaulle Boulevard, Siem Reap, Cambodia",
    price: 45,
    reviewer: 25,
    rating: 4.6,
    image: "https://static1.squarespace.com/static/6507f8aa7fb46b61d600fac9/t/6a4cc8fbf82e7b141144414b/1783417083437/2rb--50.jpg?format=1500w",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTus_8WPcfSJiy1_FHJ6p8TL6Ja1wnYW2K7wUdY_WokQg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGjWX1VHDulE44uKxAH8MWPzsoyYrbt06DI2BSgyj87Q&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA4SQ37bG2aKqovY_GwAXBW3_AP8dLXBDCGlLCotjaLA&s"
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
    id: 7,
    name: "Tara Angkor Hotel",
    type: "Hotel",
    stars: 5,
    location: "Siem Reap",
    address: "National Road No. 6, Sok San Village, Siem Reap, Cambodia",
    price: 85,
    reviewer: 120,
    rating: 4.6,
    image: "https://picsum.photos/seed/angkorbc-hotel7/900/600",
    gallery: [
      "https://picsum.photos/seed/angkorbc-hotel7-a/900/600",
      "https://picsum.photos/seed/angkorbc-hotel7-b/900/600",
      "https://picsum.photos/seed/angkorbc-hotel7-c/900/600"
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
    image: "https://picsum.photos/seed/angkorbc-hotel8/900/600",
    gallery: [
      "https://picsum.photos/seed/angkorbc-hotel8-a/900/600",
      "https://picsum.photos/seed/angkorbc-hotel8-b/900/600",
      "https://picsum.photos/seed/angkorbc-hotel8-c/900/600"
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
    image: "https://picsum.photos/seed/angkorbc-hotel9/900/600",
    gallery: [
      "https://picsum.photos/seed/angkorbc-hotel9-a/900/600",
      "https://picsum.photos/seed/angkorbc-hotel9-b/900/600",
      "https://picsum.photos/seed/angkorbc-hotel9-c/900/600"
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
    id: 10,
    name: "Ivy Garden Guesthouse",
    type: "Guesthouse",
    stars: 3,
    location: "Siem Reap",
    address: "Wat Bo Road, Salakamreuk, Siem Reap, Cambodia",
    price: 18,
    reviewer: 95,
    rating: 4.4,
    image: "https://picsum.photos/seed/angkorbc-hotel10/900/600",
    gallery: [
      "https://picsum.photos/seed/angkorbc-hotel10-a/900/600",
      "https://picsum.photos/seed/angkorbc-hotel10-b/900/600",
      "https://picsum.photos/seed/angkorbc-hotel10-c/900/600"
    ],
    description:
      "A cozy backstreet guesthouse drenched in greenery, where budget travelers find a friendly vibe, hearty Khmer breakfasts, and comfortable rooms just minutes from the Old Market.",
    facilities: [
      "Free Wi-Fi",
      "Garden",
      "Shared Kitchen",
      "Rooftop Terrace",
      "Book Exchange"
    ],
    services: [
      "Bicycle Rental",
      "Laundry",
      "Tour Booking",
      "Breakfast Included"
    ],
    roomTypes: [
      {
        name: "Dormitory Bed",
        price: 18,
        capacity: 1,
        description: "Shared dorm bed with personal locker and reading light.",
        available: 8
      },
      {
        name: "Private Double",
        price: 30,
        capacity: 2,
        description: "Private room with fan, en-suite bathroom, and garden view.",
        available: 4
      }
    ],
    checkIn: "13:00",
    checkOut: "11:00",
    policies: [
      "No smoking inside rooms",
      "Shoes off in common areas",
      "Reception closed after 23:00"
    ],
    contact: {
      hotline: "+855 12 348 222",
      facebook: "https://facebook.com/IvyGardenGuesthouse",
      tiktok: "https://tiktok.com/@IvyGardenGuesthouse",
      instagram: "https://instagram.com/IvyGardenGuesthouse"
    }
  },
  {
    id: 11,
    name: "The Blue Mango Resort",
    type: "Resort",
    stars: 5,
    location: "Siem Reap",
    address: "Pokambor Avenue, Krong Siem Reap, Cambodia",
    price: 130,
    reviewer: 300,
    rating: 4.6,
    image: "https://picsum.photos/seed/angkorbc-hotel11/900/600",
    gallery: [
      "https://picsum.photos/seed/angkorbc-hotel11-a/900/600",
      "https://picsum.photos/seed/angkorbc-hotel11-b/900/600",
      "https://picsum.photos/seed/angkorbc-hotel11-c/900/600"
    ],
    description:
      "An expansive five-star resort featuring multiple lagoons, lush landscaped grounds, and a golf course at its doorstep. The Blue Mango offers families and couples a complete luxury retreat.",
    facilities: [
      "Swimming Pool",
      "Lagoon",
      "Golf Course Access",
      "Spa",
      "Restaurant",
      "Pool Bar",
      "Fitness Center",
      "Kids Club",
      "Free Wi-Fi"
    ],
    services: [
      "Airport Pickup",
      "Golf Car Rental",
      "Tour Guide",
      "Laundry",
      "Breakfast Included"
    ],
    roomTypes: [
      {
        name: "Deluxe Room",
        price: 130,
        capacity: 2,
        description: "Modern room with pool views, king bed, and smart TV.",
        available: 10
      },
      {
        name: "Lagoon View Villa",
        price: 220,
        capacity: 2,
        description: "Private villa overlooking a lagoon with outdoor shower.",
        available: 5
      },
      {
        name: "Royal Suite",
        price: 380,
        capacity: 4,
        description: "Grand suite with dining area, private pool, and butler service.",
        available: 2
      }
    ],
    checkIn: "14:00",
    checkOut: "12:00",
    policies: [
      "No smoking in rooms",
      "Cancellation must be made 48 hours before check-in",
      "Golf attire required on course",
      "Valid ID required at check-in"
    ],
    contact: {
      hotline: "+855 63 766 888",
      facebook: "https://facebook.com/TheBlueMangoResort",
      tiktok: "https://tiktok.com/@TheBlueMangoResort",
      instagram: "https://instagram.com/TheBlueMangoResort"
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
    image: "https://picsum.photos/seed/angkorbc-hotel12/900/600",
    gallery: [
      "https://picsum.photos/seed/angkorbc-hotel12-a/900/600",
      "https://picsum.photos/seed/angkorbc-hotel12-b/900/600",
      "https://picsum.photos/seed/angkorbc-hotel12-c/900/600"
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
    image: "https://picsum.photos/seed/angkorbc-hotel13/900/600",
    gallery: [
      "https://picsum.photos/seed/angkorbc-hotel13-a/900/600",
      "https://picsum.photos/seed/angkorbc-hotel13-b/900/600",
      "https://picsum.photos/seed/angkorbc-hotel13-c/900/600"
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
    id: 14,
    name: "Nhok Thom Thom Homestay",
    type: "Homestay",
    stars: 2,
    location: "Siem Reap",
    address: "Village 4, Monourom, Siem Reap, Cambodia",
    price: 12,
    reviewer: 58,
    rating: 4.2,
    image: "https://picsum.photos/seed/angkorbc-hotel14/900/600",
    gallery: [
      "https://picsum.photos/seed/angkorbc-hotel14-a/900/600",
      "https://picsum.photos/seed/angkorbc-hotel14-b/900/600",
      "https://picsum.photos/seed/angkorbc-hotel14-c/900/600"
    ],
    description:
      "A true Khmer village homestay where guests share meals and daily life with a local family. Rice-field views, warm hospitality, and incredible home cooking create an unforgettable cultural experience.",
    facilities: [
      "Free Wi-Fi",
      "Shared Bathroom",
      "Garden",
      "Hammocks",
      "Home Dining"
    ],
    services: [
      "Home-cooked Meals",
      "Village Walking Tour",
      "Bicycle Rental",
      "Laundry"
    ],
    roomTypes: [
      {
        name: "Traditional Room",
        price: 12,
        capacity: 2,
        description: "Simple wooden room with mattress, mosquito net, and fan.",
        available: 4
      },
      {
        name: "Family Room",
        price: 22,
        capacity: 4,
        description: "Large room with private bathroom and veranda.",
        available: 2
      }
    ],
    checkIn: "12:00",
    checkOut: "11:00",
    policies: [
      "No smoking inside rooms",
      "Meals shared with host family",
      "Respect village quiet hours"
    ],
    contact: {
      hotline: "+855 12 656 900",
      facebook: "https://facebook.com/NhokThomThomHomestay",
      tiktok: "https://tiktok.com/@NhokThomThomHomestay",
      instagram: "https://instagram.com/NhokThomThomHomestay"
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
    image: "https://picsum.photos/seed/angkorbc-hotel15/900/600",
    gallery: [
      "https://picsum.photos/seed/angkorbc-hotel15-a/900/600",
      "https://picsum.photos/seed/angkorbc-hotel15-b/900/600",
      "https://picsum.photos/seed/angkorbc-hotel15-c/900/600"
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
    image: "https://picsum.photos/seed/angkorbc-hotel16/900/600",
    gallery: [
      "https://picsum.photos/seed/angkorbc-hotel16-a/900/600",
      "https://picsum.photos/seed/angkorbc-hotel16-b/900/600",
      "https://picsum.photos/seed/angkorbc-hotel16-c/900/600"
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
    stars: 5,
    location: "Siem Reap",
    address: "National Road No. 6, Krowob Village, Siem Reap, Cambodia",
    price: 78,
    reviewer: 150,
    rating: 4.5,
    image: "https://picsum.photos/seed/angkorbc-hotel17/900/600",
    gallery: [
      "https://picsum.photos/seed/angkorbc-hotel17-a/900/600",
      "https://picsum.photos/seed/angkorbc-hotel17-b/900/600",
      "https://picsum.photos/seed/angkorbc-hotel17-c/900/600"
    ],
    description:
      "Regency Angkor Hotel offers a refined stay with a grand lobby, shimmering pool, and attentive five-star service. Conveniently located on the main road, it's a perfect base for exploring Angkor Wat.",
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
    roomTypes: [
      {
        name: "Superior Room",
        price: 78,
        capacity: 2,
        description: "Elegant room with city views and premium amenities.",
        available: 8
      },
      {
        name: "Deluxe Room",
        price: 98,
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
    stars: 3,
    location: "Siem Reap",
    address: "Prah Sihanouk Avenue, Krong Siem Reap, Cambodia",
    price: 28,
    reviewer: 110,
    rating: 4.1,
    image: "https://picsum.photos/seed/angkorbc-hotel18/900/600",
    gallery: [
      "https://picsum.photos/seed/angkorbc-hotel18-a/900/600",
      "https://picsum.photos/seed/angkorbc-hotel18-b/900/600",
      "https://picsum.photos/seed/angkorbc-hotel18-c/900/600"
    ],
    description:
      "A practical, pockets-friendly hotel facing the Siem Reap river. Roof for sunset views, comfy beds, and a helpful staff that goes the extra mile — ideal for budget-conscious adventurers.",
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
    roomTypes: [
      {
        name: "Standard Room",
        price: 28,
        capacity: 2,
        description: "Simple room with A/C, hot shower, and river view.",
        available: 6
      },
      {
        name: "Family Room",
        price: 45,
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
    image: "https://picsum.photos/seed/angkorbc-hotel19/900/600",
    gallery: [
      "https://picsum.photos/seed/angkorbc-hotel19-a/900/600",
      "https://picsum.photos/seed/angkorbc-hotel19-b/900/600",
      "https://picsum.photos/seed/angkorbc-hotel19-c/900/600"
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
    id: 20,
    name: "Nature Tree Villas",
    type: "Villa",
    stars: 4,
    location: "Siem Reap",
    address: "Wat Damnak Village, Sala Kamroeuk, Siem Reap, Cambodia",
    price: 75,
    reviewer: 62,
    rating: 4.6,
    image: "https://picsum.photos/seed/angkorbc-hotel20/900/600",
    gallery: [
      "https://picsum.photos/seed/angkorbc-hotel20-a/900/600",
      "https://picsum.photos/seed/angkorbc-hotel20-b/900/600",
      "https://picsum.photos/seed/angkorbc-hotel20-c/900/600"
    ],
    description:
      "Nestled among towering trees and fish ponds, Nature Tree Villas offers wooden bungalows that blend perfectly with the jungle setting. Experience eco-luxury with outdoor showers and breakfast among the birds.",
    facilities: [
      "Tree-enclosed Garden",
      "Outdoor Pool",
      "Open-air Restaurant",
      "Free Wi-Fi",
      "Hammock Lounge",
      "Bicycle Parking"
    ],
    services: [
      "Breakfast in Villa",
      "Bicycle Rental",
      "Temple Shuttle",
      "Laundry"
    ],
    roomTypes: [
      {
        name: "Treehouse Villa",
        price: 75,
        capacity: 2,
        description: "Wooden villa raised among the trees with outdoor shower.",
        available: 4
      },
      {
        name: "Pond View Villa",
        price: 98,
        capacity: 2,
        description: "Villa overlooking the koi pond with private deck.",
        available: 3
      },
      {
        name: "Family Villa",
        price: 145,
        capacity: 4,
        description: "Spacious two-bedroom villa with jungle views.",
        available: 2
      }
    ],
    checkIn: "14:00",
    checkOut: "12:00",
    policies: [
      "No smoking in villas",
      "Respect the surrounding wildlife",
      "Mosquito repellent provided",
      "Cancellation must be made 24 hours before check-in"
    ],
    contact: {
      hotline: "+855 12 334 505",
      facebook: "https://facebook.com/NatureTreeVillas",
      tiktok: "https://tiktok.com/@NatureTreeVillas",
      instagram: "https://instagram.com/NatureTreeVillas"
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
    image: "https://picsum.photos/seed/angkorbc-hotel21/900/600",
    gallery: [
      "https://picsum.photos/seed/angkorbc-hotel21-a/900/600",
      "https://picsum.photos/seed/angkorbc-hotel21-b/900/600",
      "https://picsum.photos/seed/angkorbc-hotel21-c/900/600"
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
    name: "Sunset Grove Angkor Hotel",
    type: "Hotel",
    stars: 4,
    location: "Siem Reap",
    address: "Siem Reap River Road, Krong Siem Reap, Cambodia",
    price: 65,
    reviewer: 145,
    rating: 4.4,
    image: "https://picsum.photos/seed/angkorbc-hotel22/900/600",
    gallery: [
      "https://picsum.photos/seed/angkorbc-hotel22-a/900/600",
      "https://picsum.photos/seed/angkorbc-hotel22-b/900/600",
      "https://picsum.photos/seed/angkorbc-hotel22-c/900/600"
    ],
    description:
      "Famous for its riverside sunset views, Sunset Grove Angkor invites guests to watch the sky turn golden over the Siem Reap river. Comfortable rooms and a laid-back riverside bar round out the charm.",
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
    price: 105,
    reviewer: 220,
    rating: 4.6,
    image: "https://picsum.photos/seed/angkorbc-hotel23/900/600",
    gallery: [
      "https://picsum.photos/seed/angkorbc-hotel23-a/900/600",
      "https://picsum.photos/seed/angkorbc-hotel23-b/900/600",
      "https://picsum.photos/seed/angkorbc-hotel23-c/900/600"
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
    roomTypes: [
      {
        name: "Superior Room",
        price: 105,
        capacity: 2,
        description: "Comfortable room with garden views and premium bedding.",
        available: 10
      },
      {
        name: "Deluxe Garden Room",
        price: 125,
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
    type: "Villa",
    stars: 5,
    location: "Siem Reap",
    address: "Taphul Village, Svay Dangkum, Siem Reap, Cambodia",
    price: 130,
    reviewer: 190,
    rating: 4.8,
    image: "https://picsum.photos/seed/angkorbc-hotel24/900/600",
    gallery: [
      "https://picsum.photos/seed/angkorbc-hotel24-a/900/600",
      "https://picsum.photos/seed/angkorbc-hotel24-b/900/600",
      "https://picsum.photos/seed/angkorbc-hotel24-c/900/600"
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
    roomTypes: [
      {
        name: "Colonial Room",
        price: 130,
        capacity: 2,
        description: "Heritage-style room with four-poster bed and antiques.",
        available: 5
      },
      {
        name: "Executive Villa",
        price: 190,
        capacity: 2,
        description: "Villa wing with private lounge and garden courtyard.",
        available: 3
      },
      {
        name: "The Orient Suite",
        price: 280,
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
    id: 25,
    name: "Boutique Cambodia Villa",
    type: "Boutique",
    stars: 3,
    location: "Siem Reap",
    address: "Street 26, Wat Bo, Krong Siem Reap, Cambodia",
    price: 40,
    reviewer: 70,
    rating: 4.3,
    image: "https://picsum.photos/seed/angkorbc-hotel25/900/600",
    gallery: [
      "https://picsum.photos/seed/angkorbc-hotel25-a/900/600",
      "https://picsum.photos/seed/angkorbc-hotel25-b/900/600",
      "https://picsum.photos/seed/angkorbc-hotel25-c/900/600"
    ],
    description:
      "Colorful, artsy, and welcoming — Boutique Cambodia Villa celebrates local culture with hand-painted murals, a tiny plunge pool, and nightly Khmer cooking nights. Great value for creative travelers.",
    facilities: [
      "Plunge Pool",
      "Free Wi-Fi",
      "Art Gallery Wall",
      "Rooftop Terrace",
      "Communal Lounge"
    ],
    services: [
      "Cooking Classes",
      "Bicycle Rental",
      "Laundry",
      "Breakfast Included"
    ],
    roomTypes: [
      {
        name: "Mural Room",
        price: 40,
        capacity: 2,
        description: "Funky room with hand-painted murals and private bathroom.",
        available: 5
      },
      {
        name: "Terrace Room",
        price: 56,
        capacity: 2,
        description: "Room with access to a shared rooftop terrace.",
        available: 3
      }
    ],
    checkIn: "14:00",
    checkOut: "11:00",
    policies: [
      "No smoking inside rooms",
      "Cooking nights every Saturday",
      "Cancellation must be made 24 hours before check-in"
    ],
    contact: {
      hotline: "+855 12 761 333",
      facebook: "https://facebook.com/BoutiqueCambodiaVilla",
      tiktok: "https://tiktok.com/@BoutiqueCambodiaVilla",
      instagram: "https://instagram.com/BoutiqueCambodiaVilla"
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
    image: "https://picsum.photos/seed/angkorbc-hotel26/900/600",
    gallery: [
      "https://picsum.photos/seed/angkorbc-hotel26-a/900/600",
      "https://picsum.photos/seed/angkorbc-hotel26-b/900/600",
      "https://picsum.photos/seed/angkorbc-hotel26-c/900/600"
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

]