import { Query } from "../abstract_class/Query";

export interface IDataBase {
    readonly uri: string;
    readonly user: string;
    readonly password: string;
    readonly database: string;
    readonly host: string;
    readonly port: number;
  
    connect(): void;
    query<T>(): Query<T>
    disconnect(): void;
  }
  
  
  