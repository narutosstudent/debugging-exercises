import type { Product } from './types'

class Inventory {
  private products: Array<Product> = []

  addProduct(product: Product): void {
    this.products.push(product)
  }

  getProduct(productId: string): Product | undefined {
    return this.products.find((p) => p.id === productId)
  }

  updateProductQuantity(productId: string, quantity: number): void {
    const product = this.getProduct(productId)
    if (product) {
      product.quantity -= quantity
    }
  }

  getInventoryStatus(): Array<Product> {
    return this.products.map((p) => ({ ...p }))
  }
}

export const inventory = new Inventory()
