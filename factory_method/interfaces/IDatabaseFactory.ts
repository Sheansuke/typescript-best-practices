import { IDataBase } from "./IDataBase";

export interface IDatabaseFactory {
    createDabatase(): IDataBase;
  }