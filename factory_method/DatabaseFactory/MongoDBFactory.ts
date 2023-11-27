import { Database, DatabaseProperty } from "../Database";
import { MongoDB } from "../databases/mongodb/MongoDB";
import { IDatabaseFactory } from "../interfaces/IDatabaseFactory";

export class MongoDBFactory implements IDatabaseFactory {
    createDabatase(uri?: string, properties?: DatabaseProperty): Database {
      return new MongoDB(uri, properties);
    }
  }
