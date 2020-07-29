import {
  ensureFileSync,
  writeJsonSync,
} from "https://deno.land/std@0.61.0/fs/mod.ts";

async function writeFile(path: string, text: string): Promise<void> {
  return await Deno.writeTextFile(path, text);
}

const write = writeFile("./build/hello.txt", "Hello World!");

write.then(() => console.log("Written file"));

function writeJson(path: string, data: object): string {
  try {
    ensureFileSync(path);
    writeJsonSync(path, data);

    return "Written to " + path;
  } catch (e) {
    return e.message;
  }
}

console.log(writeJson("./build/data.json", { hello: "World" }));
