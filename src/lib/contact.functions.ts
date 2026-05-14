import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const SPREADSHEET_ID = "1qDuLWXr63Vi16q5Cdt6lAzDVaekSMygVpa_vec0s8ts";
const RANGE = "Sheet1!A:F";
const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_sheets/v4";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  company: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => schema.parse(input))
  .handler(async ({ data }) => {
    const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");
    const GOOGLE_SHEETS_API_KEY = process.env.GOOGLE_SHEETS_API_KEY;
    if (!GOOGLE_SHEETS_API_KEY)
      throw new Error("GOOGLE_SHEETS_API_KEY is not configured");

    const url = `${GATEWAY_URL}/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;

    const row = [
      new Date().toISOString(),
      data.name,
      data.company,
      data.email,
      data.phone ?? "",
      data.message ?? "",
    ];

    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "X-Connection-Api-Key": GOOGLE_SHEETS_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ values: [row] }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("Sheets append failed", res.status, text);
      throw new Error(`Sheets append failed [${res.status}]`);
    }

    return { ok: true };
  });
