import { IUser } from "@/interfaces/User.js";
import DataSaveJson from "@/server/utils/DataSaveJson.js";
import LoaderJson from "@/server/utils/LoaderJson.js";
import SequenceID from "@/server/utils/SequenceID.js";
import { Message } from "@wppconnect-team/wppconnect";

export default function UserCreate(filePath: string, message: Message): IUser | boolean {
   // Carregar JSON
   const users: IUser[] = LoaderJson(filePath);
   // Encontrar o usuário
   const user = users.find((user) => user.phone === message.sender.id.toString());

   if (user) return user; // Se o usuário for encontrado a função finaliza aqui

   const dataUser: IUser = {
      id: SequenceID(filePath),
      name: message.notifyName,
      phone: message.sender.id.toString(),
      status: true,
      choice: true,
      assistant: false,
   }; // Cria o usuário

   const save = DataSaveJson(users, dataUser, filePath); // Salva o usuário no JSON

   if (save) return dataUser; // Se salvar o usuário no JSON ele me retorna o usuário

   return false;
};