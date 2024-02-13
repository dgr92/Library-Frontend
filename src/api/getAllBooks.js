export const getAllBooks = async (setLibrary) => {
  try {
    const libraryData = await fetch('http://10.0.2.2:3000/books')
      .then((response) => response.json())
      .then((book) => {
        return book.data;
      });
    await setLibrary(libraryData);

  } catch (error) {
    console.log(error.message);
  }
};
