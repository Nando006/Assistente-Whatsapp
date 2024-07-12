import { GoogleGenerativeAI } from "@google/generative-ai";
import { config } from "dotenv";
import { IStudioIA } from "@/interfaces/IStudioIA.js";
import History from "./History.js";
config();

const genAI = new GoogleGenerativeAI(process.env.STUDIO_APIKEY || '');

export default async function AIStudio({ arrayMsgModel, arrayMsgUser, msg, assistant }: IStudioIA) {
   const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });
   const chat = model.startChat({
      history: History(arrayMsgModel, arrayMsgUser, assistant),
      generationConfig: {
         maxOutputTokens: 100,
      },
   });

   const result = await chat.sendMessage(msg);
   const response = await result.response;
   const text = response.text();
   return text;
};