import { ref, computed } from "vue"

export interface UserAccount {
  id: number
  name: string
  email: string
  joinedAt: string
}

const STORAGE_KEY = "angkorbc_current_user"

const readSavedUser = (): UserAccount | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as UserAccount) : null
  } catch {
    return null
  }
}

export const currentUser = ref<UserAccount | null>(readSavedUser())

export const isLoggedIn = computed(() => currentUser.value !== null)

export const saveUser = (user: UserAccount) => {
  currentUser.value = user
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
}

export const signOut = () => {
  currentUser.value = null
  localStorage.removeItem(STORAGE_KEY)
}