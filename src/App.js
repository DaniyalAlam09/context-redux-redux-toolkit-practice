import { useData } from "./DataProvider";

const App = () => {
  const data = useData();

  return (
    <div>
      {data.map((post) => (
        <h1 key={post.id}>{post.title}</h1>
      ))}
    </div>
  );
};

export default App;
