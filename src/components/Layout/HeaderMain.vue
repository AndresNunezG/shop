<template>
  <header class="header bg-primary-subtle rounded-3 p-3 mb-4 mx-md-3 mx-2">
    <div class="col-12">
      <h3 class="fw-bold fs-5 m-0">
        <i @click="changeTheme" class="fas fa-shopping-basket text-primary-emphasis"></i>
        Alternova Shop
      </h3>
      <button
        type="button"
        class="btn cart-btn"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <i class="fas fa-shopping-cart cart text-primary-emphasis"></i>
      </button>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  position: relative;
  .cart-btn {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>

<script setup lang="ts">
function changeTheme() {
  const htmlBody = document.querySelector('body')
  const theme = htmlBody?.dataset.bsTheme
  const newTheme = theme === 'light' ? 'dark' : 'light'
  if (htmlBody) {
    htmlBody.dataset.bsTheme = newTheme
  }
}
</script>
