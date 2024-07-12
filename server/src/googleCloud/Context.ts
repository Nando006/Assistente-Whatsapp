import { Message } from "@wppconnect-team/wppconnect";
import AIStudio from "./IAStudio.js";
import { IContextGoogle, ITimeClearContext } from "@/interfaces/IContextGoogle.js";
import { IUser } from "@/interfaces/User.js";

const context: IContextGoogle = {};
const timeClear: ITimeClearContext = {};

export default async function Context(message: Message, user: IUser, assistant?: boolean) {
   if (!context[user.phone]) {
      context[user.phone] = {
         user: [],
         model: [],
      };
   };

   const result = await AIStudio({
      arrayMsgModel: context[user.phone].model,
      arrayMsgUser: context[user.phone].user,
      msg: message.body || '',
      assistant
   })
      .catch((e) => console.log(e));

   if (result) {
      context[user.phone].user.push({ text: `Usuário: ${message.notifyName} - ${message?.body?.trim() || ''}` });
      context[user.phone].model.push({ text: result });

      clearTimeout(timeClear[user.phone]);
      timeClear[user.phone] = setTimeout(() => {
         context[user.phone] = {
            user: [],
            model: [],
         };
      }, 86400000);

      return result;
   };
};