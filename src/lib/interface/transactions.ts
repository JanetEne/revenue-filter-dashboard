export interface ITransactions {
  amount: number
  metadata: Metadata
  payment_reference: string
  status: string
  type: string
  date: string
}

export interface Metadata {
  name: string
  type: string
  email: string
  quantity: number
  country: string
  product_name: string
}
