import { Whatsapp } from "@wppconnect-team/wppconnect";
import CreateJson from "server/utils/CreateJson.js";
import { IConfigBot } from "@/interfaces/ConfigBot.js";
import UserCreate from "server/src/user/UserCreate.js";
import { configBot } from "@/config/bot.js";
import Assistant from "../assistant/Assistant.js";
import Staff from "../staff/Staff.js";

export default function Sys(client: Whatsapp, config: IConfigBot) {
   CreateJson(config.path.users);

   client.onMessage(message => {
      if (message.body && !message.isGroupMsg) {
         const user = UserCreate(config.path.users, message);
         if (typeof user === "boolean") return;

         if (user.phone === config.numberOwner) {
            if (message.body.toLowerCase().includes('status')) {
               configBot.status = !config.status;
               return;
            };
            if (message.body.toLowerCase().includes('assistant')) {
               configBot.assistant = !configBot.assistant;
            };
            if (message.body.toLowerCase().includes('staff')) {
               configBot.staff = !configBot.staff;
            };
            if (message.body.toLowerCase().includes('state')) {
               client.sendText(message.from, `*Status:* ${configBot.status ? "true" : "false"}\n*Assistente:* ${configBot.assistant ? "true" : "false"}\n*Pessoal:* ${configBot.staff ? "true" : "false"}`);
            };
         };

         if (!config.status) return;
         if (!user.status) return;

         if (message.body.toLowerCase() === "#perfil") {
            client.sendText(message.from, `Nome: ${user.name}\nEscolha: ${user.choice}\nAssistente: ${user.assistant}\nStatus: ${user.status}`);
            return;
         };

         if (config.assistant) {
            Assistant(client, message, user, config);
            return;
         };

         if (config.staff) {
            Staff(client, message, user, config);
            return;
         };
      };
   });
};