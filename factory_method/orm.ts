import { DatabaseProperty } from "./Database";
import { MongoDBFactory } from "./DatabaseFactory/MongoDBFactory";
import { PostgreSQLFactory } from "./DatabaseFactory/PostgreSQLFactory";
import { IDataBase } from "./interfaces/IDataBase";

export type DatabaseName = "PostgreSQL" | "MongoDB" | "SQLite";

export interface ISheansukeDatabaseProperty {
  uri?: string;
  properties?: DatabaseProperty;
}

export class SheansukeORM {
  private instante: IDataBase;

  constructor(database: DatabaseName, sheansukeDatabaseProperty: ISheansukeDatabaseProperty) {
    switch (database) {
      case "PostgreSQL": {
        this.instante = new PostgreSQLFactory().createDabatase(sheansukeDatabaseProperty.uri, sheansukeDatabaseProperty.properties);
        break;
      }

      case "MongoDB": {
        this.instante = new MongoDBFactory().createDabatase(sheansukeDatabaseProperty.uri, sheansukeDatabaseProperty.properties);
        break;
      }

      case "SQLite": {
        this.instante = new PostgreSQLFactory().createDabatase(sheansukeDatabaseProperty.uri, sheansukeDatabaseProperty.properties);
        break;
      }
    }
  }

  getInstance(): IDataBase {
    return this.instante;
  }
}
