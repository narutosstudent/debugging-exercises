import type { Order } from './types'

import { inventory } from './inventory'

export class OrderProcessor {
  private totalItemsSold = 0

  processOrder(order: Order): boolean {
    const product = inventory.getProduct(order.productId)
    if (!product || product.quantity < order.quantity) {
      return false
    }

    inventory.updateProductQuantity(order.productId, order.quantity)
    this.totalItemsSold += order.quantity
    return true
  }

  getTotalItemsSold(): number {
    return this.totalItemsSold
  }
}
