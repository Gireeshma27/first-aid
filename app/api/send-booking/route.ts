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

    // Email to Admin — booking notification
    const adminMsg = {
      to: "Admin@firstaidnetworkaustralia.com.au",
      from: "Admin@firstaidnetworkaustralia.com.au",
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
      replyTo: email,
    }

    // Email to Client — booking confirmation
    const clientMsg = {
      to: email,
      from: "Admin@firstaidnetworkaustralia.com.au",
      subject: "Booking Confirmation — First Aid Network Australia",
      html: `
        <div style="font-family: Inter, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #ffffff; border: 1px solid #e5e5e5; border-radius: 12px;">
          <div style="background: #3B3969; padding: 24px 32px; border-radius: 8px; margin-bottom: 32px;">
            <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 700;">Thank You for Your Booking Request!</h1>
            <p style="color: rgba(255,255,255,0.75); margin: 8px 0 0; font-size: 14px;">First Aid Network Australia</p>
          </div>
          <p style="color: #333333; font-size: 15px; line-height: 1.6; margin-bottom: 24px;">
            Hi ${fullName},
          </p>
          <p style="color: #333333; font-size: 15px; line-height: 1.6; margin-bottom: 24px;">
            Thank you for submitting a training booking request with First Aid Network Australia. We have received your enquiry and our team will be in touch shortly to discuss your requirements and confirm the details.
          </p>
          <div style="background: #f9f9fb; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
            <h3 style="color: #3B3969; font-size: 14px; font-weight: 700; margin: 0 0 12px;">Your Submission Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #666666; font-size: 13px; width: 40%; font-weight: 600;">Name</td>
                <td style="padding: 8px 0; color: #333333; font-size: 13px;">${fullName}</td>
              </tr>
              ${organisation ? `<tr>
                <td style="padding: 8px 0; color: #666666; font-size: 13px; font-weight: 600;">Organisation</td>
                <td style="padding: 8px 0; color: #333333; font-size: 13px;">${organisation}</td>
              </tr>` : ""}
              ${participants ? `<tr>
                <td style="padding: 8px 0; color: #666666; font-size: 13px; font-weight: 600;">Participants</td>
                <td style="padding: 8px 0; color: #333333; font-size: 13px;">${participants}</td>
              </tr>` : ""}
              <tr>
                <td style="padding: 8px 0; color: #666666; font-size: 13px; font-weight: 600;">Phone</td>
                <td style="padding: 8px 0; color: #333333; font-size: 13px;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666666; font-size: 13px; font-weight: 600;">Email</td>
                <td style="padding: 8px 0; color: #333333; font-size: 13px;">${email}</td>
              </tr>
              ${message ? `<tr>
                <td style="padding: 8px 0; color: #666666; font-size: 13px; font-weight: 600; vertical-align: top;">Message</td>
                <td style="padding: 8px 0; color: #333333; font-size: 13px;">${message}</td>
              </tr>` : ""}
            </table>
          </div>
          <div style="background: #f9f9fb; border: 1px solid #e8e8f0; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
            <h3 style="color: #3B3969; font-size: 14px; font-weight: 700; margin: 0 0 16px;">Our Services</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 12px; vertical-align: top; width: 50%;">
                  <div style="background: #ffffff; border: 1px solid #e5e5e5; border-radius: 8px; padding: 14px 16px;">
                    <p style="margin: 0 0 4px; font-size: 13px; font-weight: 700; color: #333333;">🧪 Drug &amp; Alcohol Testing</p>
                    <p style="margin: 0; font-size: 12px; color: #666666; line-height: 1.5;">Workplace drug and alcohol testing services compliant with Australian standards.</p>
                  </div>
                </td>
                <td style="padding: 10px 12px; vertical-align: top; width: 50%;">
                  <div style="background: #ffffff; border: 1px solid #e5e5e5; border-radius: 8px; padding: 14px 16px;">
                    <p style="margin: 0 0 4px; font-size: 13px; font-weight: 700; color: #333333;">🚑 Event Medical Services</p>
                    <p style="margin: 0; font-size: 12px; color: #666666; line-height: 1.5;">Professional event medical coverage for events of all sizes.</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 12px; vertical-align: top; width: 50%;">
                  <div style="background: #ffffff; border: 1px solid #e5e5e5; border-radius: 8px; padding: 14px 16px;">
                    <p style="margin: 0 0 4px; font-size: 13px; font-weight: 700; color: #333333;">💊 Medicine &amp; Onsite Support</p>
                    <p style="margin: 0; font-size: 12px; color: #666666; line-height: 1.5;">Onsite medical support and medicine management for your workplace.</p>
                  </div>
                </td>
                <td style="padding: 10px 12px; vertical-align: top; width: 50%;">
                  <div style="background: #ffffff; border: 1px solid #e5e5e5; border-radius: 8px; padding: 14px 16px;">
                    <p style="margin: 0 0 4px; font-size: 13px; font-weight: 700; color: #333333;">🎯 Custom &amp; Tailored Training</p>
                    <p style="margin: 0; font-size: 12px; color: #666666; line-height: 1.5;">Bespoke training programs designed around your team's specific needs.</p>
                  </div>
                </td>
              </tr>
            </table>
            <p style="margin: 12px 0 0; text-align: center;">
              <a href="https://firstaidnetworkaustralia.com.au/services" style="color: #ca1254; font-size: 13px; font-weight: 600; text-decoration: none;">View all services →</a>
            </p>
          </div>
          <p style="color: #333333; font-size: 15px; line-height: 1.6; margin-bottom: 8px;">
            If you have any questions in the meantime, feel free to contact us:
          </p>
          <p style="color: #333333; font-size: 14px; line-height: 1.8; margin-bottom: 24px;">
            📞 <a href="tel:0296272659" style="color: #ca1254; text-decoration: none;">(02) 9627 2659</a><br/>
            ✉️ <a href="mailto:info@firstaidnetworkaustralia.com.au" style="color: #ca1254; text-decoration: none;">info@firstaidnetworkaustralia.com.au</a>
          </p>
          <p style="color: #333333; font-size: 15px; line-height: 1.6;">
            Warm regards,<br/>
            <strong>First Aid Network Australia Team</strong>
          </p>
          <div style="margin-top: 32px; padding: 16px; background: #f9f9f9; border-radius: 8px; text-align: center;">
            <p style="margin: 0; color: #999999; font-size: 12px;">First Aid Network Australia | Suite 226, 2–8 Brookhollow Ave, Norwest NSW 2153</p>
          </div>
        </div>
      `,
    }

    // Send both emails in parallel
    await Promise.all([sgMail.send(adminMsg), sgMail.send(clientMsg)])

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
