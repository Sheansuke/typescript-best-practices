import { Database, DatabaseProperty } from "../Database";
import { PostgreSQL } from "../databases/postgresql/PostgreSQL";
import { IDatabaseFactory } from "../interfaces/IDatabaseFactory";

export class PostgreSQLFactory implements IDatabaseFactory {
    createDabatase(uri?: string, properties?: DatabaseProperty): Database {
      return new PostgreSQL(uri, properties);
    }
  }
  