import { Query } from "../../abstract_class/Query"

export class PostgreSQLQuery<T> extends Query<T> {
    select(model: T): void {
        console.log(`PostgreSQL: data selected: ${Object.keys(model as any).map(key => `\n ${key} : ${model[key]}`)} `)
    }
    create(model: T): void {
        console.log(`PostgreSQL: data created: ${Object.keys(model as any).map(key => `\n ${key} : ${model[key]}`)}`)
    }
    update(model: T): void {
        console.log(`PostgreSQL: data updated: ${Object.keys(model as any).map(key => `\n ${key} : ${model[key]}`)} `)
    }
    delete(model: T): void {
        console.log(`PostgreSQL: data deleted: ${Object.keys(model as any).map(key => `\n ${key} : ${model[key]}`)} `)
    }

}

