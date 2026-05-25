import fs from "node:fs";
import path from "node:path";
import LegacySkyShield from "../components/legacy/LegacySkyShield";

export const dynamic = "force-static";

function legacyBodyMarkup() {
  const legacyHtml = fs.readFileSync(path.join(process.cwd(), "sky-shield-home", "index.html"), "utf8");
  const bodyMatch = legacyHtml.match(/<body>([\s\S]*?)<\/body>/);

  if (!bodyMatch) {
    throw new Error("Unable to extract SKY SHIELD legacy body markup.");
  }

  return bodyMatch[1].replace(/<script[\s\S]*?<\/script>/g, "").trim();
}

export default function HomePage() {
  return <LegacySkyShield markup={legacyBodyMarkup()} />;
}
