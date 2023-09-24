import bcriptjs from 'bcryptjs';
require('dotenv').config()

export async function hash(password:string) {
    return new Promise((resolve, reject) =>{
         bcriptjs.hash(password, process.env.BCRYPTJS!, (err, hash) => {
                if(err) reject(err)
                resolve(hash)
            });
    })
}

export async function compare(password:string, hash: string) {
    return new Promise((resolve, reject) =>{
        bcriptjs.compare(password, hash, (err, result) =>{
            if(err) reject(err)
            resolve(result)
        })
    })
}   