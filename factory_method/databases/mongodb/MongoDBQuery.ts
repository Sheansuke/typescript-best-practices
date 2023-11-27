import { Query } from "../../abstract_class/Query"

export class MongoDBQuery<T> extends Query<T> {
    select(model: T): void {
        console.log(`MongoDB: data selected: ${Object.keys(model as any).map(key => `\n ${key} : ${model[key]}`)} `)
    }
    create(model: T): void {
        console.log(`MongoDB: data created: ${Object.keys(model as any).map(key => `\n ${key} : ${model[key]}`)}`)
    }
    update(model: T): void {
        console.log(`MongoDB: data updated: ${Object.keys(model as any).map(key => `\n ${key} : ${model[key]}`)} `)
    }
    delete(model: T): void {
        console.log(`MongoDB: data deleted: ${Object.keys(model as any).map(key => `\n ${key} : ${model[key]}`)} `)
    }
}
