import { IText } from "./IContextGoogle.js";

export interface IStudioIA {
   msg: string,
   arrayMsgUser: IText[],
   arrayMsgModel: IText[],
   assistant?: boolean;
};