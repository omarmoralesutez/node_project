// Este archivo va a ser el DAO o el Service

import { pool } from "../../../config/postgres";
import { TUser } from "../entities/user";
import { IUserRepository } from "../use-cases/ports/user.repository";

export class UserStorageGateway implements IUserRepository {

    async findAll(): Promise<TUser[]> {
        const query = 'SELECT * FROM users ORDER BY id DESC;';
        const {rows: userRows} = await pool.query(query)

        return userRows.map(user => <TUser>user);
    }
    findById(id: number): Promise<TUser> {
        throw new Error("Method not implemented.");
    }
    async save(user: TUser): Promise<boolean> {
        const query = 'INSERT INTO users(username, password, status_id, person_id) VALUES (?,?,?,?)';
        const response =  await pool.query(query, Object.values(user));

       
    }
    update(user: TUser): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}