import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Book } from './book.model';

@Injectable()
export class BooksService {
    books: Book[] = [];

    constructor(@InjectModel('Book') private readonly bookModel: Model<Book>) {};

    async getBooks() {
        const books = await this.bookModel.find({}).exec();
        return books as Book[];
    }
}