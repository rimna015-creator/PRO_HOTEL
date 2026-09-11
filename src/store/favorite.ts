import { ref, computed } from "vue"
import { hotels, type Hotel } from "../Data/Hotel"
import { currentUser } from "./user"

const STORAGE_KEY = "angkorbc_favorites"

type FavoriteMap = Record<string, number[]>

const readSavedFavorites = (): FavoriteMap => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    const parsed = raw ? JSON.parse(raw) : {}
    return parsed && typeof parsed === "object" ? parsed : {}
  } catch {
    return {}
  }
}

const favoriteMap = ref<FavoriteMap>(readSavedFavorites())

const persist = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(favoriteMap.value))
}

const currentEmail = computed(() => currentUser.value?.email ?? null)

export const favoriteIds = computed<number[]>(() => {
  const email = currentEmail.value
  return email ? favoriteMap.value[email] ?? [] : []
})

export const isFavorite = (id: number) => favoriteIds.value.includes(id)

export const toggleFavorite = (id: number): boolean => {
  const email = currentEmail.value
  if (!email) return false
  const list = [...(favoriteMap.value[email] ?? [])]
  const idx = list.indexOf(id)
  if (idx >= 0) {
    list.splice(idx, 1)
  } else {
    list.push(id)
  }
  favoriteMap.value = { ...favoriteMap.value, [email]: list }
  persist()
  return idx < 0
}

export const favoriteHotels = computed<Hotel[]>(() =>
  hotels.filter((h) => favoriteIds.value.includes(h.id))
)