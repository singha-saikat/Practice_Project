import { useRef } from "react";

export default function From() {
    let myRef = useRef(null);
    const handleClick=()=>{
        myRef.current.focus();
    }
  return (
    <div>
      <input type="text" ref={myRef} />
      <button onClick={handleClick} className="btn btn-primary">Focus the input</button>
    </div>
  );
}