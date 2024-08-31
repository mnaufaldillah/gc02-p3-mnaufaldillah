import { ObjectId } from "mongodb";
import { getMongoClientInstance } from "../config";
import { ProductModel } from "./product";

const DATABASE_NAME = "gc02-p3-mnaufaldillah";
const COLLECTION_WISHLIST = "Wishlists";

export interface WishlistModel {
    _id: ObjectId;
    userId: ObjectId;
    productId: ObjectId;
    createdAt: string | Date;
    updatedAt: string | Date;
}

export type WishlistModelInput = Omit<WishlistModel, "_id">;

export interface WishlistModelOutput extends WishlistModel {
    product: ProductModel
}

export const getDb = async () => {
    const client = await getMongoClientInstance();

    const db = client.db(DATABASE_NAME);

    return db;
}

export const getAllWishlist = async (userId: string) => {
    const db = await getDb();
    const objectUserId = new ObjectId(userId);

    const agg = [
        {
            '$match': {
            'userId': objectUserId
            }
        }, {
            '$lookup': {
            'from': 'Products', 
            'localField': 'productId', 
            'foreignField': '_id', 
            'as': 'product'
            }
        }, {
            '$unwind': {
            'path': '$product', 
            'preserveNullAndEmptyArrays': true
            }
        }
    ]

    const wishlists = (await db
        .collection(COLLECTION_WISHLIST)
        .aggregate(agg)
        .toArray()
    ) as WishlistModel[];

    return wishlists;
}

export const getWishlistById = async (userId: string, productId: string) => {
    const db = await getDb();
    const objectUserId = new ObjectId(userId);
    const objectProductId = new ObjectId(productId);

    const wishlist = (await db
        .collection(COLLECTION_WISHLIST)
        .findOne(
            {
                userId: objectUserId,
                productId: objectProductId
            }
        )
    ) as WishlistModel;

    return wishlist;
} 

export const addWishlist = async (userId: string, productId: string) => {
    const db = await getDb();
    const objectUserId = new ObjectId(userId);
    const objectProductId = new ObjectId(productId);

    const modifedWishlist : WishlistModelInput = {
        userId: objectUserId,
        productId: objectProductId,
        createdAt: new Date(),
        updatedAt: new Date()
    };

    const newWishlist = await db.collection(COLLECTION_WISHLIST).insertOne(modifedWishlist);

    return {...newWishlist, _id: newWishlist.insertedId}
}

export const removeWishlist = async (wishlistId: string) => {
    const db = await getDb();
    const objectWishlistId = new ObjectId(wishlistId);

    const removedWishlist = await db.collection(COLLECTION_WISHLIST).deleteOne(
        { _id: objectWishlistId}
    )

    return removedWishlist;
}