// Este archivo va a ser el DAO o el Service

import { TUser } from "../entities/user";
import { IUserRepository } from "../use-cases/ports/user.repository";

export class UserStorageGateway implements IUserRepository {

    findAll(): Promise<TUser[]> {
        throw new Error("Method not implemented.");
    }
    findById(id: number): Promise<TUser> {
        throw new Error("Method not implemented.");
    }
    save(user: TUser): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    update(user: TUser): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}