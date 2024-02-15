import { getAllBooks } from './getAllBooks';
import { getBook } from './getBook';

export const updateBook = async (setLibrary, id, title, author, editorial, pags, isbn, availability) => {
  try {
    const bookUpdated = {
      id: id,
      title: title,
      author: author,
      editorial: editorial,
      pages: pags,
      isbn13: isbn,
      avaiable: availability,
    };

    const response = await fetch(`http://10.0.2.2:3000/books/${id}`, {
      method: 'PUT',
      body: JSON.stringify(bookUpdated),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const updated = await response.json();

    if (!response.ok) {
      throw new Error(updated.message);
    }

    await getAllBooks(setLibrary);
    return bookUpdated;
  } catch (error) {
    console.log(error.message);
  }
};
