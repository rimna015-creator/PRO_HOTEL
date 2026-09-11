import { ref } from "vue"

export interface BookingRecord {
  id: string
  hotelId: number
  hotelName: string
  hotelImage: string
  roomType: string
  fullName: string
  email: string
  phone: string
  checkIn: string
  checkOut: string
  guests: number
  price: number
  status: "Confirmed" | "Cancelled"
  bookedAt: string
}

const STORAGE_KEY = "angkorbc_bookings"

const readSavedBookings = (): BookingRecord[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed) ? (parsed as BookingRecord[]) : []
  } catch {
    return []
  }
}

export const bookings = ref<BookingRecord[]>(readSavedBookings())

const persist = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings.value))
}

export const addBooking = (booking: BookingRecord) => {
  bookings.value.unshift(booking)
  persist()
}

export const cancelBooking = (id: string) => {
  const booking = bookings.value.find((b) => b.id === id)
  if (booking) {
    booking.status = "Cancelled"
    persist()
  }
}