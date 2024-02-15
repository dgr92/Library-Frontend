export const getBook = async (book) => {
  try {
    return (bookData = await fetch(`http://10.0.2.2:3000/books/${book.id}`)
      .then((response) => response.json())
      .then((book) => {
        return book.data;
      }));
  } catch (error) {
    console.error(error.message);
  }
};
