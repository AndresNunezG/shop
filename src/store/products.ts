import { defineStore } from "pinia"
import { Product } from "@/utils/utils"
import * as dataJson from '@/data/data.json'

export const useProducts = defineStore('products', {
  state: () => {
    return {
      products: [...dataJson.products.map(p => ({...p, id: crypto.randomUUID()}))] as Product[],
    }
  },
})
