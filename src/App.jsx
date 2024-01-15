/* eslint-disable react/prop-types */
import "./App.css";
import data from "./data";
import Comment from "./component/Comment";


function App() {
  console.log(data);
  return (
    <>
      <Comment comment={data} />
    </>
  );
}

export default App;
