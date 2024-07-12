import { IConfigBot } from "@/interfaces/ConfigBot.js";
import { IUser } from "@/interfaces/User.js";
import { Message, Whatsapp } from "@wppconnect-team/wppconnect";
import UserUpdate from "../src/user/UserUpdate.js";
import GetRandomNumber from "../utils/GetRandomNumber.js";
import Context from "../src/googleCloud/Context.js";

export default function Assistant(client: Whatsapp, message: Message, user: IUser, config: IConfigBot) {
   if (user.choice) {
      client.sendListMessage(message.from, {
         buttonText: 'Selecionar',
         description: 'Olá tudo bem ? Não estou disponível agora, clique em selecionar e escolha uma das opções\n\nPortfólio: https://FernandoSergio.dev.br',
         sections: [
            {
               title: 'Opções a Escolher',
               rows: [
                  {
                     rowId: '1',
                     title: 'Assistente',
                     description: `Selecione para conversar com o assistente`,
                  },
                  {
                     rowId: '2',
                     title: 'LinkedIn',
                     description: 'Acesse meu LinkedIn',
                  },
                  {
                     rowId: '3',
                     title: 'Github',
                     description: 'Acesse meu Github',
                  }
               ],
            },
         ],
      }).catch(e => console.log(e));
      UserUpdate(user.phone, { choice: false }, config.path.users);
      setTimeout(() => {
         UserUpdate(user.phone, { choice: true }, config.path.users);
         UserUpdate(user.phone, { assistant: false }, config.path.users);
      }, GetRandomNumber(10800000, 21600000));
   };

   if (message.body.toLowerCase().includes("assistente")) {
      UserUpdate(user.phone, { assistant: !user.assistant }, config.path.users);
      client.sendText(message.from, `Pode iniciar sua conversa com a assistente ${config.nameBot}.\n\nCaso queira desativar o assistente é só clicar em selecionar novamente.`);
      return;
   };

   if (message.body.toLowerCase().includes("acesse meu linkedin")) {
      client.sendText(message.from, "https://www.linkedin.com/in/nando006?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app\n\n_Para selecionar outra opção só clicar de novo em selecionar._");
      return;
   };

   if (message.body.toLowerCase().includes("acesse meu github")) {
      client.sendText(message.from, "https://github.com/Nando006\n\n_Para selecionar outra opção só clicar de novo em selecionar._");
      return;
   };

   if (user.assistant) {
      console.log('entrou no assistente')
      Context(message, user, true).then((result) => {
         if (typeof result === "string") {
            client.sendText(message.from, result);
            return;
         };
      }).catch((e) => console.log(e));
   };
};