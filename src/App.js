import "./App.css";
import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>おすすめのバンド</h1>
      <nav
        style={{
          borderBottom: "solid 3px gray",
          paddingBottom: "25px",
        }}
      >
        <Link to="/book-list">バンド一覧</Link> |{" "}
        <Link to="/account">自己紹介</Link>
      </nav>
      <Outlet />
    </div>
  );
}
