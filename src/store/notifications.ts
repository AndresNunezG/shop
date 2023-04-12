import { defineStore } from 'pinia'
import { Notification } from '@/utils/utils'

export const useNotifications = defineStore('notifications', {
  state: () => {
    return {
      notifications: [] as Notification[],
    }
  },
  actions: {
    addNotification(notification: Notification) {
      this.notifications.push(notification)
      this.scheduleCleanNotification(notification)
    },
    scheduleCleanNotification(notification: Notification) {
      setTimeout(() => {
        const notfIndex = this.notifications.findIndex(notf => notf.id === notification.id)
        if (notfIndex < 0) return
        this.notifications.splice(notfIndex, 1)
      }, 2000)
    }
  }
})
