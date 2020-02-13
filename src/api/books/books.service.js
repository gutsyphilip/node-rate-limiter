import fs from 'fs';
import path from 'path';

const pathToJsonFile = 'src/api/books/books.json';
export const fetchSampleData = () => {
  let rawdata = fs.readFileSync(pathToJsonFile);
  let books = JSON.parse(rawdata);
  return books;
};
