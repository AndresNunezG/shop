<template>
  <div class="toast-container mt-3 position-fixed top-0 start-50 translate-middle-x">
    <Toast
      :type="notification.type"
      :message="notification.message"
      v-for="notification, index in notificationsStore.notifications" :key="index"
    />
  </div>
</template>

<script setup lang="ts">
import { useNotifications } from '@/store/notifications'
import Toast from './ToastNotification.vue';

const notificationsStore = useNotifications()
</script>
