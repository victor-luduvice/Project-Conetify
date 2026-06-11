import fs from "fs";
import path from "path";

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

export function getAllLeads() {
  return readLeads().sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}

export function saveLead(email: string) {
  const leads = readLeads();
  const exists = leads.some((lead) => lead.email === email);

  if (exists) {
    return false;
  }

  leads.push({ email, createdAt: new Date().toISOString() });
  writeLeads(leads);
  return true;
}
