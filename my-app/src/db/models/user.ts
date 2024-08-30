import { ObjectId } from "mongodb";
import { getMongoClientInstance } from "../config";
import { hashPassword } from "../helpers/bcrypt";

const DATABASE_NAME = "gc02-p3-mnaufaldillah";
const COLLECTION_USER = "Users";

export interface UserModel {
    _id: ObjectId;
    name: string;
    username: string;
    email: string;
    password: string;
};

export type UserModelInput = Omit<UserModel, "_id">;

export const getDb = async () => {
    const client = await getMongoClientInstance();

    const db = client.db(DATABASE_NAME);

    return db;
}

export const getAllUsers = async () => {
    const db = await getDb();
    const users = (await db
        .collection(COLLECTION_USER)
        .find()
        .project({ password: 0 })
        .toArray()
    ) as UserModel[];

    return users;
}

export const getUserById = async (id: string) => {
    const db = await getDb();
    const objectId = new ObjectId(id);

    const user = (await db
        .collection(COLLECTION_USER)
        .findOne(
            { _id: objectId},
            {
                projection: {
                    password: 0
                }
            }
        )
    ) as UserModel;

    return user;
}

export const getUserByEmail = async (email: string) => {
    const db = await getDb();

    const user = (await db
        .collection(COLLECTION_USER)
        .findOne(
            { email }
        )
    ) as UserModel;

    return user;
}


export const registerUser = async (user: UserModelInput) => {
    const db = await getDb();

    const modifiedUser : UserModelInput = {
        ...user,
        password: hashPassword(user.password)
    }

    const newUser = await db.collection(COLLECTION_USER).insertOne(modifiedUser);

    return {...newUser, _id: newUser.insertedId};
}