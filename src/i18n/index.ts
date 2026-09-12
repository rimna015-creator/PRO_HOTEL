import { ref } from "vue"

export type Locale = "en" | "km"

const STORAGE_KEY = "angkor-locale"

export const locale = ref<Locale>(
  (localStorage.getItem(STORAGE_KEY) as Locale) || "en"
)

export const setLocale = (l: Locale) => {
  locale.value = l
  localStorage.setItem(STORAGE_KEY, l)
}

export const toggleLocale = () => {
  setLocale(locale.value === "en" ? "km" : "en")
}

const km: Record<string, string> = {
  // ---- Navbar ----
  "Home": "ទំព័រដើម",
  "Hotel": "សណ្ឋាគារ",
  "Explore": "រុករក",
  "Promotion": "ការផ្សព្វផ្សាយ",
  "My Booking": "ការកក់របស់ខ្ញុំ",
  "My Account": "គណនីរបស់ខ្ញុំ",

  // ---- Home ----
  "Welcome to": "សូមស្វាគមន៍មកកាន់",
  "Welcome to BookingHotel": "សូមស្វាគមន៍មកកាន់ BookingHotel",
  "Discover and book top-rated accommodations near ancient temples and vibrant local sights.":
    "ស្វែងរក និងកក់កន្លែងស្នាក់នៅដ៏ល្បីៗនៅជិតប្រាសាទបុរាណ និងទេសភាពក្នុងតំបន់ដ៏រស់រវើក។",
  "Find the beautiful places in Siem Reap": "ស្វែងរកកន្លែងដ៏ស្រស់ស្អាតនៅសៀមរាប",
  "Explore Siem Reap": "រុករកសៀមរាប",
  "Search Available Hotels": "ស្វែងរកសណ្ឋាគារដែលមាន",
  "Check-in": "ថ្ងៃចូល",
  "Check-out": "ថ្ងៃចេញ",
  "Check-in Time": "ម៉ោងចូល",
  "Check-out Time": "ម៉ោងចេញ",
  "Guests": "ភ្ញៀវ",
  "1 Guest": "ភ្ញៀវ 1",
  "2 Guests": "ភ្ញៀវ 2",
  "3 Guests": "ភ្ញៀវ 3",
  "4 Guests": "ភ្ញៀវ 4",
  "5+ Guests": "ភ្ញៀវ 5+",
  "Search": "ស្វែងរក",
  "Featured Hotels": "សណ្ឋាគារជម្រើស",
  "Hand-picked stays loved by our guests":
    "កន្លែងស្នាក់នៅដែលបានជ្រើសរើស និងចូលចិត្តដោយភ្ញៀវរបស់យើង",
  "View all": "មើលទាំងអស់",
  "View All Hotels": "មើលសណ្ឋាគារទាំងអស់",
  "Special Promotion": "ការផ្សព្វផ្សាយពិសេស",
  "Limited-time festival packages and discounts":
    "កញ្ចប់ពិធីបុណ្យ និងការបញ្ចុះតម្លៃក្នុងពេលកំណត់",
  "View All Promotions": "មើលការផ្សព្វផ្សាយទាំងអស់",
  "Top places to discover in Siem Reap":
    "កន្លែងទាក់ទាញដែលអ្នកគួរមកស្វែងយល់នៅសៀមរាប",
  "View All Places": "មើលកន្លែងទាំងអស់",
  "All Stars": "តារាទាំងអស់",
  "5 Star": "5 តារា",
  "4 Star": "4 តារា",
  "3 Star": "3 តារា",
  "2 Star": "2 តារា",
  "Why Book With Us?": "ហេតុអ្វីត្រូវកក់ជាមួយយើង?",
  "Everything you need for a seamless trip to Siem Reap":
    "អ្វីគ្រប់យ៉ាងដែលអ្នកត្រូវការសម្រាប់ដំណើរកម្សាន្តដ៏រលូនទៅសៀមរាប",
  "Best Locations": "ទីតាំងល្អបំផុត",
  "Close to Angkor Wat and popular downtown attractions.":
    "នៅជិតអង្គរវត្ត និងកន្លែងទាក់ទាញដ៏ពេញនិយមក្នុងទីក្រុង។",
  "Best Prices": "តម្លៃល្អបំផុត",
  "Competitive rates direct from local properties with no hidden fees.":
    "អត្រាប្រកួតប្រជែងដោយផ្ទាល់ពីសណ្ឋាគារក្នុងតំបន់ ដោយគ្មានកម្រៃលាក់កំបាំង។",
  "Secure Booking": "ការកក់មានសុវត្ថិភាព",
  "Encrypted transaction processing and guaranteed reservations.":
    "ការទូទាត់ត្រូវបានអ៊ិនគ្រីប និងការកក់ត្រូវបានធានា។",
  "24/7 Support": "ជំនួយ 24/7",
  "Our support team is always available to assist your journey.":
    "ក្រុមជំនួយរបស់យើងតែងតែមានដើម្បីជួយអ្នកក្នុងដំណើររបស់អ្នក។",
  "Please select both check-in and check-out dates.":
    "សូមជ្រើសរើសទាំងថ្ងៃចូល និងថ្ងៃចេញ។",
  "Check-out date must be after the check-in date.":
    "ថ្ងៃចេញត្រូវតែក្រោយថ្ងៃចូល។",

  // ---- Hotel ----
  "Hotels in Siem Reap": "សណ្ឋាគារនៅសៀមរាប",
  "Showing hotels available from": "កំពុងបង្ហាញសណ្ឋាគារដែលមានចាប់ពី",
  "to": "ដល់",
  "found": "បានរកឃើញ",
  "Search hotels...": "ស្វែងរកសណ្ឋាគារ...",
  "No hotels available for these dates": "មិនមានសណ្ឋាគារសម្រាប់កាលបរិច្ឆេទទាំងនេះទេ",
  "Try changing your check-in and check-out dates.":
    "សូមសាកផ្លាស់ប្តូរថ្ងៃចូល និងថ្ងៃចេញរបស់អ្នក។",
  "Search Again": "ស្វែងរកម្តងទៀត",

  // ---- Explore ----
  "Cambodia": "កម្ពុជា",
  "Siem Reap, meaning \"Defeat of Siam,\" is the gateway to the legendary Angkor region — home to some of the most spectacular ancient temples on Earth.":
    "សៀមរាប មានន័យថា «រាបរួចពីសៀម» គឺជាច្រកទ្វារទៅកាន់តំបន់អង្គរដ៏ល្បីល្បាញ — ជាទីតាំងនៃប្រាសាទបុរាណដ៏អស្ចារ្យបំផុតខ្លះនៅលើផែនដី។",
  "Nestled in northwestern Cambodia, this charming city blends centuries-old Khmer heritage with a vibrant modern culture.":
    "ស្ថិតនៅភាគពាយ័ព្យនៃប្រទេសកម្ពុជា ទីក្រុងដ៏គួរឱ្យទាក់ទាញនេះរួមបញ្ចូលគ្នានូវបេតិកភណ្ឌខ្មែរដែលមានអាយុកាលរាប់សតវត្ស ជាមួយនឹងវប្បធម៌ទំនើបដ៏រស់រវើក។",
  "From the awe-inspiring Angkor Wat at sunrise to the bustling night markets and floating villages of Tonle Sap, Siem Reap offers an unforgettable journey through history, nature, and Cambodian hospitality.":
    "ចាប់តាំងពីអង្គរវត្តដ៏អស្ចារ្យនៅពេលថ្ងៃរះ រហូតដល់ផ្សាររាត្រីដ៏មមាញឹក និងភូមិបណ្តែតទឹកនៃបឹងទន្លេសាប សៀមរាបផ្តល់ជូននូវដំណើរដែលមិនអាចបំភ្លេចបាន ឆ្លងកាត់ប្រវត្តិសាស្ត្រ ធម្មជាតិ និងបដិសណ្ឋារកិច្ចរបស់កម្ពុជា។",
  "Search places...": "ស្វែងរកកន្លែងទាក់ទាញ...",
  "No places found": "មិនមានកន្លែងណាត្រូវបានរកឃើញទេ",
  "Try selecting a different category.": "សូមសាកជ្រើសរើសប្រភេទផ្សេងទៀត។",
  "View on Map": "មើលនៅលើផែនទី",

  // ---- Promotion ----
  "Promotions & Festival Packages": "ការផ្សព្វផ្សាយ និងកញ្ចប់ពិធីបុណ្យ",
  "Celebrate Cambodian festivals with special hotel packages! Each promotion includes exclusive discounts, available on set dates only. Book early to secure your spot.":
    "អបអរសាទរពិធីបុណ្យរបស់ប្រទេសកម្ពុជាជាមួយនឹងកញ្ចប់សណ្ឋាគារពិសេស! ការផ្សព្វផ្សាយនីមួយៗរួមបញ្ចូលការបញ្ចុះតម្លៃផ្តាច់មុខ ដែលអាចប្រើបានតែនៅថ្ងៃកំណត់ប៉ុណ្ណោះ។ សូមកក់ទាន់ពេលដើម្បីធានាកន្លែងរបស់អ្នក។",
  "No promotions right now": "មិនមានការផ្សព្វផ្សាយនៅពេលនេះទេ",
  "Check back soon for new festival packages!":
    "សូមត្រលប់មកមើលវិញឆាប់ៗសម្រាប់កញ្ចប់ពិធីបុណ្យថ្មីៗ!",
  "discount": "បញ្ចុះតម្លៃ",
  "nights": "យប់",
  "/ night": "/ យប់",

  // ---- HotelCard ----
  "reviews": "ការពិនិត្យ",
  "Location": "ទីតាំង",
  "View Details": "មើលព័ត៌មានលម្អិត",
  "Remove from favorites": "ដកចេញពីចំណូលចិត្ត",
  "Add to favorites": "បន្ថែមទៅចំណូលចិត្ត",

  // ---- HotelDetail ----
  "Back to Hotels": "ត្រឡប់ទៅសណ្ឋាគារ",
  "Stars": "ផ្កាយ",
  "View on Google Maps": "មើលនៅលើ Google Maps",
  "Description": "ការពិពណ៌នា",
  "Gallery": "វិចិត្រសាល",
  "photo": "រូបថត",
  "Facilities": "បរិក្ខារ",
  "Services": "សេវាកម្ម",
  "Room Types": "ប្រភេទបន្ទប់",
  "Up to": "ភ្ញៀវរហូតដល់",
  "persons": "នាក់",
  "rooms available": "បន្ទប់ដែលមាន",
  "Sold out": "លក់អស់",
  "Book Now": "កក់ឥឡូវនេះ",
  "House Rules & Policies": "ច្បាប់ និងគោលការណ៍របស់សណ្ឋាគារ",
  "Contact Hotel": "ទំនាក់ទំនងសណ្ឋាគារ",
  "Hotel Not Found": "រកមិនឃើញសណ្ឋាគារ",
  "The hotel you are looking for does not exist.":
    "សណ្ឋាគារដែលអ្នកកំពុងស្វែងរកមិនមានទេ។",

  // ---- BookNow ----
  "Back": "ត្រឡប់ក្រោយ",
  "The hotel you are trying to book does not exist.":
    "សណ្ឋាគារដែលអ្នកកំពុងព្យាយាមកក់មិនមានទេ។",
  "Thank You!": "សូមអរគុណ!",
  "Your booking has been confirmed successfully.":
    "ការកក់របស់អ្នកត្រូវបានបញ្ជាក់ដោយជោគជ័យ។",
  "Booking ID": "លេខសម្គាល់ការកក់",
  "Room": "បន្ទប់",
  "Dates": "កាលបរិច្ឆេទ",
  "Total": "សរុប",
  "Paid Now": "បានបង់ឥឡូវនេះ",
  "Payment Method": "វិធីទូទាត់",
  "Balance at Check-in": "សមតុល្យពេលចូល",
  "View My Bookings": "មើលការកក់របស់ខ្ញុំ",
  "Back to Hotel": "ត្រឡប់ទៅសណ្ឋាគារ",
  "Guest Information": "ព័ត៌មានភ្ញៀវ",
  "Full Name": "ឈ្មោះពេញ",
  "Enter your full name": "បញ្ចូលឈ្មោះពេញរបស់អ្នក",
  "Email Address": "អាសយដ្ឋានអ៊ីមែល",
  "Phone Number": "លេខទូរស័ព្ទ",
  "Check-in Date": "ថ្ងៃចូលស្នាក់នៅ",
  "Check-out Date": "ថ្ងៃចេញស្នាក់នៅ",
  "Room Type": "ប្រភេទបន្ទប់",
  "Max": "ភ្ញៀវអតិបរមា",
  "guests for this room": "សម្រាប់បន្ទប់នេះ",
  "night(s)": "យប់",
  "Total Price": "តម្លៃសរុប",
  "Please fill in your name, email and phone number":
    "សូមបំពេញឈ្មោះ អ៊ីមែល និងលេខទូរស័ព្ទរបស់អ្នក",
  "Please select check-in and check-out dates":
    "សូមជ្រើសរើសថ្ងៃចូល និងថ្ងៃចេញ",
  "Check-out date must be after the check-in date":
    "ថ្ងៃចេញត្រូវតែក្រោយថ្ងៃចូល",
  "Please select a valid room type": "សូមជ្រើសរើសប្រភេទបន្ទប់ដែលត្រឹមត្រូវ",

  // ---- MyAccount ----
  "Member since": "ជាសមាជិកតាំងពី",
  "Edit": "កែសម្រួល",
  "Edit Your Information": "កែសម្រួលព័ត៌មានរបស់អ្នក",
  "(optional)": "(ស្រេចចិត្ត)",
  "Save Changes": "រក្សាទុកការផ្លាស់ប្តូរ",
  "Cancel": "បោះបង់",
  "Bookings": "ការកក់",
  "Total Spent": "ចំណាយសរុប",
  "Favorites": "ចំណូលចិត្ត",
  "Sign Out": "ចាកចេញ",
  "My Favorite Hotels": "សណ្ឋាគារចំណូលចិត្តរបស់ខ្ញុំ",
  "saved": "បានរក្សាទុក",
  "You haven't saved any favorite hotels yet.":
    "អ្នកមិនទាន់បានរក្សាទុកសណ្ឋាគារចំណូលចិត្តណាមួយនៅឡើយទេ។",
  "Browse Hotels": "មើលសណ្ឋាគារ",
  "You are not signed in": "អ្នកមិនទាន់ចូលគណនីទេ",
  "Sign in to view your account and booking history.":
    "សូមចូលគណនីដើម្បីមើលគណនី និងប្រវត្តិនៃការកក់របស់អ្នក។",
  "Sign In": "ចូលគណនី",
  "Create an Account": "បង្កើតគណនី",
  "Your name cannot be empty": "ឈ្មោះរបស់អ្នកមិនអាចទទេទេ",
  "Please enter a valid email address": "សូមបញ្ចូលអាសយដ្ឋានអ៊ីមែលដែលត្រឹមត្រូវ",
  "Your profile has been updated successfully!":
    "ប្រវត្តិរូបរបស់អ្នកត្រូវបានអាប់ដេតដោយជោគជ័យ!",

  // ---- MyBooking ----
  "My Bookings": "ការកក់របស់ខ្ញុំ",
  "bookings in total": "ការកក់សរុបមាន",
  "No bookings yet": "មិនទាន់មានការកក់ទេ",
  "When you book a hotel, your reservations will appear here.":
    "នៅពេលអ្នកកក់សណ្ឋាគារ ការកក់របស់អ្នកនឹងបង្ហាញនៅទីនេះ។",
  "guest": "ភ្ញៀវ",
  "paid via": "បានបង់តាមរយៈ",
  "Not specified": "មិនបានបញ្ជាក់",
  "at check-in": "ពេលចូល",
  "Card": "កាត",
  "Cancel Booking": "បោះបង់ការកក់",
  "View Hotel": "មើលសណ្ឋាគារ",
  "Are you sure you want to cancel this booking?":
    "តើអ្នកប្រាកដថាចង់បោះបង់ការកក់នេះទេ?",

  // ---- Login ----
  "Welcome back": "សូមស្វាគមន៍ត្រឡប់មកវិញ",
  "Password": "លេខសម្ងាត់",
  "Forgot password?": "ភ្លេចលេខសម្ងាត់?",
  "Login In to Your Account": "ចូលទៅកាន់គណនីរបស់អ្នក",
  "Don't have an account yet?": "មិនទាន់មានគណនីទេ?",
  "Create one for free": "បង្កើតដោយឥតគិតថ្លៃ",
  "Please enter your email and password": "សូមបញ្ចូលអ៊ីមែល និងលេខសម្ងាត់របស់អ្នក",

  // ---- CreateAccount ----
  "Create An Account": "បង្កើតគណនី",
  "Create a password": "បង្កើតលេខសម្ងាត់",
  "Confirm Password": "បញ្ជាក់លេខសម្ងាត់",
  "Confirm your password": "សូមបញ្ជាក់លេខសម្ងាត់របស់អ្នក",
  "Create Account": "បង្កើតគណនី",
  "Already have an account?": "មានគណនីរួចហើយមែនទេ?",
  "Account Created Successfully!": "គណនីត្រូវបានបង្កើតដោយជោគជ័យ!",
  "Your AngkorBooking account has been created.":
    "គណនី AngkorBooking របស់អ្នកត្រូវបានបង្កើតរួចរាល់។",
  "You are now signed in.": "ឥឡូវនេះអ្នកបានចូលគណនីហើយ។",
  "Continue to My Account": "បន្តទៅគណនីរបស់ខ្ញុំ",
  "Please fill in all fields": "សូមបំពេញគ្រប់វាលទាំងអស់",
  "Passwords do not match": "លេខសម្ងាត់មិនត្រូវគ្នា",

  // ---- PaymentSection ----
  "Payment": "ការទូទាត់",
  "Total Trip Price": "តម្លៃសរុបនៃដំណើរ",
  "Due now": "ត្រូវបង់ឥឡូវនេះ",
  "Balance at check-in": "សមតុល្យពេលចូល",
  "Payment Plan": "គម្រោងទូទាត់",
  "Pay in Full": "បង់ទាំងស្រុង",
  "Pay 100% today": "បង់ 100% នៅថ្ងៃនេះ",
  "Pay 50% Deposit": "បង់ប្រាក់មុន 50%",
  "Pay at Hotel": "បង់នៅសណ្ឋាគារ",
  "No payment now": "មិនចាំបាច់បង់ឥឡូវនេះទេ",
  "Credit / Debit Card": "កាតឥណទាន / ឥណពន្ធ",
  "QR Code": "កូដ QR",
  "Bank Transfer": "ការផ្ទេរតាមធនាគារ",
  "Cardholder Name": "ឈ្មោះអ្នកកាន់កាត",
  "Name on the card": "ឈ្មោះនៅលើកាត",
  "Card Number": "លេខកាត",
  "Expiry Date": "កាលបរិច្ឆេទផុតកំណត់",
  "Scan to Pay": "ស្កេនដើម្បីបង់ប្រាក់",
  "Open your banking app (ACLEDA, Bakong, Pi Pay or Wing) and scan this QR code to complete the payment. The money is sent directly to our payee account.":
    "បើកកម្មវិធីធនាគាររបស់អ្នក (ACLEDA, Bakong, Pi Pay ឬ Wing) ហើយស្កេនកូដ QR នេះដើម្បីបញ្ចប់ការទូទាត់។ ប្រាក់នឹងត្រូវបានផ្ញើដោយផ្ទាល់ទៅគណនីអ្នកទទួលប្រាក់របស់យើង។",
  "Payee:": "អ្នកទទួលប្រាក់៖",
  "Bank": "ធនាគារ",
  "Account Name": "ឈ្មោះគណនី",
  "Account Number": "លេខគណនី",
  "Amount to transfer": "ចំនួនទឹកប្រាក់ត្រូវផ្ទេរ",
  "transfer note": "កំណត់ចំណាំផ្ទេរប្រាក់",
  "Confirm Booking": "បញ្ជាក់ការកក់",
  "Pay": "បង់ប្រាក់",
  "Now": "ឥឡូវនេះ",
  "Pay Now": "បង់ប្រាក់ឥឡូវនេះ",
  "Use": "សូមប្រើ",
  "as the transfer note so we can match your payment to your reservation.":
    "ជាកំណត់ត្រាផ្ទេរប្រាក់ ដើម្បីឱ្យយើងអាចផ្គូផ្គងការទូទាត់របស់អ្នកជាមួយការកក់របស់អ្នក។",
  "You'll pay": "អ្នកនឹងបង់ប្រាក់",
  "now.": "ឥឡូវនេះ។",
  "The remaining": "ចំនួនដែលនៅសល់",
  "is payable at the hotel front desk on check-in.":
    "នឹងត្រូវបង់នៅតុទទួលភ្ញៀវរបស់សណ្ឋាគារពេលចូលស្នាក់នៅ។",
  "Secure encrypted payment. Your card details are never stored.":
    "ការទូទាត់ដែលបានអ៊ិនគ្រីបដោយសុវត្ថិភាព។ ព័ត៌មានកាតរបស់អ្នកមិនត្រូវបានរក្សាទុកឡើយ។",
  "Cardholder name is required": "តម្រូវឱ្យបញ្ចូលឈ្មោះអ្នកកាន់កាត",
  "Enter a valid card number": "សូមបញ្ចូលលេខកាតដែលត្រឹមត្រូវ",
  "Use MM/YY": "សូមប្រើទម្រង់ MM/YY",
  "Card has expired": "កាតផុតកំណត់ហើយ",
  "Enter a valid 3-4 digit CVV": "សូមបញ្ចូល CVV 3-4 ខ្ទង់ដែលត្រឹមត្រូវ",

  // ---- Language toggle ----
  "Khmer": "ភាសាខ្មែរ",
  "English": "English",

  // ---- Footer ----
  "Angkor Booking is a hotel reservation platform built by a passionate front-end student as a portfolio project.":
    "Angkor Booking គឺជាវេទិកាកក់សណ្ឋាគារដែលបង្កើតឡើងដោយនិស្សិត Front-End ដែលមានចំណង់ចំណូលចិត្ត ក្នុងនាមជាគម្រោង portfolio។",
  "We aim to provide a seamless and enjoyable booking experience for travelers.":
    "យើងមានគោលបំណងផ្តល់នូវបទពិសោធន៍កក់ដ៏រលូន និងរីករាយសម្រាប់អ្នកធ្វើដំណើរ។",
  "Quick Links": "តំណរហ័ស",
  "Hotels": "សណ្ឋាគារ",
  "Contact Us": "ទំនាក់ទំនងយើង",
  "Phnom Penh, Cambodia": "ភ្នំពេញ, កម្ពុជា",
  "Follow Us": "តាមដានយើង",
  "Stay connected for updates and travel tips!":
    "តាមដានព័ត៌មានថ្មីៗ និងគន្លឹះកម្សាន្ត!",
  "All rights reserved.": "រក្សាសិទ្ធិគ្រប់យ៉ាង។",
  "Made with": "បង្កើតឡើងដោយ",
  "by a Front-End Student": "ដោយនិស្សិត Front-End"
}

export const t = (key: string): string => {
  if (locale.value === "km") return km[key] ?? key
  return key
}