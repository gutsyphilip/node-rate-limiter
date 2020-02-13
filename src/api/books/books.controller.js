import { fetchSampleData } from './books.service';

export const getBooks = (req, res, next) => {
  try {
    const books = fetchSampleData();
    res.jsend.success(books);
  } catch (error) {
    next(error);
  }
};
