import { readJsonSync } from "https://deno.land/std@0.61.0/fs/mod.ts";
import { fromFileUrl } from "https://deno.land/std@0.61.0/path/mod.ts";

async function readFile(path: string): Promise<string> {
  return await Deno.readTextFile(new URL(path, import.meta.url));
}

const text = readFile("./assets/people.json")

text.then(response => console.log(response));

function readJson(path: string): object {
  const file = fromFileUrl(new URL(path, import.meta.url));
  return readJsonSync(file) as object;
}

console.log(readJson("./assets/people.json"));
