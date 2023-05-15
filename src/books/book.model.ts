import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title not found."],
        unique: [true, "title must be unique."],
    },
    author: {
        type: String,
        required: [true, "author info not found."],
    },
    price: {
        type: Number,
        required: [true, "price not found."],
    },
    genre: [String], // array of strings
    pages: Number,
    rating: {
        type: Number,
        required: [true, "rating not found."]
    }
});

export class Book {
    id: string;
    title: string;
    author: string;
    price: number;
    genre: [string];
    pages: number;
    rating: number;
}
