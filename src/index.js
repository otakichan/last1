import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Account from "./Account";
import BookList from "./BookList";
import BookDetail from "./BookDetail";

//

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="account" element={<Account />} />
        <Route path="book-list" element={<BookList />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

<Route path="book-list" element={<BookList />}>
  <Route path=":id" element={<BookDetail />} />
</Route>;
