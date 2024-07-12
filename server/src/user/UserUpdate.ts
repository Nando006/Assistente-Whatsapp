import { IUser } from "@/interfaces/User.js";
import { readFileSync, writeFileSync } from "fs";

type UserUpdate = { [key: string]: any };

export default function UserUpdate(phone: string, update: Partial<IUser>, path: string) {
   try {
      const json = readFileSync(path, 'utf8');
      const data: IUser[] = JSON.parse(json);
      const updatedData: IUser[] = data.map((item: IUser) => {
         if (item.phone === phone) {
            return { ...item, ...update }
         } else {
            return item;
         };
      });

      writeFileSync(path, JSON.stringify(updatedData, null, 2), "utf8");
   } catch (e) {
      console.log(e);
   };
};