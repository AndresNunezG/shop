<template>
  <div class="card product-card" style="width: 18rem;">
    <img :src="productImage" class="card-image card-img-top" alt="stock-image">
    <div class="card-body">
      <p class="text-start fw-bold text-nowrap overflow-scroll text-capitalize">{{ props.product.name }}</p>
      <div class="row mb-3 d-flex align-items-center justify-content-center">
        <div class="col-6 my-2 column-gap-3 d-flex align-items-center justify-content-center">
          <i class="fas fa-dollar-sign"></i>
          <p class="my-0">{{ formatCurrency(props.product.unit_price) }}</p>
        </div>
        <div class="col-6 my-2 column-gap-3 d-flex align-items-center justify-content-center">
          <i class="fas fa-box-open"></i>
          <p class="my-0">{{ availableStock }}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-5 col-12">
          <div class="input-group mb-3">
            <input
              type="number"
              step="1"
              min="0"
              :max="availableStock"
              class="form-control"
              v-model="amount"
              @input="debounce(() => formatAmount($event))"
            >
          </div>
        </div>
        <div class="col-md-7 col-12">
          <button
            type="button"
            class="btn w-100 btn-outline-primary"
            @click="checkAddProductToCart"
          >
          Add to cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useCart } from '@/store/cart';
import { useNotifications } from '@/store/notifications';
import {
  Product,
  ToastType,
  ProductItemCart,
  formatCurrency,
  getRandomImage,
  createDebounce,
} from '@/utils/utils'

const cartStore = useCart()
const notificationsStore = useNotifications()
const { productsCart } = storeToRefs(cartStore)

const props = defineProps<{ product: Product}>()
const productImage = ref('')
const amount = ref(0)

const debounce = createDebounce()
function formatAmount(event: Event) {
  const target = event.target as HTMLInputElement
  const value = Math.round(Number(parseInt(target.value)))
  amount.value = value > availableStock.value ? availableStock.value : value
}

const isProductInCart = computed(() => (
  productsCart.value.find(cartItem => cartItem.product_id === props.product.id)
))
const availableStock = computed(() => (
  isProductInCart.value ? props.product.stock - isProductInCart.value.total_units : props.product.stock
))

function addProductToCart(availableStock: number, updateProduct: ProductItemCart | undefined) {
  if ( amount.value > 0 && amount.value <= availableStock ) {
    cartStore.addProductToCart(props.product, amount.value, updateProduct)
  } else {
    const errorMessage = amount.value >  0 ?
    `Select less than ${availableStock + 1} units` :
    `Choose a valid quantity`
    const NotificationType = amount.value > 0 ?
    ToastType.Warning : ToastType.Alert
    notificationsStore.addNotification(
      {
        id: crypto.randomUUID(),
        type: NotificationType,
        message: errorMessage,
      }
    )
  }
}

function checkAddProductToCart() {
  const productToUpdate = isProductInCart.value
  addProductToCart(availableStock.value, productToUpdate)
  amount.value = 0
}

onMounted(() => {
  productImage.value = getRandomImage()
})
</script>

<style setup lang="scss">
.product-card {
  .card-image {
    height: 160px;
    overflow: hidden;
  }
}
</style>
