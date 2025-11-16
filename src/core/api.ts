import type { ConsentState, ConsentUpdateSource } from "../types";

export interface RemoteConsentPayload {
  consent: ConsentState;
  timestamp: number;
  siteId?: string;
  source?: ConsentUpdateSource;
}

export async function sendConsentToEndpoint(
  endpoint: string,
  payload: RemoteConsentPayload
) {
  if (!endpoint) return;
  try {
    await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    console.warn("[LoveCookies] Failed to send consent payload", error);
  }
}
