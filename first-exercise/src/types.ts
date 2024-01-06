export interface Product {
  id: string
  name: string
  quantity: number
}

export interface Order {
  productId: string
  quantity: number
}
