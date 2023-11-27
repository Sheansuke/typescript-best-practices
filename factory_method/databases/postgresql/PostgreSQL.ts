import { Database } from "../../Database";
import { PostgreSQLQuery } from "./PostgreSQLQuery";

export class PostgreSQL extends Database {
    uri: string;
    user: string;
    password: string;
    database: string;
    host: string;
    port: number;
  
  
    public query<T>(): PostgreSQLQuery<T> {
      return new PostgreSQLQuery()
    }
  }