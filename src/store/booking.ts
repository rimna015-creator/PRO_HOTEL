import { ref, computed } from "vue"
import { currentUser, accountKey } from "./user"

export interface BookingRecord {
  id: string
  hotelId: number
  hotelName: string
  hotelImage: string
  roomType: string
  fullName: string
  email: string
  ownerEmail: string
  phone: string
  checkIn: string
  checkOut: string
  guests: number
  price: number
  status: "Confirmed" | "Cancelled"
  bookedAt: string
  paymentMethod?: string
  paymentPlan?: string
  amountPaid?: number
  balanceDue?: number
  cardLast4?: string
}

export interface PaymentInfo {
  method: string
  plan: "full" | "deposit" | "hotel"
  amountPaid: number
  balanceDue: number
  cardLast4?: string
}

const STORAGE_KEY = "angkorbc_bookings"

type BookingMap = Record<string, BookingRecord[]>

const readSavedBookings = (): BookingMap => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    const parsed = raw ? JSON.parse(raw) : {}

    if (Array.isArray(parsed)) {
      const legacy: BookingMap = {}
      for (const b of parsed as BookingRecord[]) {
        if (!b.ownerEmail) b.ownerEmail = b.email
        const key = accountKey(b.ownerEmail)
        if (!key) continue
        legacy[key] = [b, ...(legacy[key] ?? [])]
      }
      return legacy
    }

    return parsed && typeof parsed === "object" ? (parsed as BookingMap) : {}
  } catch {
    return {}
  }
}

const bookingMap = ref<BookingMap>(readSavedBookings())

const persist = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookingMap.value))
}

const ownerKey = computed(() =>
  currentUser.value ? accountKey(currentUser.value.email) : null
)

export const bookings = computed<BookingRecord[]>(() => {
  const key = ownerKey.value
  return key ? bookingMap.value[key] ?? [] : []
})

export const addBooking = (booking: BookingRecord): boolean => {
  const key = ownerKey.value
  if (!key) return false
  bookingMap.value = {
    ...bookingMap.value,
    [key]: [booking, ...(bookingMap.value[key] ?? [])]
  }
  persist()
  return true
}

export const cancelBooking = (id: string) => {
  const key = ownerKey.value
  if (!key) return
  const booking = bookingMap.value[key]?.find((b) => b.id === id)
  if (!booking) return
  booking.status = "Cancelled"
  persist()
}

export const updateBookingEmail = (oldEmail: string, newEmail: string) => {
  const oldKey = accountKey(oldEmail)
  const newKey = accountKey(newEmail)
  if (!oldKey || !newKey || oldKey === newKey) return

  const owned = bookingMap.value[oldKey]
  if (!owned?.length) return

  const moved = owned.map((b) => ({
    ...b,
    email: newEmail,
    ownerEmail: newEmail
  }))
  const next: BookingMap = {
    ...bookingMap.value,
    [newKey]: [...moved, ...(bookingMap.value[newKey] ?? [])]
  }
  delete next[oldKey]
  bookingMap.value = next
  persist()
}
