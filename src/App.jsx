import { useState } from "react";
import Playground from "./components/Playground";

export default function App() {
  const [show,setShow] = useState(false);
  return (
    <>
      <button className="border border-orange-400 p-1 rounded mb-1" onClick={() => setShow(!show)}>
        {show ? 'Unmount' : 'Mount'} the component
      </button>
      {show && <hr />}
      {show && <Playground />}
    </>
  );
}