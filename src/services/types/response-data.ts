export type TErrorState = {
  message?: string
};

export type TBooksListData = {
  title: string,
  authors: string[],
  categories: string[],
  imageLinks: {
    thumbnail: string
  }
}