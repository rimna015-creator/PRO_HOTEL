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
    image: "/images/hotel2.jpg",
    gallery: [
      "/images/hotel2.jpg",
      "/images/hotel2-room.jpg",
      ""
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
    type: "Homestay",
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
    image: "/images/hotel4.jpg",
    gallery: [
      "/images/hotel4.jpg",
      "/images/hotel4-pool.jpg",
      "/images/hotel4-room.jpg"
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
    type: "Hotel + Motor Rental",
    stars: 3,
    location: "Siem Reap",
    address: "Taphul Village, Svay Dangkum, Siem Reap, Cambodia",
    price: 35,
    reviewer: 41,
    rating: 4.4,
    image: "/images/hotel5.jpg",
    gallery: [
      "/images/hotel5.jpg",
      "/images/hotel5-motor.jpg",
      "/images/hotel5-room.jpg"
    ],
    description:
      "Angkor Motor Villa is a budget-friendly hotel that combines comfortable rooms with an on-site motorbike rental service. Perfect for adventurous travelers, rent a bike at reception and ride straight to the Angkor temples at your own pace.",
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
  }
]
