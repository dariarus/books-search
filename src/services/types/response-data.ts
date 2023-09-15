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

export type TBookData = Omit<TBooksListData, "{imageLinks: {thumbnail: string}}"> & {
  description: string,
  imageLinks: {
    large: string
  }
}