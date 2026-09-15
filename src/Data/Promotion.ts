export interface Promotion {
  id: number
  hotelId: number
  hotelName: string
  festival: string
  title: string
  description: string
  normalPrice: number
  packagePrice: number
  discount: number
  availableFrom: string
  availableTo: string
  durationNights: number
  includes: string[]
  image: string
  location: string
}

export const promotions: Promotion[] = [
  {
    id: 1,
    hotelId: 1,
    hotelName: "Angkor Paradise Hotel",
    festival: "Khmer New Year",
    title: "Angkor New Year Celebration Package",
    description:
      "Ring in the Khmer New Year with a festive stay filled with traditional dance shows, street concerts and a special blessing ceremony — right in the heart of Siem Reap.",
    normalPrice: 80,
    packagePrice: 60,
    discount: 25,
    availableFrom: "2026-04-13",
    availableTo: "2026-04-16",
    durationNights: 4,
    includes: [
      "Daily breakfast",
      "Traditional Khmer dinner",
      "Free temple shuttle",
      "Airport pickup"
    ],
    image: "https://www.cambotours.com/userfiles/hotels/angkor-paradise-hotel.jpg",
    location: "Siem Reap"
  },
  {
    id: 2,
    hotelId: 4,
    hotelName: "Sokha Angkor Resort",
    festival: "Water Festival",
    title: "Bon Om Touk River Festival Package",
    description:
      "Witness the spectacular Water Festival boat races on the Tonle Sap while enjoying a luxurious resort stay. Includes exclusive riverside viewing seats for the whole family.",
    normalPrice: 120,
    packagePrice: 90,
    discount: 25,
    availableFrom: "2026-11-13",
    availableTo: "2026-11-16",
    durationNights: 4,
    includes: [
      "Breakfast buffet",
      "Boat cruise ticket",
      "Pool & spa access",
      "Welcome drink"
    ],
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/795373876.jpg?k=64bd4f9ec523d50e4eed77928a11ea1b9ecd6691558c65c17845ea9e945445f0&o=",
    location: "Siem Reap"
  },
  {
    id: 4,
    hotelId: 5,
    hotelName: "Park Hyatt Siem Reap",
    festival: "New Year Eve",
    title: "Countdown Gala & Tour Package",
    description:
      "Celebrate the New Year with a dazzling gala dinner, live music and fireworks. Spend your days exploring the temples with our next-day sunset tour included.",
    normalPrice: 35,
    packagePrice: 26,
    discount: 26,
    availableFrom: "2026-12-30",
    availableTo: "2027-01-02",
    durationNights: 4,
    includes: [
      "Gala dinner",
      "Sunset temple tour",
      "Motor rental",
      "Late checkout"
    ],
    image: "https://media.privateupgrades.com/_data/default-hotel_image/11/58709/park-hyatt-siem-reap-20_1400x1400_auto.jpg",
    
    location: "Siem Reap"
  },
  {
    id: 5,
    hotelId: 2,
    hotelName: "Siem Reap Boutique Villa",
    festival: "Lunar New Year",
    title: "Double Dragon Festival Package",
    description:
      "Celebrate Lunar New Year with a boutique villa escape. Enjoy dragon dance performances, festive red pockets and a relaxing spa session after a day of city exploring.",
    normalPrice: 45,
    packagePrice: 34,
    discount: 24,
    availableFrom: "2026-02-15",
    availableTo: "2026-02-18",
    durationNights: 4,
    includes: [
      "Breakfast",
      "Motorbike rental",
      "Spa session",
      "Festive gift set"
    ],
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/13/49/f9/hotel-building-view-at.jpg?w=900&h=500&s=1",
    location: "Siem Reap"
  },
  {
    id: 6,
    hotelId: 6,
    hotelName: "Siem Reap Boutique Villa",
    festival: "International New Year",
    title: "New Year City Tour Package",
    description:
      "Welcome the new year in style with a guided city tour, rooftop party access and a relaxing getaway at our elegant boutique villa — perfect for couples.",
    normalPrice: 65,
    packagePrice: 49,
    discount: 25,
    availableFrom: "2027-01-01",
    availableTo: "2027-01-03",
    durationNights: 3,
    includes: [
      "Breakfast",
      "Guided city tour",
      "Rooftop party pass",
      "Couple's photo shoot"
    ],
    image: "https://static1.squarespace.com/static/6507f8aa7fb46b61d600fac9/t/6a4cc8fbf82e7b141144414b/1783417083437/2rb--50.jpg?format=1500w",
    location: "Siem Reap"
  }
]