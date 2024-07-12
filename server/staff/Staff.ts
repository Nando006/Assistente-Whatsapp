import { Message, Whatsapp } from "@wppconnect-team/wppconnect";
import Context from "../src/googleCloud/Context.js";
import { IUser } from "@/interfaces/User.js";
import { IConfigBot } from "@/interfaces/ConfigBot.js";
import UserUpdate from "../src/user/UserUpdate.js";

export default function Staff(client: Whatsapp, message: Message, user: IUser, config: IConfigBot) {
   Context(message, user).then((result) => {
      if (typeof result === 'string') {
         if (result.toLowerCase().includes('statusoff')) {
            UserUpdate(user.phone, { status: false }, config.path.users);
            setTimeout(() => {
               UserUpdate(user.phone, { status: true }, config.path.users);
            }, 1800000);
            return;
         };
         client.sendText(message.from, result);
      };
   }).catch((e) => console.log(e));
};