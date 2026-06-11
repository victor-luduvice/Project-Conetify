import { saveLead, getAllLeads } from "@/lib/db";

export async function saveNewsletterLead(email: string) {
  const saved = saveLead(email);

  await Promise.allSettled([syncMailchimp(email), syncGoogleSheets(email)]);

  return saved;
}

export function getNewsletterLeads() {
  return getAllLeads();
}

async function syncMailchimp(email: string) {
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const listId = process.env.MAILCHIMP_LIST_ID;

  if (!apiKey || !listId) {
    return;
  }

  const [, dc] = apiKey.split("-");
  if (!dc) {
    return;
  }

  const url = `https://${dc}.api.mailchimp.com/3.0/lists/${listId}/members`;
  const body = {
    email_address: email,
    status: "subscribed",
  };

  await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`any:${apiKey}`).toString("base64")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
}

async function syncGoogleSheets(email: string) {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!webhookUrl) {
    return;
  }

  await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      createdAt: new Date().toISOString(),
    }),
  });
}
