// SPDX-License-Identifier: MIT
import * as fs from "node:fs";
import * as path from "node:path";

const LINE =
  "Monday morning, my laptop offered to restore my last session. I clicked yes, hoping it meant last Friday.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, "entry.txt"), LINE, "utf8");
