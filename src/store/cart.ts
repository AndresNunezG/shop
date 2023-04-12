import { defineStore } from 'pinia'
import { useNotifications } from './notifications'
import {
  Product,
  ProductItemCart,
  ToastType,
  capitalizeString
} from '@/utils/utils'

export const useCart = defineStore('cart', {
  state: () => {
    return {
      productsCart: [] as ProductItemCart[],
    }
  },
  actions: {
    addProductToCart(product: Product, totalUnits: number, updateProduct: ProductItemCart | undefined) {
      if (updateProduct) {
        const updateProductIndex = this.productsCart.findIndex((el) => el.id === updateProduct.id)
        this.productsCart.splice(
          updateProductIndex, 1,
          {...updateProduct, total_units: updateProduct.total_units + totalUnits}
        )
      } else {
        this.productsCart.push(
          {
            id: crypto.randomUUID(),
            name: product.name,
            product_id: product.id,
            unit_price: product.unit_price,
            total_price: product.unit_price * totalUnits,
            total_units: totalUnits,
          }
        )
      }
      const notificationsStore = useNotifications()
      const capitalizedProductName = capitalizeString(product.name)
      notificationsStore.addNotification(
        {
          id: crypto.randomUUID(),
          type: ToastType.Info,
          message: `Added product: ${(capitalizedProductName)}`,
        }
      )
    },
    createOrder() {
      const orderDataJson = JSON.stringify(this.productsCart)
      alert(orderDataJson)
    }
  },
  getters: {
    totalPriceCart: (state => state.productsCart.reduce((total, item) => total + item.total_price, 0)),
    isCartEmpty: (state => !Boolean(state.productsCart.length))
  }
})
