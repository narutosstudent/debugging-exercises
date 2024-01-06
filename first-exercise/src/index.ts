import type { Product, Order } from './types'

import { inventory } from './inventory'
import { OrderProcessor } from './orderProcessor'

// Initialize inventory
const products: Array<Product> = [
  { id: 'p1', name: 'Chair', quantity: 100 },
  { id: 'p2', name: 'Table', quantity: 50 },
]
products.forEach((p) => inventory.addProduct(p))

// Process orders
const orderProcessor = new OrderProcessor()
const orders: Array<Order> = [
  { productId: 'p1', quantity: 1 },
  { productId: 'p2', quantity: 1 },
  { productId: 'p1', quantity: 2 },
  // Add more orders for testing...
]

orders.forEach((order) => {
  const isSuccess = orderProcessor.processOrder(order)
  console.log(
    `Order for ${order.productId}: ${isSuccess ? 'Processed' : 'Failed'}`
  )
})

// Output final inventory and total items sold for verification
console.log('Final Inventory Status:', inventory.getInventoryStatus())
console.log('Total Items Sold:', orderProcessor.getTotalItemsSold())
