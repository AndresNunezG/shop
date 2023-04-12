<template>
  <div class="row">
    <div class="col-md-6 col-8 text-nowrap overflow-scroll text-start"> {{ capitalizeString(props.productItem.name) }}</div>
    <div class="col-md-2 col-4 text-nowrap overflow-scroll text-md-start text-end"> {{ props.productItem.total_units }}&nbsp;und</div>
    <div class="col-md-2 col-6 text-nowrap overflow-scroll text-start"> ${{ formatCurrency(props.productItem.unit_price) }}</div>
    <div class="col-md-2 col-6 text-nowrap overflow-scroll text-end"> ${{ formatCurrency(props.productItem.total_price) }}</div>
  </div>
</template>

<script setup lang="ts">
import {
  ProductItemCart,
  capitalizeString,
  formatCurrency,
} from '@/utils/utils';

const props = defineProps<{ productItem: ProductItemCart}>()
</script>
