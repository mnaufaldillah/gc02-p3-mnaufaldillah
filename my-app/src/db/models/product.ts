import { ObjectId } from "mongodb";
import { getMongoClientInstance } from "../config";

const DATABASE_NAME = "gc02-p3-mnaufaldillah";
const COLLECTION_PRODUCT = "Products";

export interface ProductModel {
    _id: ObjectId;
    name: string;
    slug: string;
    description: string;
    excerpt: string;
    price: number;
    tags: string[];
    thumbnail: string;
    images: string[];
    createdAt: string | Date;
    updatedAt: string | Date;
}

export const getDb = async () => {
    const client = await getMongoClientInstance();

    const db = client.db(DATABASE_NAME);

    return db;
}

export const getAllProducts = async (page: number) => {
    const db = await getDb();

    const products = (await db
        .collection(COLLECTION_PRODUCT)
        .find()
        .limit(8)
        .skip(page * 8)
        .toArray()
    ) as ProductModel[]

    return products;
}

export const getAllProductsByName = async (inputSearch : string, page: number) => {
    const db = await getDb();

    const products = (await db
        .collection(COLLECTION_PRODUCT)
        .find(
            {
                name: {
                    '$regex': inputSearch, '$options': 'i'
                }
            }
        )
        .limit(8)
        .skip(page * 8)
        .toArray()
    ) as ProductModel[]

    return products;
}

export const getAllProductsFeatured = async () => {
    const db = await getDb();

    const products = (await db
        .collection(COLLECTION_PRODUCT)
        .find()
        .limit(5)
        .toArray()
    ) as ProductModel[]

    return products;
}

export const getProductBySlug = async (productSlug: string) => {
    const db = await getDb();

    const product = (await db
        .collection(COLLECTION_PRODUCT)
        .findOne(
            {
                slug: {
                    '$regex': productSlug, '$options': 'i'
                }
            }
        )
    ) as ProductModel;

    return product;
}