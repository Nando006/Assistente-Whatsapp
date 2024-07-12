import { IConfigBot } from "@/interfaces/ConfigBot.js";
import { CreateOptions } from "@wppconnect-team/wppconnect";

export const configBot: IConfigBot = {
   nameBot: 'Sys',
   nameOwner: 'Fernando',
   numberOwner: '556299442181@c.us',
   sexBot: 'Feminino',
   path: {
      users: './json/users.json'
   },
   status: true,
   assistant: false,
   staff: false,
};

export const createOptions: CreateOptions = {
   session: configBot.nameBot,
   browserArgs: [
      '--disable-web-security',
      '--no-sandbox',
      '--disable-web-security',
      '--aggressive-cache-discard',
      '--disable-cache',
      '--disable-application-cache',
      '--disable-offline-load-stale-cache',
      '--disk-cache-size=0',
      '--disable-background-networking',
      '--disable-default-apps',
      '--disable-extensions',
      '--disable-sync',
      '--disable-translate',
      '--hide-scrollbars',
      '--metrics-recording-only',
      '--mute-audio',
      '--no-first-run',
      '--safebrowsing-disable-auto-update',
      '--ignore-certificate-errors',
      '--ignore-ssl-errors',
      '--ignore-certificate-errors-spki-list',
   ],
};