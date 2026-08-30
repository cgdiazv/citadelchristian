import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    const rawKey = process.env.RESEND_API_KEY;
    const apiKey = rawKey?.replace(/^RESEND_API_KEY=/, "").trim();

    if (!apiKey) {
      console.warn("RESEND_API_KEY is not set. Simulating successful submission.");
      return NextResponse.json({
        success: true,
        message: "Simulated submission (RESEND_API_KEY not configured).",
      });
    }

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: "Citadel Christian School <notifications@indevasa.com>",
      to: ["info@citadelchristian.org"],
      replyTo: email,
      subject: `New Newsletter Subscriber: ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
          <div style="background-color: #581076; padding: 15px 20px; border-radius: 6px; color: #ffffff; text-align: center; margin-bottom: 20px;">
            <h2 style="margin: 0; font-size: 20px;">New Newsletter Subscription</h2>
            <p style="margin: 5px 0 0; font-size: 13px; color: #e9d5ff;">Citadel Christian School Website</p>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; width: 140px;">Subscriber Email:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                <a href="mailto:${email}" style="color: #581076; font-weight: bold; font-size: 16px;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold;">Submitted On:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666;">
                ${new Date().toLocaleString("en-US", { timeZone: "America/Chicago" })}
              </td>
            </tr>
          </table>

          <div style="margin-top: 25px; padding: 12px 15px; background-color: #f8fafc; border-radius: 6px; border-left: 4px solid #581076; font-size: 13px; color: #555;">
            This subscriber joined via the newsletter signup form in the Citadel Christian School website footer.
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { error: error.message || "Failed to subscribe." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (err: any) {
    console.error("Newsletter submission error:", err);
    return NextResponse.json(
      { error: err.message || "Internal server error." },
      { status: 500 }
    );
  }
}
