import { getAllBooks } from './getAllBooks';

export const createNewBook = async (title, author, editorial, pages, isbn13, setLibrary) => {
  try {
    const newBook = {
      title: title,
      author: author,
      editorial: editorial,
      pages: pages,
      isbn13: isbn13,
    };

    const response = await fetch('http://10.0.2.2:3000/books', {
      method: 'POST',
      body: JSON.stringify(newBook),
      headers: { 'Content-Type': 'application/json' },
    });

    const created = await response.json();

    if (!response.ok) {
      throw new Error(created.message);
    }

    await getAllBooks(setLibrary);
  } catch (error) {
    console.log(error.message);
  }
};
