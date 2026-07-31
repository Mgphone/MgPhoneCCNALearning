import type { Handler } from '@netlify/functions'
import Stripe from 'stripe'
import { getAdmin } from './_lib/supabase'
import { sendThankYouEmail } from './_lib/email'
import { getStripe } from './_lib/stripe'

export const handler: Handler = async (event) => {
  const signature = event.headers['stripe-signature']
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

  if (!signature || !webhookSecret) {
    console.error('stripe-webhook: missing signature or webhook secret')
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid request' }) }
  }

  let stripeEvent: Stripe.Event
  try {
    stripeEvent = getStripe().webhooks.constructEvent(event.body ?? '', signature, webhookSecret)
  } catch (error) {
    console.error('stripe-webhook: signature verification failed', error)
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid signature' }) }
  }

  if (stripeEvent.type === 'checkout.session.completed') {
    const session = stripeEvent.data.object as Stripe.Checkout.Session
    const amount = session.amount_total
    const currency = session.currency ?? 'gbp'
    const email = session.customer_details?.email ?? session.customer_email ?? null
    const paymentIntent =
      typeof session.payment_intent === 'string' ? session.payment_intent : session.payment_intent?.id ?? null
    const userId = session.client_reference_id || session.metadata?.userId || null

    try {
      const { error: insertError } = await getAdmin().from('donations').insert({
        email,
        amount,
        currency,
        stripe_session_id: session.id,
        payment_intent: paymentIntent,
        payment_status: 'paid',
        user_id: userId,
      })
      if (insertError) {
        console.error('stripe-webhook: failed to save donation', insertError)
      }
    } catch (error) {
      console.error('stripe-webhook: unexpected error saving donation', error)
    }

    if (email) {
      try {
        await sendThankYouEmail(email, amount ?? 0, currency)
        console.log('stripe-webhook: thank-you email sent to', email)
      } catch (error) {
        console.error('stripe-webhook: failed to send thank-you email', error)
      }
    }
  }

  return { statusCode: 200, body: JSON.stringify({ received: true }) }
}
