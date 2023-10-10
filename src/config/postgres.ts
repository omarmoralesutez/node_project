import { Client } from "pg";
import Pool from "pg-pool";
require('dotenv').config()

const config: Pool.Config<Client> = {
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    max: 5,
    idleTimeoutMillis: 1000, 
    connectionTimeoutMillis: 1000,
    maxUses: 7500, 
}

export const pool = new Pool(config);