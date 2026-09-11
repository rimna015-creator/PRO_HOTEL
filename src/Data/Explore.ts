export interface Place {
  id: number
  name: string
  category: string
  description: string
  image: string
  rating: number
  openHours: string
  ticketPrice: string
  location: string
}

export const places: Place[] = [
  {
    id: 1,
    name: "Angkor Wat",
    category: "Temple",
    description:
      "The largest religious monument in the world, Angkor Wat is a UNESCO World Heritage Site and the crown jewel of the Khmer Empire. Built in the early 12th century, this magnificent temple complex features stunning bas-reliefs, towering spires, and a reflecting pool that mirrors its iconic silhouette at sunrise.",
    image: "/images/place1.jpg",
    rating: 4.9,
    openHours: "5:00 AM - 6:00 PM",
    ticketPrice: "$37 (1 day) / $62 (3 days) / $72 (7 days)",
    location: "Angkor Archaeological Park"
  },
  {
    id: 2,
    name: "Bayon Temple",
    category: "Temple",
    description:
      "Located at the center of Angkor Thom, Bayon Temple is famous for its massive stone faces — over 200 serene smiling faces gazing in every direction. Built in the late 12th century by King Jayavarman VII, it is a masterpiece of Khmer architecture and one of the most photographed temples in Cambodia.",
    image: "/images/place2.jpg",
    rating: 4.8,
    openHours: "7:30 AM - 5:30 PM",
    ticketPrice: "Included in Angkor Pass",
    location: "Angkor Thom"
  },
  {
    id: 3,
    name: "Ta Prohm",
    category: "Temple",
    description:
      "Known as the 'Tomb Raider Temple,' Ta Prohm has been left largely in the state it was found — with massive silk-cotton and strangler fig trees intertwining through its ancient stone walls. This atmospheric temple offers a magical, jungle-reclaimed experience unlike any other in the Angkor complex.",
    image: "/images/place3.jpg",
    rating: 4.8,
    openHours: "7:30 AM - 5:30 PM",
    ticketPrice: "Included in Angkor Pass",
    location: "Angkor Archaeological Park"
  },
  {
    id: 4,
    name: "Pub Street",
    category: "Entertainment",
    description:
      "The vibrant heart of Siem Reap's nightlife, Pub Street is a bustling pedestrian road lined with restaurants, bars, and shops. From $0.50 draft beers to live music and street food, this lively strip is where travelers come together to unwind after a day of temple exploring.",
    image: "/images/place4.jpg",
    rating: 4.5,
    openHours: "24 hours (peak at night)",
    ticketPrice: "Free",
    location: "City Center, Siem Reap"
  },
  {
    id: 5,
    name: "Tonle Sap Lake",
    category: "Nature",
    description:
      "The largest freshwater lake in Southeast Asia, Tonle Sap is a UNESCO Biosphere Reserve teeming with wildlife. Visitors can take boat tours through the floating villages, witness the incredible floating markets, and spot rare bird species in the Prek Toal Bird Sanctuary.",
    image: "/images/place5.jpg",
    rating: 4.6,
    openHours: "6:00 AM - 6:00 PM",
    ticketPrice: "$20 - $35 (boat tour)",
    location: "South of Siem Reap"
  },
  {
    id: 6,
    name: "Angkor National Museum",
    category: "Museum",
    description:
      "A world-class museum that provides essential context to the Angkor temples. Housing an extensive collection of Khmer art, sculptures, and artifacts spanning multiple centuries, it features eight galleries that tell the story of the ancient Khmer Empire through multimedia exhibits.",
    image: "/images/place6.jpg",
    rating: 4.5,
    openHours: "8:00 AM - 6:00 PM",
    ticketPrice: "$12",
    location: "Charles de Gaulle Blvd, Siem Reap"
  },
  {
    id: 7,
    name: "Banteay Srei",
    category: "Temple",
    description:
      "Often called the 'Citadel of Women,' Banteay Srei is renowned for its intricate, pink sandstone carvings that are among the finest in all of Angkor. Located 37 km from the main temple complex, this 10th-century temple rewards visitors with exquisite detail and fewer crowds.",
    image: "/images/place7.jpg",
    rating: 4.7,
    openHours: "7:30 AM - 5:30 PM",
    ticketPrice: "Included in Angkor Pass",
    location: "37 km from Angkor Wat"
  },
  {
    id: 8,
    name: "Phare, The Cambodian Circus",
    category: "Entertainment",
    description:
      "Far from a traditional circus, Phare combines theater, music, dance, and modern acrobatics to tell uniquely Cambodian stories. Founded to support at-risk youth through arts education, every performance is both entertaining and deeply meaningful — a must-see Siem Reap experience.",
    image: "/images/place8.jpg",
    rating: 4.9,
    openHours: "8:00 PM (showtime daily)",
    ticketPrice: "$18 - $38",
    location: "Phare Circus Ground, Siem Reap"
  }
]
