export interface IText {
   text: string;
};

export interface IContextGoogle {
   [key: string]: {
      user: IText[];
      model: IText[];
   };
};

export interface ITimeClearContext {
   [key: string]: NodeJS.Timeout;
};