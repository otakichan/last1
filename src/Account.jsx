import "./App.css";

export default function Account() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <table>
        <tr>
          <td className="a">名前</td>
          <td className="b">滝口心</td>
        </tr>
        <tr>
          <td className="a">生年月日</td>
          <td className="b">2003/09/01</td>
        </tr>
        <tr>
          <td className="a">趣味</td>
          <td className="b">音楽を聞く事</td>
        </tr>
      </table>
    </main>
  );
}
