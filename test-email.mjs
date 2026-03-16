/**
 * Test script — Gmail API booking email
 * Run: node test-email.mjs
 */

import { readFileSync } from "fs"
import { google } from "googleapis"

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

const { GMAIL_USER, GMAIL_CLIENT_ID, GMAIL_CLIENT_SECRET, GMAIL_REFRESH_TOKEN } = env

if (!GMAIL_USER || !GMAIL_CLIENT_ID || !GMAIL_CLIENT_SECRET || !GMAIL_REFRESH_TOKEN) {
  console.error("❌  One or more Gmail API credentials are missing in .env.local.")
  process.exit(1)
}

console.log(`\n📧  Sending test email via Gmail API from: ${GMAIL_USER}\n`)

const auth = new google.auth.OAuth2(GMAIL_CLIENT_ID, GMAIL_CLIENT_SECRET)
auth.setCredentials({ refresh_token: GMAIL_REFRESH_TOKEN })
const gmail = google.gmail({ version: "v1", auth })

const rawLines = [
  `From: "First Aid Network Australia" <${GMAIL_USER}>`,
  `To: admin@firstaidnetworkaustralia.com.au`,
  `Subject: ✅ Test — Gmail API Email Working`,
  `MIME-Version: 1.0`,
  `Content-Type: text/plain; charset=UTF-8`,
  ``,
  `This is a test email from the First Aid Network Australia booking system.`,
  ``,
  `If you received this, the Gmail API configuration is working correctly.`,
  ``,
  `Name: Test User`,
  `Organisation: Test Org`,
  `Phone: 0400 000 000`,
  `Email: test@example.com`,
  `Message: This is a test submission.`,
]

const raw = Buffer.from(rawLines.join("\r\n"))
  .toString("base64")
  .replace(/\+/g, "-")
  .replace(/\//g, "_")
  .replace(/=+$/, "")

try {
  const res = await gmail.users.messages.send({
    userId: "me",
    requestBody: { raw },
  })
  console.log("✅  Email sent successfully via Gmail API!")
  console.log(`   Message ID: ${res.data.id}`)
} catch (err) {
  console.error("❌  Failed to send email:")
  console.error(err.message)
  if (err.message.includes("invalid_grant")) {
    console.error("\n⚠️   The refresh token is expired or revoked.")
    console.error("    Regenerate it at: https://developers.google.com/oauthplayground")
    console.error("    Scope needed: https://www.googleapis.com/auth/gmail.send")
  }
}
