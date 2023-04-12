<template>
  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-body d-flex align-items-center justify-content-center column-gap-2">
      <i v-if="props.type === ToastType.Info"
        class="fas fa-info-circle text-info"></i>
      <i v-if="props.type === ToastType.Warning"
        class="fas fa-exclamation-circle text-warning"></i>
      <i v-if="props.type === ToastType.Alert"
        class="fas fa-exclamation-circle text-danger"></i>
      <p class="mb-0 fw-bold">{{ props.message }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ToastType } from '@/utils/utils';
const props = defineProps<{ message: string, type: ToastType }>()
</script>

<style scoped lang="scss">
.toast:not(.show) {
  display: block;
}
</style>
