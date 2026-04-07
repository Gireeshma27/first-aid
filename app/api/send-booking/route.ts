import { NextRequest, NextResponse } from "next/server"
import sgMail from "@sendgrid/mail"

// Initialize SendGrid with API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { fullName, organisation, participants, phone, email, message } = body

    if (!fullName || !phone || !email) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      )
    }

    const msg = {
      to: "Admin@firstaidnetworkaustralia.com.au",
      from: "Admin@firstaidnetworkaustralia.com.au", // Must be a verified sender in SendGrid
      subject: "New Training Booking Request",
      html: `
        <div style="font-family: Inter, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #ffffff; border: 1px solid #e5e5e5; border-radius: 12px;">
          <div style="background: #3B3969; padding: 24px 32px; border-radius: 8px; margin-bottom: 32px;">
            <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 700;">New Training Booking Request</h1>
            <p style="color: rgba(255,255,255,0.75); margin: 8px 0 0; font-size: 14px;">Submitted via firstaidnetworkaustralia.com.au</p>
          </div>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #666666; font-size: 14px; width: 40%; font-weight: 600;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #333333; font-size: 14px;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #666666; font-size: 14px; font-weight: 600;">Organisation</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #333333; font-size: 14px;">${organisation || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #666666; font-size: 14px; font-weight: 600;">Participants</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #333333; font-size: 14px;">${participants || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #666666; font-size: 14px; font-weight: 600;">Phone</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #333333; font-size: 14px;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #666666; font-size: 14px; font-weight: 600;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #333333; font-size: 14px;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #666666; font-size: 14px; font-weight: 600; vertical-align: top;">Message</td>
              <td style="padding: 12px 0; color: #333333; font-size: 14px;">${message || "N/A"}</td>
            </tr>
          </table>
          <div style="margin-top: 32px; padding: 16px; background: #f9f9f9; border-radius: 8px; text-align: center;">
            <p style="margin: 0; color: #999999; font-size: 12px;">First Aid Network Australia | Booking Notification</p>
          </div>
        </div>
      `,
      replyTo: email, // Allow direct reply to the customer
    }

    await sgMail.send(msg)

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("Booking email error:", error)
    if (error.response) {
      console.error("SendGrid error body:", error.response.body)
    }
    return NextResponse.json(
      { error: "Failed to send booking request. Please try again." },
      { status: 500 }
    )
  }
}
