import fs from "fs";
import path from "path";
import { hasSupabaseConfig, supabaseRequest } from "@/lib/supabase";

export type CommentData = {
  name: string;
  rating: number;
  comment: string;
  createdAt: string;
};

type SupabaseComment = {
  name: string;
  rating: number;
  comment: string;
  created_at: string;
};

const dataDir = path.join(process.cwd(), "data");
const dataFile = path.join(dataDir, "comments.json");

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

function readComments(): CommentData[] {
  ensureDataFile();
  const raw = fs.readFileSync(dataFile, "utf8") || "[]";
  return JSON.parse(raw) as CommentData[];
}

function writeComments(comments: CommentData[]) {
  ensureDataDirectory();
  fs.writeFileSync(dataFile, JSON.stringify(comments, null, 2), "utf8");
}

function ensureLocalStorage() {
  if (process.env.NODE_ENV === "production") {
    throw new Error("Configure Supabase for persistent production storage.");
  }
}

export async function getAllComments(): Promise<CommentData[]> {
  if (hasSupabaseConfig()) {
    const comments = await supabaseRequest<SupabaseComment[]>(
      "comments?select=name,rating,comment,created_at&order=created_at.desc",
    );
    return comments.map(({ name, rating, comment, created_at }) => ({
      name,
      rating,
      comment,
      createdAt: created_at,
    }));
  }

  ensureLocalStorage();
  return readComments().sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}

export async function saveComment(
  name: string,
  rating: number,
  comment: string,
): Promise<CommentData> {
  if (hasSupabaseConfig()) {
    const [saved] = await supabaseRequest<SupabaseComment[]>("comments", {
      method: "POST",
      body: JSON.stringify({ name, rating, comment }),
      prefer: "return=representation",
    });
    return {
      name: saved.name,
      rating: saved.rating,
      comment: saved.comment,
      createdAt: saved.created_at,
    };
  }

  ensureLocalStorage();
  const comments = readComments();
  const newComment = {
    name,
    rating,
    comment,
    createdAt: new Date().toISOString(),
  };
  comments.push(newComment);
  writeComments(comments);
  return newComment;
}
