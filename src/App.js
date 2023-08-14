// // import { useData } from "./DataProvider";

// // const App = () => {
// //   const data = useData();

// //   return (
// //     <div>
// //       {data.map((post) => (
// //         <h1 key={post.id}>{post.title}</h1>
// //       ))}
// //     </div>
// //   );
// // };

// // export default App;


// // redux toolkit
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchData } from './store';
// import LazyLoad from 'react-lazyload';
// import ImageWithLoader from './ImageWithLoader';
// const PlaceholderImage = () => {
//   console.log('PlaceholderImage is rendering');
//   return (
//     <img src="/placeholders/hello.jpg" alt="Loading..." />
//   );
// };

// function App() {
//   // const dispatch = useDispatch();
//   // const { data, loading, error } = useSelector((state) => state.data);

//   // console.log(data, loading, error);

//   // useEffect(() => {
//   //   // Dispatch the fetchData async thunk when the component mounts
//   //   dispatch(fetchData());
//   // }, [dispatch]);

//   // if (loading) {
//   //   return <div>Loading...</div>;
//   // }

//   // if (error) {
//   //   return <div>Error: {error}</div>;
//   // }

//   return (
//     // <div className="ps-promotions my-5">
//     //   <div className="ps-container">
//     //     <div className="row">
//     //       <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
//     //         <LazyLoad
//     //           height={200}
//     //           offset={200}
//     //           placeholder={<PlaceholderImage />}>
//     //           <img
//     //             src='https://res.cloudinary.com/nxb/image/upload/v1682328243/full_stack_web_0b65702925.jpg'
//     //             onError={(e) => {
//     //               e.target.onerror = null;
//     //               e.target.src =
//     //                 '/placeholders/hello.jpg';
//     //             }}
//     //             alt='jje'
//     //             loading="lazy"
//     //           />
//     //         </LazyLoad>
//     //       </div>
//     //       {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
//     //         <Link href="/course/full-stack-python-mastering-development-data-science-machine-learning-excellence">
//     //           <a className="ps-collection">
//     //             <img
//     //               src="/static/img/promotions/full-stack-python.jpg"
//     //               alt="full-stack-python"
//     //             />
//     //           </a>
//     //         </Link>
//     //       </div> */}
//     //     </div>
//     //   </div>
//     // </div>
//     <div>
//       <img src="https://res.cloudinary.com/nxb/image/upload/v1682328243/full_stack_web_0b65702925.jpg" width="640" height="360" alt="Puppy with balloons"/>
//       <hr/>
//       <div style={{backgroundColor:"blue", height:"40px"}}></div>
//     </div>
//   );
// }

// export default App;


import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const MyImage = ({ image }) => {
  return (
    <LazyLoadImage
      alt={image.alt}
      src={image.src}
      beforeLoad={() => (
        <div>Loading...</div>
      )}
    >
      <img src={image.src} alt={image.alt} />
    </LazyLoadImage>
  );
};

const App = () => {
  const image = {
    alt: "Full Stack Web Developer",
    src: "https://res.cloudinary.com/nxb/image/upload/v1682328243/full_stack_web_0b65702925.jpg",
  };

  return <MyImage image={image} />;
};

export default App;
