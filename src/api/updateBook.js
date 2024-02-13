export const updateBook = (
  title,
  author,
  editorial,
  pags,
  isbn,
  availability,
) => {
  try {
    const bookUpdated = {
      title: title,
      author: author,
      editorial: editorial,
      pages: pags,
      isbn13: isbn,
      avaiable: availability,
    };
    console.log(bookUpdated);
    // const response = await fetch(`http://10.0.2.2:3000/books/${id}`, {
    //   method: 'PUT',
    // body:  JSON.stringify({title, author, editorial, pags, isbn}),
    // headers:{ "Content-Type": "application/json" }

    // }
  } catch (error) {
    console.log(error.message);
  }
};
