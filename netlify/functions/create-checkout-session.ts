import type { Handler } from '@netlify/functions'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '')

const MIN_AMOUNT = 100
const MAX_AMOUNT = 50000

const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

export const handler: Handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers, body: '' }
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) }
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: 'Stripe is not configured' }) }
  }

  let payload: { amount?: number; currency?: string; email?: string; userId?: string }
  try {
    payload = JSON.parse(event.body ?? '{}')
  } catch {
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'Invalid JSON body' }) }
  }

  const amount = payload.amount
  if (!Number.isInteger(amount) || (amount as number) < MIN_AMOUNT || (amount as number) > MAX_AMOUNT) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: `Amount must be between £${MIN_AMOUNT / 100} and £${MAX_AMOUNT / 100}` }),
    }
  }

  const currency = payload.currency ?? 'gbp'
  const origin = event.headers.origin ?? 'https://myccna.netlify.app'

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      currency,
      customer_email: payload.email || undefined,
      client_reference_id: payload.userId || undefined,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency,
            unit_amount: amount,
            product_data: {
              name: 'Buy Me a Coffee',
              description: 'A donation to keep MyCCNA quizzes, labs and learning materials free.',
            },
          },
        },
      ],
      metadata: {
        source: 'buy_me_a_coffee',
        userId: payload.userId ?? '',
      },
      success_url: `${origin}/?donation=success`,
      cancel_url: `${origin}/?donation=cancelled`,
    })

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ url: session.url }),
    }
  } catch (error) {
    console.error('create-checkout-session error:', error)
    return { statusCode: 500, headers, body: JSON.stringify({ error: 'Failed to create checkout session' }) }
  }
}
