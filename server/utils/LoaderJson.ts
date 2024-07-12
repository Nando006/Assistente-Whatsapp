import { readFileSync } from "fs";

export default function LoaderJson(filePath: string): [] {
   const data = readFileSync(filePath, 'utf-8');
   return JSON.parse(data);
};