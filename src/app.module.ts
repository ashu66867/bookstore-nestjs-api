import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
    BooksModule,
    MongooseModule.forRoot(process.env.DB_ATLAS_URL ,{
      dbName: 'bookstore_DB'
    }
    )
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }