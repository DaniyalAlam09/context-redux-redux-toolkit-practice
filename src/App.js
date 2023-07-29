// import { useData } from "./DataProvider";

// const App = () => {
//   const data = useData();

//   return (
//     <div>
//       {data.map((post) => (
//         <h1 key={post.id}>{post.title}</h1>
//       ))}
//     </div>
//   );
// };

// export default App;


// redux toolkit
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from './store';

function App() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);

  console.log(data, loading, error);

  useEffect(() => {
    // Dispatch the fetchData async thunk when the component mounts
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Data from API:</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

