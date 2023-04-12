<template>
  <LayoutMain>
    <template #default>
      <div class="container">
        <ProductList />
      </div>
    </template>
  </LayoutMain>
  <CartModal />
  <Notifications />
</template>

<script setup lang="ts">
import LayoutMain from './components/Layout/LayoutMain.vue';
import ProductList from './components/Products/ProductList.vue';
import CartModal from './components/Cart/CartModal.vue';
import Notifications from './components/Notifications/NotificationsApp.vue';
</script>
