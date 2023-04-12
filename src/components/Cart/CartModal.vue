<template>
  <div class="modal fade" id="staticBackdrop" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fw-bold fs-5" id="staticBackdropLabel">
            <i class="fas fa-shopping-cart text-primary-emphasis"></i>
            Cart
          </h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body overflow-scroll px-3">
          <div class="fw-bold text-start py-3" v-if="isCartEmpty">
            You have not added products to your cart
          </div>
          <div v-else>
            <div
              v-for="productItem in productsCart"
              :key="productItem.id"
            >
              <CartProductItem :product-item="productItem" />
              <hr>
            </div>
            <div class="row">
              <div class="col-md-6 col-6 text-start fw-bold">Total Price</div>
              <div class="col-md-2 d-md-block d-none"></div>
              <div class="col-md-2 d-md-block d-none"></div>
              <div class="col-md-2 col-6 text-end">${{ formatCurrency(totalPriceCart) }}</div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
        <button
          type="button"
          class="btn btn-primary"
          :disabled="isCartEmpty"
          @click="cartStore.createOrder"
        >Create order</button>
      </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import 'bootstrap/dist/css/bootstrap.css';
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia'
import { Modal } from 'bootstrap';
import { useCart } from '@/store/cart';
import { formatCurrency } from '@/utils/utils'
import CartProductItem from './CartProductItem.vue';

const cartStore = useCart()
const {
  productsCart,
  totalPriceCart,
  isCartEmpty,
} = storeToRefs(cartStore)

onMounted(() => {
  const element = document.getElementById('staticBackdrop') as HTMLElement;
  new Modal(element)
})
</script>
