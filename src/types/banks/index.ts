export interface BankProps {
  id: number
  name: string
  type: string
  logoUrl: string
  createdAt: Date
  updatedAt: Date
}

export interface UserBankProps {
  id: string
  balance: string
  name: string
  logo: string
  type: string
}
