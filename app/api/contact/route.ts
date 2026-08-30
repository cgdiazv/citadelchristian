import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, selectedGrades, message } = body;

    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: "First Name, Last Name, and Email are required." },
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
      subject: `New Contact / Information Request: ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
          <div style="background-color: #581076; padding: 15px 20px; border-radius: 6px; color: #ffffff; text-align: center; margin-bottom: 20px;">
            <h2 style="margin: 0; font-size: 20px;">New Request for Information</h2>
            <p style="margin: 5px 0 0; font-size: 13px; color: #e9d5ff;">Citadel Christian School Website Contact</p>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; width: 180px;">Name:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0;"><a href="mailto:${email}" style="color: #581076;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold;">Grade(s) of Interest:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; color: #581076; font-weight: 600;">${gradesText}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; vertical-align: top;">Message:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; white-space: pre-wrap;">${message || "No message provided"}</td>
            </tr>
          </table>

          <p style="margin-top: 25px; font-size: 12px; color: #888; text-align: center;">
            This email was sent automatically from the Citadel Christian School Contact Us form.
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
    console.error("Contact handler exception:", err);
    return NextResponse.json(
      { error: err.message || "Internal server error" },
      { status: 500 }
    );
  }
}
