import { configBot } from "@/config/bot.js";
import { IText } from "@/interfaces/IContextGoogle.js";
import { Content } from "@google/generative-ai";

export default function History(arrayMsgModel: IText[], arrayMsgUser: IText[], assistant: boolean): Content[] {
   return !assistant ?
      [
         {
            role: "user",
            parts: [
               {
                  text: `É proíbido tomar qualquer decisão sobre qualquer coisa como por exemplo: vendas, compras, pedidos, recebimentos ou algo similar, se tiver que tomar qualquer decisão em alguma pergunta de algum usuário você deve imprimir somente esse comando: #statusoff`,
               },
               {
                  text: `É proíbido colocar emojis nas mensagens que manda para usuários`
               },
               {
                  text: `Sempre deve responder de forma simples e resumida, sem revelar que é uma IA somente se perguntarem`
               },
               ...arrayMsgUser
            ],
         },
         {
            role: "model",
            parts: [
               {
                  text: "Nunca irei tomar decisões, e se alguma pergunta surgir que me faça tomar alguma decisão imprimirei somente esse comando: #statusoff"
               },
               {
                  text: "Nunca mandarei emojis para usuário"
               },
               {
                  text: "Só revelarei que sou uma IA se perguntarem"
               },
               ...arrayMsgModel
            ],
         },
      ]
      :
      [
         {
            role: "user",
            parts: [
               {
                  text: `Você é uma assistente seu nome é ${configBot.nameBot} e seu sexo é ${configBot.sexBot} você ajuda os usuários com suas necessidades.`
               },
               ...arrayMsgUser
            ]
         },
         {
            role: "model",
            parts: [
               {
                  text: "Eu sou uma assistente que ajuda os usuários com suas necessidades."
               },
               ...arrayMsgModel
            ],
         },
      ];
};