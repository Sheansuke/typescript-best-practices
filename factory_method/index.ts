import { SheansukeORM } from "./orm";

export const factoryMethodExample = () => {
  // ===================== ===================== ===================== ===================== ===================== ===================== =====================
  // POSTGRESQL EXAMPLE
  console.log(" \n POSTGRESQL EXAMPLE ===================== ===================== ===================== ===================== ===================== =====================");

  const postgresql_database = new SheansukeORM("PostgreSQL", { uri: "database_template-POSTGRESQL:user:password/public" }).getInstance();

  postgresql_database.connect();

  type PostgresSQLUser = {
    username: string;
    email: string;
  };

  const newPostgresSQLUser: PostgresSQLUser = {
    username: "Sheansuke",
    email: "corelibrary@gmail.com",
  };

  postgresql_database.query<PostgresSQLUser>().create(newPostgresSQLUser);

  postgresql_database.disconnect();

  // ===================== ===================== ===================== ===================== ===================== ===================== =====================
  // MONGODB EXAMPLE
  console.log(" \n MONGODB EXAMPLE ===================== ===================== ===================== ===================== ===================== =====================");

  const mongodb_database = new SheansukeORM("MongoDB", { uri: "database_template-MONGODB:user:password/public" }).getInstance();

  mongodb_database.connect();

  type MongoDBUser = {
    username: string;
    email: string;
    age: number;
    country: string;
  };

  const newMongoDBUser: MongoDBUser = {
    username: "Sheansuke",
    email: "corelibrary@gmail.com",
    age: 28,
    country: "Dominican Republic",
  };

  mongodb_database.query<MongoDBUser>().create(newMongoDBUser);

  mongodb_database.disconnect();
};
