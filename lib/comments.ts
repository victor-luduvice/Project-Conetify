import fs from "fs";
import path from "path";

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

function readComments() {
  ensureDataFile();
  const raw = fs.readFileSync(dataFile, "utf8") || "[]";
  return JSON.parse(raw) as Array<{
    name: string;
    rating: number;
    comment: string;
    createdAt: string;
  }>;
}

function writeComments(
  comments: Array<{
    name: string;
    rating: number;
    comment: string;
    createdAt: string;
  }>,
) {
  ensureDataDirectory();
  fs.writeFileSync(dataFile, JSON.stringify(comments, null, 2), "utf8");
}

export function getAllComments() {
  return readComments().sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}

export function saveComment(name: string, rating: number, comment: string) {
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
