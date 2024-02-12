// Get all books
export const getLibraryData = async (setLibrary) => {
  const libraryData = await fetch('http://10.0.2.2:3000/books')
    .then(response => response.json())
    .then(book => {
      return book.data;
    });
  setLibrary(libraryData);
};
