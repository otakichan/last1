import { NavLink, Outlet } from "react-router-dom";
import { getBooks } from "./data";

export default function BookList() {
  let books = getBooks();
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {books.map((book) => (
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
              };
            }}
            to={`/book-list/${book.id}`}
            key={book.id}
          >
            {book.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
