interface IJson {
   users: string;
};

export interface IConfigBot {
   nameBot: string;
   nameOwner: string;
   numberOwner: string;
   sexBot: string;
   path: IJson;
   status: boolean;
   assistant: boolean;
   staff: boolean;
};