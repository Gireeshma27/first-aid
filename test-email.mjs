/**
 * Test script — SendGrid booking email
 * Run: node test-email.mjs
 */

import { readFileSync } from "fs"
import sgMail from "@sendgrid/mail"

// Manually parse .env.local
const envLines = readFileSync(".env.local", "utf-8").split("\n")
const env = {}
for (const line of envLines) {
  const trimmed = line.trim()
  if (!trimmed || trimmed.startsWith("#")) continue
  const eqIndex = trimmed.indexOf("=")
  if (eqIndex === -1) continue
  const key = trimmed.slice(0, eqIndex).trim()
  const value = trimmed.slice(eqIndex + 1).trim()
  env[key] = value
}

const { SENDGRID_API_KEY } = env

if (!SENDGRID_API_KEY) {
  console.error("❌  SENDGRID_API_KEY is missing in .env.local.")
  process.exit(1)
}

sgMail.setApiKey(SENDGRID_API_KEY)

console.log(`\n📧  Sending test email via SendGrid to: Admin@firstaidnetworkaustralia.com.au\n`)

const msg = {
  to: "Admin@firstaidnetworkaustralia.com.au",
  from: "Admin@firstaidnetworkaustralia.com.au", // Must be a verified sender in SendGrid
  subject: "✅ Test — SendGrid Email Working",
  text: `This is a test email from the First Aid Network Australia booking system.

If you received this, the SendGrid configuration is working correctly.

Name: Test User
Organisation: Test Org
Phone: 0400 000 000
Email: test@example.com
Message: This is a test submission.`,
  html: `
    <div style="font-family: Inter, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #ffffff; border: 1px solid #e5e5e5; border-radius: 12px;">
      <div style="background: #3B3969; padding: 24px 32px; border-radius: 8px; margin-bottom: 32px;">
        <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 700;">✅ Test Email - SendGrid Working</h1>
        <p style="color: rgba(255,255,255,0.75); margin: 8px 0 0; font-size: 14px;">Submitted via firstaidnetworkaustralia.com.au</p>
      </div>
      <p style="color: #333333; font-size: 14px;">This is a test email from the First Aid Network Australia booking system.</p>
      <p style="color: #333333; font-size: 14px;">If you received this, the SendGrid configuration is working correctly.</p>
      <table style="width: 100%; border-collapse: collapse; margin-top: 24px;">
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #666666; font-size: 14px; width: 40%; font-weight: 600;">Name</td>
          <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #333333; font-size: 14px;">Test User</td>
        </tr>
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #666666; font-size: 14px; font-weight: 600;">Organisation</td>
          <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #333333; font-size: 14px;">Test Org</td>
        </tr>
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #666666; font-size: 14px; font-weight: 600;">Phone</td>
          <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #333333; font-size: 14px;">0400 000 000</td>
        </tr>
        <tr>
          <td style="padding: 12px 0; color: #666666; font-size: 14px; font-weight: 600;">Email</td>
          <td style="padding: 12px 0; color: #333333; font-size: 14px;">test@example.com</td>
        </tr>
      </table>
      <div style="margin-top: 32px; padding: 16px; background: #f9f9f9; border-radius: 8px; text-align: center;">
        <p style="margin: 0; color: #999999; font-size: 12px;">First Aid Network Australia | Test Email</p>
      </div>
    </div>
  `,
}

try {
  const response = await sgMail.send(msg)
  console.log("✅  Email sent successfully via SendGrid!")
  console.log(`   Status Code: ${response[0].statusCode}`)
} catch (err) {
  console.error("❌  Failed to send email:")
  console.error(err.message)
  if (err.response) {
    console.error("   Response body:", err.response.body)
  }
}
