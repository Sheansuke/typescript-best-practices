import { IQuery } from "../interfaces/IQuery";

export abstract class Query<T> implements IQuery<T> {
    select(model: T): void {
      console.log(`data selected: ${model}`);
    }
    create(model: T): void {
      console.log(`data created: ${model}`);
    }
    update(model: T): void {
      console.log(`data updated: ${model}`);
    }
    delete(model: T): void {
      console.log(`data deleted: ${model}`);
    }
  }
  
  