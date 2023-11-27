export interface IQuery<T> {
    select(model: T): void;
    create(model: T): void;
    update(model: T): void;
    delete(model: T): void;
  }
  