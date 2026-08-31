import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

// Allowed MIME types
const ALLOWED_MIME_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "image/svg+xml",
  "application/pdf",
];

// 15 MB Max file size limit
const MAX_FILE_SIZE = 15 * 1024 * 1024;

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    const folder = (formData.get("folder") as string) || "images";
    const category = (formData.get("category") as string) || "Uploaded Asset";

    if (!file) {
      return NextResponse.json(
        { success: false, error: "No file was provided in the request." },
        { status: 400 }
      );
    }

    // Validate MIME Type
    if (!ALLOWED_MIME_TYPES.includes(file.type)) {
      return NextResponse.json(
        {
          success: false,
          error: `Invalid file type (${file.type}). Allowed types: JPG, PNG, WEBP, GIF, SVG, and PDF.`,
        },
        { status: 400 }
      );
    }

    // Validate File Size
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        {
          success: false,
          error: `File size exceeds maximum limit of 15MB (${(file.size / (1024 * 1024)).toFixed(2)}MB).`,
        },
        { status: 400 }
      );
    }

    // Check if BLOB_READ_WRITE_TOKEN is configured
    if (!process.env.BLOB_READ_WRITE_TOKEN) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Cloud storage is not connected yet. Please configure the storage credentials or contact the administrator.",
          isConfigError: true,
        },
        { status: 503 }
      );
    }

    // Clean filename and assemble destination pathname
    const cleanFileName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_");
    const blobPathname = `${folder}/${Date.now()}-${cleanFileName}`;

    // Upload to Vercel Blob CDN
    const blob = await put(blobPathname, file, {
      access: "public",
    });

    const isPdf = file.type === "application/pdf";

    return NextResponse.json({
      success: true,
      url: blob.url,
      downloadUrl: blob.downloadUrl,
      pathname: blob.pathname,
      name: file.name,
      folder: folder,
      category: category,
      type: isPdf ? "document" : "image",
      size: file.size,
      contentType: file.type,
    });
  } catch (error: unknown) {
    console.error("Upload handler error:", error);
    const message =
      error instanceof Error ? error.message : "Failed to upload file to cloud storage.";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
