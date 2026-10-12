import fs from "fs";
import path from "path";
import { hasSupabaseConfig, supabaseRequest } from "@/lib/supabase";

type NewsletterLead = { email: string; createdAt: string };
type SupabaseLead = { email: string; created_at: string };

const dataDir = path.join(process.cwd(), "data");
const dataFile = path.join(dataDir, "newsletter-leads.json");

function ensureDataDirectory() {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

function ensureDataFile() {
  ensureDataDirectory();
  if (!fs.existsSync(dataFile)) {
    fs.writeFileSync(dataFile, "[]", "utf8");
  }
}

function readLeads() {
  ensureDataFile();
  const raw = fs.readFileSync(dataFile, "utf8") || "[]";
  return JSON.parse(raw) as Array<{ email: string; createdAt: string }>;
}

function writeLeads(leads: Array<{ email: string; createdAt: string }>) {
  ensureDataDirectory();
  fs.writeFileSync(dataFile, JSON.stringify(leads, null, 2), "utf8");
}

function ensureLocalStorage() {
  if (process.env.NODE_ENV === "production") {
    throw new Error("Configure Supabase for persistent production storage.");
  }
}

export async function getAllLeads(): Promise<NewsletterLead[]> {
  if (hasSupabaseConfig()) {
    const leads = await supabaseRequest<SupabaseLead[]>(
      "newsletter_leads?select=email,created_at&order=created_at.desc",
    );
    return leads.map(({ email, created_at }) => ({ email, createdAt: created_at }));
  }

  ensureLocalStorage();
  return readLeads().sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}

export async function saveLead(email: string): Promise<boolean> {
  if (hasSupabaseConfig()) {
    const inserted = await supabaseRequest<SupabaseLead[]>(
      "newsletter_leads?on_conflict=email",
      {
        method: "POST",
        body: JSON.stringify({ email }),
        prefer: "resolution=ignore-duplicates,return=representation",
      },
    );
    return inserted.length > 0;
  }

  ensureLocalStorage();
  const leads = readLeads();
  const exists = leads.some((lead) => lead.email === email);

  if (exists) {
    return false;
  }

  leads.push({ email, createdAt: new Date().toISOString() });
  writeLeads(leads);
  return true;
}
