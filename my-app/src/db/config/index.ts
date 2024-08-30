import { MongoClient } from "mongodb";

const connectionString = process.env.URI_MONGODB;

if(!connectionString) {
    throw new Error(`No connection string`)
}

let client : MongoClient;

export const getMongoClientInstance = async () => {
    if(!client) {
        client = new MongoClient(connectionString);

        await client.connect();
    }

    return client;
}