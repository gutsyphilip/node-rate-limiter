import { Router } from 'express';
import { getBooks } from './books.controller';

let booksRouter = new Router();

booksRouter.get('/', getBooks);

export default booksRouter;
