import { getAllBooks } from './getAllBooks';

export const deleteBook = async (id, setLibrary) => {
  try {
    const response = await fetch(`http://10.0.2.2:3000/books/${id}`, {
      method: 'DELETE',
    });

    const deletedBook = await response.json();

    if (!response.ok) {
      throw new Error(deletedBook.message);
    }

    await getAllBooks(setLibrary);
  } catch (error) {
    console.error(error.message);
  }
};
