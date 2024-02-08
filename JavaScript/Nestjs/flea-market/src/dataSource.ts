import { DataSource } from "typeorm";

export default new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "postgres",
    synchronize: false,
    logging: false,
    entities: ["src/entities/*.ts"], // entitiesを指定
    migrations: ["src/migrations/*.ts"], // migrationsを指定
    subscribers: []
})