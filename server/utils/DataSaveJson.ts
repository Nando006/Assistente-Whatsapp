import { writeFileSync } from "fs";

export default function DataSaveJson(json: Array<Object>, data: Object, filePath: string) {
   try {
      json.push(data);
      writeFileSync(filePath, JSON.stringify(json, null, 2), "utf-8");
      return true
   } catch (e) {
      console.log(e);
      throw e;
   };
};