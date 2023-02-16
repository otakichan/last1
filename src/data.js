let books = [
  {
    name: "クリープハイプ",
    id: 1,
    price: 1580,
  },
  {
    name: "マカロニえんぴつ",
    id: 2,
    price: 800,
  },
  {
    name: "3markets",
    id: 3,
    price: 1420,
  },
  {
    name: "マイアミパーティー",
    id: 4,
    price: 1800,
  },
];

export function getBooks() {
  return books;
}

export function getBook(id) {
  return books.find((book) => book.id === id);
}
