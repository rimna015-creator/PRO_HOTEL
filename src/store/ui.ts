import { ref } from "vue"
import { currentUser } from "./user"

export const showLoginModal = ref(currentUser.value === null)
export const showCreateAccountModal = ref(false)

export const openLogin = () => {
  showCreateAccountModal.value = false
  showLoginModal.value = true
}

export const openCreateAccount = () => {
  showLoginModal.value = false
  showCreateAccountModal.value = true
}

export const closeAuthModals = () => {
  showLoginModal.value = false
  showCreateAccountModal.value = false
}