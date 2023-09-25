import { TUser } from "../../entities/user";

//Es como el repository de JPA de Spring
export interface IUserRepository {
    findAll(): Promise<TUser[]>
    findById(id: number): Promise<TUser>
    save(user: TUser): Promise<boolean>; 
    update(user: TUser): Promise<boolean>; 
    delete(id: number): Promise<boolean>; 
}