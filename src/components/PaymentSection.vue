<template>
  <div class="mt-6 rounded-2xl bg-white p-6 shadow-md sm:p-8">
    <h2 class="mb-5 text-xl font-semibold text-blue-900">
      <i class="bi bi-credit-card-2-front mr-2 text-blue-500"></i>
      {{ t("Payment") }}
    </h2>

    <!-- Order Total -->
    <div class="rounded-xl bg-blue-50 p-5">
      <div class="flex items-center justify-between">
        <span class="font-semibold text-blue-900">{{ t("Total Trip Price") }}</span>
        <span class="text-2xl font-bold text-blue-900">${{ amount }}</span>
      </div>
      <div class="mt-2 flex items-center justify-between text-sm text-blue-600">
        <span>{{ t("Due now") }}</span>
        <span class="font-semibold text-blue-900">${{ dueNow }}</span>
      </div>
      <div v-if="balance > 0" class="flex items-center justify-between text-sm text-blue-600">
        <span>{{ t("Balance at check-in") }}</span>
        <span class="font-semibold text-blue-700">${{ balance }}</span>
      </div>
    </div>

    <!-- Payment Plan -->
    <div class="mt-5">
      <h3 class="mb-3 text-sm font-semibold text-blue-700">{{ t("Payment Plan") }}</h3>
      <div class="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <label
          v-for="p in plans"
          :key="p.value"
          class="flex cursor-pointer flex-col rounded-xl border-2 p-4 transition"
          :class="plan === p.value
            ? 'border-blue-700 bg-blue-50'
            : 'border-blue-200 bg-white hover:border-blue-300'"
        >
          <input type="radio" v-model="plan" :value="p.value" class="sr-only" />
          <span class="font-semibold text-blue-900">{{ t(p.label) }}</span>
          <span class="mt-1 text-xs text-blue-500">{{ t(p.desc) }}</span>
        </label>
      </div>
    </div>

    <!-- Payment Method -->
    <div v-if="plan !== 'hotel'" class="mt-5">
      <h3 class="mb-3 text-sm font-semibold text-blue-700">{{ t("Payment Method") }}</h3>
      <div class="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <label
          v-for="m in methods"
          :key="m.value"
          class="flex cursor-pointer items-center gap-3 rounded-xl border-2 p-4 transition"
          :class="method === m.value
            ? 'border-blue-700 bg-blue-50'
            : 'border-blue-200 bg-white hover:border-blue-300'"
        >
          <input type="radio" v-model="method" :value="m.value" class="sr-only" />
          <i :class="[m.icon, 'text-xl text-blue-500']"></i>
          <span class="font-medium text-blue-900">{{ t(m.label) }}</span>
        </label>
      </div>
    </div>

    <!-- Credit / Debit Card Form -->
    <div v-if="plan !== 'hotel' && method === 'card'" class="mt-5 space-y-4">
      <div>
        <label for="cardHolder" class="block text-sm font-semibold text-blue-700">{{ t("Cardholder Name") }}</label>
        <input
          id="cardHolder"
          v-model="cardHolder"
          type="text"
          :placeholder="t('Name on the card')"
          class="mt-2 block w-full rounded-xl border border-blue-200 bg-white px-4 py-3 text-blue-900 placeholder:text-blue-400 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-200"
        />
        <p v-if="errors.cardHolder" class="mt-1 text-xs text-red-500">{{ errors.cardHolder }}</p>
      </div>

      <div>
        <label for="cardNumber" class="block text-sm font-semibold text-blue-700">{{ t("Card Number") }}</label>
        <div class="relative mt-2">
          <input
            id="cardNumber"
            :value="cardNumber"
            @input="formatCardNumber"
            type="text"
            inputmode="numeric"
            placeholder="1234 5678 9012 3456"
            class="block w-full rounded-xl border border-blue-200 bg-white px-4 py-3 pr-24 font-mono text-blue-900 placeholder:text-blue-400 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-200"
          />
          <span class="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-blue-500">
            {{ cardBrand }}
          </span>
        </div>
        <p v-if="errors.cardNumber" class="mt-1 text-xs text-red-500">{{ errors.cardNumber }}</p>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div>
          <label for="cardExpiry" class="block text-sm font-semibold text-blue-700">{{ t("Expiry Date") }}</label>
          <input
            id="cardExpiry"
            :value="cardExpiry"
            @input="formatExpiry"
            type="text"
            inputmode="numeric"
            placeholder="MM/YY"
            class="mt-2 block w-full rounded-xl border border-blue-200 bg-white px-4 py-3 font-mono text-blue-900 placeholder:text-blue-400 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-200"
          />
          <p v-if="errors.cardExpiry" class="mt-1 text-xs text-red-500">{{ errors.cardExpiry }}</p>
        </div>
        <div>
          <label for="cardCvv" class="block text-sm font-semibold text-blue-700">CVV</label>
          <input
            id="cardCvv"
            :value="cardCvv"
            @input="formatCvv"
            type="password"
            inputmode="numeric"
            placeholder="123"
            class="mt-2 block w-full rounded-xl border border-blue-200 bg-white px-4 py-3 font-mono text-blue-900 placeholder:text-blue-400 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-200"
          />
          <p v-if="errors.cardCvv" class="mt-1 text-xs text-red-500">{{ errors.cardCvv }}</p>
        </div>
      </div>
    </div>

    <!-- QR Code -->
    <div v-else-if="plan !== 'hotel' && method === 'qr'" class="mt-5 flex flex-col items-center gap-5 rounded-xl bg-white p-5 sm:flex-row">
      <div
        class="rounded-xl border-2 border-blue-200 bg-white p-3"
        v-html="qrSvg"
      ></div>
      <div class="text-center sm:text-left">
        <p class="text-sm font-semibold text-blue-900">{{ t("Scan to Pay") }} ${{ dueNow }}</p>
        <p class="mt-1 text-xs text-blue-500">
          {{ t("Open your banking app (ACLEDA, Bakong, Pi Pay or Wing) and scan this QR code to complete the payment. The money is sent directly to our payee account.") }}
        </p>
        <p class="mt-2 text-xs font-medium text-blue-700">
          <i class="bi bi-shield-check mr-1"></i>
          {{ t("Payee:") }} Angkor Booking Co., Ltd.
        </p>
      </div>
    </div>

    <!-- Bank Transfer -->
    <div v-else-if="plan !== 'hotel' && method === 'bank'" class="mt-5 rounded-xl bg-white p-5">
      <div class="space-y-2 text-sm text-blue-700">
        <div class="flex items-center justify-between">
          <span class="text-blue-500">{{ t("Bank") }}</span>
          <span class="font-semibold">ACLEDA Bank Plc.</span>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-blue-500">{{ t("Account Name") }}</span>
          <span class="font-semibold">Angkor Booking Co., Ltd.</span>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-blue-500">{{ t("Account Number") }}</span>
          <span class="font-mono font-semibold">000 23 456 789</span>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-blue-500">{{ t("Amount to transfer") }}</span>
          <span class="font-bold text-blue-900">${{ dueNow }}</span>
        </div>
      </div>
      <p class="mt-3 text-xs text-blue-500">
        {{ t("Use") }} <span class="font-semibold">"ANGKOR-" + your booking reference</span> {{ t("as the transfer note so we can match your payment to your reservation.") }}
      </p>
    </div>

    <!-- Pay Button -->
    <button
      @click="attemptPay"
      :disabled="processing"
      class="mt-6 flex w-full items-center justify-center rounded-2xl bg-emerald-600 px-6 py-3 text-lg font-bold text-white shadow-lg shadow-emerald-500/20 transition-all hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-200 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
    >
      <span
        v-if="processing"
        class="inline-block h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"
      ></span>
      <template v-else>
        <i class="bi bi-lock-fill mr-2"></i>
        {{ payLabel }}
      </template>
    </button>

    <p v-if="balance > 0" class="mt-3 text-center text-xs text-blue-500">
      {{ t("You'll pay") }} <strong>${{ dueNow }}</strong> {{ t("now.") }}
      {{ t("The remaining") }} <strong>${{ balance }}</strong> {{ t("is payable at the hotel front desk on check-in.") }}
    </p>
    <p v-else class="mt-3 text-center text-xs text-emerald-600">
      <i class="bi bi-shield-check mr-1"></i>
      {{ t("Secure encrypted payment. Your card details are never stored.") }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"
import type { PaymentInfo } from "../store/booking"
import { t } from "../i18n"

const props = defineProps<{
  amount: number
  beforePay: () => boolean
}>()

const emit = defineEmits<{
  (e: "payment-success", payload: PaymentInfo): void
}>()

const plans = [
  { value: "full" as const, label: "Pay in Full", desc: "Pay 100% today" },
  { value: "deposit" as const, label: "Pay 50% Deposit", desc: "Balance at check-in" },
  { value: "hotel" as const, label: "Pay at Hotel", desc: "No payment now" }
]

const methods = [
  { value: "card" as const, label: "Credit / Debit Card", icon: "bi bi-credit-card-2-front" },
  { value: "qr" as const, label: "QR Code", icon: "bi bi-qr-code-scan" },
  { value: "bank" as const, label: "Bank Transfer", icon: "bi bi-bank" }
]

const methodLabels: Record<string, string> = {
  card: "Credit / Debit Card",
  qr: "QR Code",
  bank: "Bank Transfer"
}

const plan = ref<"full" | "deposit" | "hotel">("full")
const method = ref<"card" | "qr" | "bank">("card")
const processing = ref(false)

const dueNow = computed(() => {
  if (plan.value === "full") return props.amount
  if (plan.value === "deposit") return Math.round(props.amount * 50) / 100
  return 0
})

const balance = computed(() =>
  Math.round((props.amount - dueNow.value) * 100) / 100
)

const payLabel = computed(() => {
  if (plan.value === "hotel") return t("Confirm Booking")
  return `${t("Pay")} $${dueNow.value} ${t("Now")}`
})

// ---- Card fields ----
const cardHolder = ref("")
const cardNumber = ref("")
const cardExpiry = ref("")
const cardCvv = ref("")
const errors = ref<Record<string, string>>({})

const cardDigits = computed(() => cardNumber.value.replace(/\D/g, ""))

const cardBrand = computed(() => {
  const d = cardDigits.value
  if (!d) return "Card"
  if (d[0] === "4") return "Visa"
  if (d[0] === "5") return "Mastercard"
  if (d[0] === "3") return "Amex"
  if (d[0] === "6") return "Discover"
  return "Card"
})

const formatCardNumber = () => {
  const digits = cardNumber.value.replace(/\D/g, "").slice(0, 19)
  cardNumber.value = digits.replace(/(.{4})/g, "$1 ").trim()
}

const formatExpiry = () => {
  const digits = cardExpiry.value.replace(/\D/g, "").slice(0, 4)
  cardExpiry.value =
    digits.length > 2 ? digits.slice(0, 2) + "/" + digits.slice(2) : digits
}

const formatCvv = () => {
  cardCvv.value = cardCvv.value.replace(/\D/g, "").slice(0, 4)
}

// ---- Fake QR code (deterministic per amount) ----
const qrSvg = computed(() => {
  const size = 25
  const module = 8
  let seed = Math.round(props.amount * 100) + 7
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280
    return seed / 233280
  }
  const finder = (lx: number, ly: number) =>
    lx === 0 || ly === 0 || lx === 6 || ly === 6 ||
    (lx >= 2 && lx <= 4 && ly >= 2 && ly <= 4)

  const parts: string[] = []
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      let filled: boolean
      if (x < 7 && y < 7) filled = finder(x, y)
      else if (x >= size - 7 && y < 7) filled = finder(x - (size - 7), y)
      else if (x < 7 && y >= size - 7) filled = finder(x, y - (size - 7))
      else filled = rand() < 0.5
      if (filled) {
        parts.push(
          `<rect x="${x * module}" y="${y * module}" width="${module}" height="${module}"/>`
        )
      }
    }
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="190" height="190" viewBox="0 0 200 200" shape-rendering="crispEdges"><rect width="200" height="200" fill="#fff"/>${parts.join("")}</svg>`
})

// ---- Validation ----
const validatePayment = (): boolean => {
  const errs: Record<string, string> = {}
  if (plan.value === "hotel") {
    errors.value = errs
    return true
  }
  if (method.value === "card") {
    if (!cardHolder.value.trim()) errs.cardHolder = t("Cardholder name is required")
    if (cardDigits.value.length < 15) errs.cardNumber = t("Enter a valid card number")
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(cardExpiry.value)) {
      errs.cardExpiry = t("Use MM/YY")
    } else {
      const [mm, yy] = cardExpiry.value.split("/").map(Number)
      const exp = new Date(2000 + yy, mm, 0, 23, 59, 59)
      if (exp < new Date()) errs.cardExpiry = t("Card has expired")
    }
    if (!/^\d{3,4}$/.test(cardCvv.value)) errs.cardCvv = t("Enter a valid 3-4 digit CVV")
  }
  errors.value = errs
  return Object.keys(errs).length === 0
}

const attemptPay = () => {
  if (processing.value) return
  if (!props.beforePay()) return
  if (!validatePayment()) return

  processing.value = true
  setTimeout(() => {
    processing.value = false
    emit("payment-success", {
      method: plan.value === "hotel" ? "Pay at Hotel" : methodLabels[method.value],
      plan: plan.value,
      amountPaid: dueNow.value,
      balanceDue: balance.value,
      cardLast4:
        plan.value !== "hotel" && method.value === "card"
          ? cardDigits.value.slice(-4)
          : undefined
    })
  }, 1600)
}
</script>