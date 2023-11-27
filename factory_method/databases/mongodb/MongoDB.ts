import { Database } from "../../Database";
import { MongoDBQuery } from "./MongoDBQuery";

export class MongoDB extends Database {
    uri: string;
    user: string;
    password: string;
    database: string;
    host: string;
    port: number;
  
  
    public query<T>(): MongoDBQuery<T> {
      return new MongoDBQuery()
    }
  }
