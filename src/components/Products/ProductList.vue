<template>
  <section class="row justify-content-center">
    <div
      v-for="product in products"
      :key="product.id"
      class="col-md-3 col my-3 d-flex justify-content-center"
    >
      <ProductCard :product="product" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import ProductCard from './ProductCard.vue'
import { useProducts } from '@/store/products'

const productsStore = useProducts()
const { products } = storeToRefs(productsStore)
</script>
