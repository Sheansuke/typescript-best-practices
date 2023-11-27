import { Query } from "./abstract_class/Query";
import { IDataBase } from "./interfaces/IDataBase";

export type DatabaseProperty = {
    readonly uri?: string;
    readonly user: string;
    readonly password: string;
    readonly database: string;
    readonly host: string;
    readonly port: number;
  };
  
  export abstract class Database implements IDataBase {
    readonly uri: string;
    readonly user: string;
    readonly password: string;
    readonly database: string;
    readonly host: string;
    readonly port: number;
  
    constructor(uri?: string, properties?: DatabaseProperty) {
      const validateProperties = uri != null || properties != null;
      if (!validateProperties) {
        throw new Error("No uri or properties passed");
      }
  
      this.uri = uri;
      this.user = properties?.user;
      this.password = properties?.password;
      this.database = properties?.database;
      this.host = properties?.host;
      this.port = properties?.port;
    }
  
    connect(): void {
      console.log("\n ---------------> Database connected \n");
    }
  
    abstract query<T>(): Query<T>
  
    disconnect(): void {
      console.log("\n ---------------> database disconnected \n");
    }
  }