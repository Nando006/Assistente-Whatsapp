import { create, CreateOptions, Whatsapp } from "@wppconnect-team/wppconnect";

export default async function CreateClient(config: CreateOptions): Promise<Whatsapp> {
   const client: Whatsapp = await create(config).catch((e) => {
      console.log(e);
      throw e; // Propaga o erro para ser tratado fora da função, se necessário
   });

   return client;
};