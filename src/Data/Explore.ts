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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg5pefm660dhBsuvaNLiq5gBCjt4EnADLmUBSaYb4mJg&s=10",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTNH0eVXKdcDfUvWUmSfIuwybIvxE8AQ8aBTtsK2qEJQ&s=10",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSStO6b56kfBgJ2w3WwfDxRBOLIURPWUy3biNmbGkP2Lw&s=10",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReOnLc4mVhZVdsOJV4WJugQUkcnWJwnqGgoRXXW4G04A&s=10",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTOsYRtNrDgYejjUX66rKnPUSYn23svQHquxXjsz7evwnC8qmjbzVQ_NU&s=10",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8QA98kfv6DOYgP5t8ZtT34ed2IWQx4rtJ0yIPAXhOAQ&s=10",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbWzKWEmIMin3aGUTWJwT2njf2VPVGWj-EGDTXQkdIPg&s=10",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOoA8fmBDhFjAg8vDndCEZpSR0NOU4hv-RkeWD1BPKEA&s=10",
    rating: 4.9,
    openHours: "8:00 PM (showtime daily)",
    ticketPrice: "$18 - $38",
    location: "Phare Circus Ground, Siem Reap"
  },
  {
    id: 9,
    name: "Pre Rup",
    category: "Temple",
    description:
      "A 10th-century temple mountain built by King Rajendravarman as his state temple. Pre Rup offers one of the most rewarding sunset viewpoints in the park, with panoramic views over the surrounding forest and rice fields from the top of its steep pyramid steps.",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/85/Pre_Rup%2C_Angkor%2C_Camboya%2C_2013-08-16%2C_DD_13.JPG/800px-Pre_Rup%2C_Angkor%2C_Camboya%2C_2013-08-16%2C_DD_13.JPG",
    rating: 4.6,
    openHours: "5:00 AM - 7:00 PM",
    ticketPrice: "Included in Angkor Pass",
    location: "East Baray, Angkor Archaeological Park"
  },
  {
    id: 10,
    name: "Phnom Bakheng",
    category: "Temple",
    description:
      "Ending the 9th century as the state temple of King Yasovarman, this hilltop temple is the most popular spot in Siem Reap to watch the sunset over Angkor Wat. Climb to the top for stunning views across the jungle towards the iconic silhouette of the great temple.",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/01/Phnom_Bakheng_temple_at_Angkor%2C_Cambodia.jpg/800px-Phnom_Bakheng_temple_at_Angkor%2C_Cambodia.jpg",
    rating: 4.5,
    openHours: "5:00 AM - 7:00 PM",
    ticketPrice: "Included in Angkor Pass",
    location: "Angkor Archaeological Park"
  },
  {
    id: 11,
    name: "Preah Khan",
    category: "Temple",
    description:
      "One of the largest temple complexes in the Angkor region, Preah Khan was built by King Jayavarman VII to honor his father. Like Ta Prohm, it has been left largely unrestored, with towering trees and roots weaving through its walls and a maze of galleries to explore.",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e7/Preah_Khan%2C_Angkor%2C_Camboya%2C_2013-08-17%2C_DD_26.JPG/800px-Preah_Khan%2C_Angkor%2C_Camboya%2C_2013-08-17%2C_DD_26.JPG",
    rating: 4.7,
    openHours: "7:30 AM - 5:30 PM",
    ticketPrice: "Included in Angkor Pass",
    location: "Northeast of Angkor Thom"
  },
  {
    id: 12,
    name: "East Mebon",
    category: "Temple",
    description:
      "Built on a small island in the now-dry East Baray reservoir, East Mebon is a 10th-century temple mountain surrounded by water on all sides in its heyday. Its corner towers are guarded by giant sandstone elephants, and the views across the reservoir are superb.",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/Mebon_Oriental%2C_Angkor%2C_Camboya%2C_2013-08-17%2C_DD_05.JPG/800px-Mebon_Oriental%2C_Angkor%2C_Camboya%2C_2013-08-17%2C_DD_05.JPG",
    rating: 4.4,
    openHours: "7:30 AM - 5:30 PM",
    ticketPrice: "Included in Angkor Pass",
    location: "East Baray, Angkor Archaeological Park"
  },
  {
    id: 13,
    name: "Banteay Samré",
    category: "Temple",
    description:
      "A beautifully preserved 12th-century temple built in the style of Angkor Wat, Banteay Samré is one of the most complete and least crowded temples in the park. Its graceful central sanctuary and intricate carvings make it a favorite for photographers and history lovers.",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/71/Banteay_Samre%2C_Cambodia_%282212223080%29.jpg/800px-Banteay_Samre%2C_Cambodia_%282212223080%29.jpg",
    rating: 4.6,
    openHours: "7:30 AM - 5:30 PM",
    ticketPrice: "Included in Angkor Pass",
    location: "East of East Baray"
  },
  {
    id: 14,
    name: "Neak Pean",
    category: "Temple",
    description:
      "Neak Pean is a fascinating water temple built on a circular island in the middle of the Jayatataka baray, with four connected pools said to have healing powers. Surrounded by water on wooden walkways, it is one of the most unusual and serene temples in the complex.",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1b/Neakpeancentralpond2014.jpg/800px-Neakpeancentralpond2014.jpg",
    rating: 4.5,
    openHours: "7:30 AM - 5:30 PM",
    ticketPrice: "Included in Angkor Pass",
    location: "Preah Khan complex, Angkor"
  },
  {
    id: 15,
    name: "Bakong",
    category: "Temple",
    description:
      "The earliest sandstone temple mountain of the Khmer Empire, Bakong was built in the late 9th century as the state temple of the Roluos capital. Its five-tiered pyramid and guardian elephants set the architectural blueprint for the great temples of Angkor that followed.",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1f/Roulos_Group_-_005_Bakong_%288587796725%29.jpg/800px-Roulos_Group_-_005_Bakong_%288587796725%29.jpg",
    rating: 4.5,
    openHours: "7:30 AM - 5:30 PM",
    ticketPrice: "Included in Angkor Pass",
    location: "Roluos Group, 13 km east of Siem Reap"
  },
  {
    id: 16,
    name: "Terrace of the Elephants",
    category: "Temple",
    description:
      "A 350-meter-long viewing platform inside Angkor Thom, this grand terrace was used by King Jayavarman VII to review his victorious army. Named for its carved life-size elephant decorations, it is a striking example of Khmer bas-relief artistry and a favorite photo spot.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Terraza_de_los_Elefantes%2C_Angkor_Thom%2C_Camboya%2C_2013-08-16%2C_DD_03.jpg/800px-Terraza_de_los_Elefantes%2C_Angkor_Thom%2C_Camboya%2C_2013-08-16%2C_DD_03.jpg",
    rating: 4.4,
    openHours: "7:30 AM - 5:30 PM",
    ticketPrice: "Included in Angkor Pass",
    location: "Angkor Thom"
  },
  {
    id: 17,
    name: "Kampong Phluk",
    category: "Nature",
    description:
      "Meaning 'Harbor of the Tusks,' Kampong Phluk is a traditional fishing village built on tall stilts, rising 8 meters in the wet season. A boat tour weaves through flooded forests and stilted houses, offering an intimate glimpse into life on Tonle Sap.",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b7/Houses_on_the_water_in_Kampong_Phlouk.jpg/800px-Houses_on_the_water_in_Kampong_Phlouk.jpg",
    rating: 4.7,
    openHours: "6:00 AM - 5:30 PM",
    ticketPrice: "$20 - $25 (boat tour)",
    location: "Tonle Sap Lake, 16 km southeast of Siem Reap"
  },
  {
    id: 18,
    name: "Phnom Kulen",
    category: "Nature",
    description:
      "The sacred mountain of Phnom Kulen is considered the birthplace of the ancient Khmer Empire. Hike up to the 1,000-linga riverbed carvings, marvel at the giant reclining Buddha, and cool off beneath the refreshing 1000 Waterfalls cascading down the forested hillside.",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a3/Phnom_Kulen8.JPG/800px-Phnom_Kulen8.JPG",
    rating: 4.6,
    openHours: "7:00 AM - 5:00 PM",
    ticketPrice: "$20 (entry) + $15 (transport)",
    location: "Phnom Kulen National Park, 48 km from Siem Reap"
  }
]
