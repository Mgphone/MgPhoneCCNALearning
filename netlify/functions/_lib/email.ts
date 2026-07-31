import nodemailer from 'nodemailer'

export async function sendThankYouEmail(to: string, amount: number, currency: string): Promise<void> {
  const gmailUser = process.env.GMAIL_USER
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD

  if (!gmailUser || !gmailAppPassword) {
    throw new Error('Missing GMAIL_USER or GMAIL_APP_PASSWORD')
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailUser,
      pass: gmailAppPassword,
    },
  })

  const formatted = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: currency.toUpperCase(),
  }).format(amount / 100)

  await transporter.sendMail({
    from: `MyCCNA <${gmailUser}>`,
    to,
    subject: 'Thank you for supporting MyCCNA ☕',
    text: [
      `Thank you for your donation of ${formatted}!`,
      '',
      'Your generosity helps us keep our free CCNA quizzes, labs and learning',
      'materials available to everyone, completely free of charge.',
      '',
      'Whether it is a one-off coffee or a regular contribution, every single',
      'donation makes a real difference and keeps this project running.',
      '',
      'Thanks again for your support!',
      '',
      'The MyCCNA team',
    ].join('\n'),
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 480px; margin: 0 auto; padding: 24px; background: #020617; border-radius: 16px; color: #e2e8f0;">
        <div style="font-size: 40px; text-align: center; margin-bottom: 8px;">☕</div>
        <h1 style="color: #ffffff; text-align: center; font-size: 22px; margin: 0 0 16px;">Thank you for supporting MyCCNA!</h1>
        <p style="font-size: 15px; line-height: 1.6;">Your donation of <strong style="color: #22d3ee;">${formatted}</strong> means the world to us.</p>
        <p style="font-size: 15px; line-height: 1.6;">Your generosity helps us keep our <strong>free CCNA quizzes, labs and learning materials</strong> available to everyone, completely free of charge.</p>
        <p style="font-size: 15px; line-height: 1.6;">Whether it's a one-off coffee or a regular contribution, every single donation makes a real difference and keeps this project running.</p>
        <p style="font-size: 15px; line-height: 1.6; margin-bottom: 0;">Thanks again for your support!</p>
        <p style="color: #64748b; font-size: 13px; margin-top: 24px;">— The MyCCNA team</p>
      </div>
    `,
  })
}
