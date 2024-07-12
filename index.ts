import { configBot, createOptions } from "@/config/bot.js";
import CreateClient from "server/CreateClient.js";
import Sys from "server/start/Sys.js"
import Server from "./server/Server.js";

CreateClient({
   ...createOptions,
   catchQR: (base64Qrimg) => {
      Server(base64Qrimg);
   },
}).then((client) => Sys(client, configBot)).catch(e => console.log(e));

