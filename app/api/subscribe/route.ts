import { NextRequest, NextResponse } from "next/server"
import sgMail from "@sendgrid/mail"

// Initialize SendGrid with API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email } = body

    if (!email) {
      return NextResponse.json(
        { error: "Email address is required." },
        { status: 400 }
      )
    }

    // Email to Admin — new subscriber notification
    const msg = {
      to: "Admin@firstaidnetworkaustralia.com.au",
      from: "Admin@firstaidnetworkaustralia.com.au",
      subject: "New Newsletter Subscriber",
      html: `
        <div style="font-family: Inter, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #ffffff; border: 1px solid #e5e5e5; border-radius: 12px;">
          <div style="background: #3B3969; padding: 24px 32px; border-radius: 8px; margin-bottom: 32px;">
            <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 700;">New Newsletter Subscriber</h1>
            <p style="color: rgba(255,255,255,0.75); margin: 8px 0 0; font-size: 14px;">Someone has subscribed via firstaidnetworkaustralia.com.au</p>
          </div>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; color: #666666; font-size: 14px; width: 40%; font-weight: 600;">Email</td>
              <td style="padding: 12px 0; color: #333333; font-size: 14px;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #666666; font-size: 14px; font-weight: 600;">Subscribed At</td>
              <td style="padding: 12px 0; color: #333333; font-size: 14px;">${new Date().toLocaleString("en-AU", { timeZone: "Australia/Sydney" })}</td>
            </tr>
          </table>
          <div style="margin-top: 32px; padding: 16px; background: #f9f9f9; border-radius: 8px; text-align: center;">
            <p style="margin: 0; color: #999999; font-size: 12px;">First Aid Network Australia | Newsletter Subscription</p>
          </div>
        </div>
      `,
    }

    await sgMail.send(msg)

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("Subscribe email error:", error)
    if (error.response) {
      console.error("SendGrid error body:", error.response.body)
    }
    return NextResponse.json(
      { error: "Failed to subscribe. Please try again." },
      { status: 500 }
    )
  }
}
