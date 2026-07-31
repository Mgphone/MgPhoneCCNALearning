export interface CreateCheckoutInput {
  amount: number
  currency?: string
  email?: string
  userId?: string
}

export interface CreateCheckoutResponse {
  url?: string
  error?: string
}

export async function createCheckoutSession(
  input: CreateCheckoutInput
): Promise<CreateCheckoutResponse> {
  const response = await fetch('/.netlify/functions/create-checkout-session', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  })
  return response.json()
}
