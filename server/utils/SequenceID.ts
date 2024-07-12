import { existsSync, readFileSync } from "fs";

export default function SequenceID(path: string) {
   try {
      if (existsSync(path)) {
         const data = readFileSync(path, "utf8");
         const users = JSON.parse(data);
         const lastUserId = users.length > 0 ? users[users.length - 1].id : 0;
         return lastUserId + 1;
      };
      return 0;
   } catch (e) {
      console.log(e);
   };
};