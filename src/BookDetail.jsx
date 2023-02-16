import { useParams } from "react-router-dom";
import { getBook } from "./data";
export default function BookDetail() {
  let params = useParams();
  let book = getBook(parseInt(params.id, 10));
  return (
    <main style={{ padding: "1rem" }}>
      <p>商品番号: {book.id}</p>
      <h2>{book.name}</h2>
      <p>価格: {book.price}円</p>
    </main>
  );
}
