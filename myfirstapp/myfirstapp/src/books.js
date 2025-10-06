import { v4 as uuidv4 } from 'uuid';
import img from './images/book.jpg';
const books = [
  {
    img: img,
    title: 'Title Abhishek',
    author: 'Abhishek Choudhary',
    id: uuidv4(),
  },
  {
    img: img,
    title: 'Title Supriya',
    author: 'Supriya Moond',
    id: uuidv4(),
  },
];

export default books;
