import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      selectedGrades,
      preferredDate,
      preferredTime,
      referralSource,
    } = body;

    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json(
        { error: "First Name, Last Name, Email, and Phone Number are required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn("RESEND_API_KEY is not set. Simulating successful submission in development.");
      return NextResponse.json({
        success: true,
        message: "Simulated submission (RESEND_API_KEY not configured).",
      });
    }

    const resend = new Resend(apiKey);

    const gradesText =
      selectedGrades && Array.isArray(selectedGrades) && selectedGrades.length > 0
        ? selectedGrades.join(", ")
        : "None selected";

    const { data, error } = await resend.emails.send({
      from: "Citadel Christian School <notifications@indevasa.com>",
      to: ["info@citadelchristian.org"],
      replyTo: email,
      subject: `New Campus Tour Request: ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; rounded: 8px;">
          <div style="background-color: #581076; padding: 15px 20px; border-radius: 6px; color: #ffffff; text-align: center; margin-bottom: 20px;">
            <h2 style="margin: 0; font-size: 20px;">New Campus Tour Request</h2>
            <p style="margin: 5px 0 0; font-size: 13px; color: #e9d5ff;">Citadel Christian School Admissions</p>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; width: 180px;">Parent / Guardian:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0;"><a href="mailto:${email}" style="color: #581076;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold;">Phone Number:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold;">Grade(s) of Interest:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; color: #581076; font-weight: 600;">${gradesText}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold;">Preferred Date:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0;">${preferredDate || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold;">Preferred Time:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0;">${preferredTime || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold;">Referral Source:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0;">${referralSource || "Not specified"}</td>
            </tr>
          </table>

          <p style="margin-top: 25px; font-size: 12px; color: #888; text-align: center;">
            This email was sent automatically from the Citadel Christian School website tour request form.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    console.error("Schedule tour handler exception:", err);
    return NextResponse.json(
      { error: err.message || "Internal server error" },
      { status: 500 }
    );
  }
}
