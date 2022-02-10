import { useEffect, useState } from "react";

function ReactCapsule() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
      });
  }, []);

  return (
    <div>
      filter: {filter}
      <input type="text" onChange={(e) => setFilter(e.target.value)}></input>
      Titles: <br />
      {items &&
        items.map((value, index) => {
          return <h1 key={value.id}>{value.title}</h1>;
        })}
    </div>
  );
}
export default ReactCapsule;
